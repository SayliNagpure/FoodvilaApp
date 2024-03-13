import { useEffect, useState } from "react";

const useMenuData = (id) => {
    const [insideData, setInsideData] = useState(null)
    useEffect(() => {
        getInsideData(id)
    }, [])

    async function getInsideData(id) {
        const data1=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.19630&lng=72.96750&restaurantId="+id)
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data1.json()
        console.log('jsonvvvv',json?.data?.cards[2]?.groupedCard?.cardGroupMap)

        const catgery=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i)=>i?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

        console.log('catgery', catgery)
        setInsideData(catgery)

    }
    return insideData
}

export default useMenuData