import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import ItemList from "./ItemList"

const CardPage=()=>{

const cartItems=useSelector((store)=>store?.cart?.items)

const dispatch=useDispatch()
const handleClear=()=>{
    dispatch(clearCart())
}
    return(<div className="tex-center m-4 p-4">
        <h1 className="text-2xl font-bold">card</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-red-600 rounded-lg text-white" onClick={handleClear}>Clear Cart</button>
            {cartItems===0?<h1>please add somthing....</h1>:""}
            <ItemList items={cartItems}/>
        </div>
        </div>)
}

export default CardPage