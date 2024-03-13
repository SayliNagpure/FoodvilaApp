import { forwardRef } from "react"
import ItemList from "./ItemList"
const RestaurentCategory = forwardRef((props) => {
    const openNdclose = () => {
        return props?.setOpen()
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 my-6 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={openNdclose}>
                    <span className="font-blod text-2xl">{props?.data?.title} ({props?.data?.itemCards.length})</span>
                    <span>▼</span>
                </div>
                {props?.open && <ItemList items={props?.data?.itemCards} />}

            </div>
        </div>
    )
})
export default RestaurentCategory