import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { image_URL } from "./Config"

const ItemList=(props)=>{

    const dispatch=useDispatch ()
const handleAdditem=(i)=>{
dispatch(addItem(i))
}

return(
<div>  
{props?.items?.map((i)=>{ 
    return (
    <div key={i?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-letf flex justify-between">
      
        <div className="w-9/12">
        <div className="py-2 poniter">
        <span className="text-xl font-bold">{i?.card?.info?.name} </span>
        <span className="text-xl">₹ -{(i?.card?.info?.price)/100}</span>
        </div>
        <p>{i?.card?.info?.description}</p>
        </div>
        <div className="w-2/12 p-2">
            <div className="p-2 bg-gray-100 shadow-lg absolute">
                <button className="text-green-600" onClick={()=>handleAdditem(i)}>Add +</button>
            </div>
      <img src={image_URL+i?.card?.info?.imageId} className="" /> 
      </div> 
    </div>
    )
})}
</div>
)
}
export default ItemList