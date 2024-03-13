import { useState, useEffect, useContext } from "react"
import RestorentCard, { withIsOpen } from "./RestorentCard"
import ShimmerEffect from "./ShimmerEffect"
import { Link } from "react-router-dom"
import filterData from '../utils/FilterFunction'
import useOnline from "./hooks/useOnline"
// import userContex from "../utils/useContex"
import userContex from "../utils/useContex"

const BodyData = () => {
    const [filterResto, setFilterResto] = useState([])
    const [allRestaurant, setAllRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        getDataApi()
    }, [])

    const isOnline = useOnline()
    if (!isOnline) {
        return <h1>u r offline plz check ur internet</h1>
    }
    async function getDataApi() {
        const data1=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING")
        const jsonData1 = await data1.json()

        console.log('data1',jsonData1?.data?.cards[2]?.data?.data?.cards)
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
      
        setFilterResto(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log('jsonData?.data', jsonData?.data)
        setAllRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const RestoIsOpen = withIsOpen(RestorentCard)

    const {logged,setLogged}=useContext(userContex)

    return (
        <>
            <div className="flex">
                <input
                    type="text"
                    className="m-4 p-2 border-spacing-2"
                    placeholder="Search"
                    name="seach"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e?.target?.value)
                    }}
                />
                <button className="bg-stone-400 rounded-md p-1 h-12 my-2" onClick={() => {
                    const data = filterData(searchText, allRestaurant)
                    setFilterResto(data)
                }}>Search</button>
                <div>
                    <label className="p-2"> Name : </label>
                <input
                    type="text"
                    className="m-4 p-2 border-spacing-2"
                    placeholder="input"
                    name="input"
                    value={logged}
                    onChange={(e) => {
                        setLogged(e?.target?.value)
                    }}
                />
                </div>
            </div>
            {
                allRestaurant.length === 0 ? (<ShimmerEffect />) : (
                    <>
                        {filterResto?.length === 0 ? <h1>no data</h1> :
                            <div className=" flex flex-wrap">
                                {filterResto.map((resto) => {
                                    return (
                                        <Link to={"/RestaurantDetails/" + resto?.info?.id}>
                                            {resto?.info?.isOpen ? <RestoIsOpen {...resto?.info} /> : <RestorentCard {...resto?.info} key={resto?.info?.id} />}
                                        </Link>
                                    )
                                })}
                            </div>
                        }
                    </>
                )
            }
        </>


    )
}


export default BodyData
