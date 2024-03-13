import { useParams } from "react-router-dom"
import { image_URL } from "./Config"
import useMenuData from "./hooks/useMenuData"
import RestaurentCategory from "./RestaurentCategory"
import ShimmerEffect from "./ShimmerEffect"
import { useRef, useState } from "react"


const RestaurantDetails = () => {
    const { id } = useParams()
    const insideData = useMenuData(id)
    const [isOpen, setIsOpen] = useState(null)
    return (
        <div className="text-center">
            {insideData == null ? <h1></h1> : insideData?.map((i,index) => {
                return <RestaurentCategory
                    data={i?.card?.card}
                    key={i?.card?.card?.title}
                    open={index === isOpen ? true : false}
                    setOpen={()=>setIsOpen(index)}
                />
                
            })
            }

        </div>
    )
}
export default RestaurantDetails