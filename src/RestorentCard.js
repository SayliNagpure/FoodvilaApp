import { image_URL } from "./Config"

function RestorentCard({ name, cuisines, cloudinaryImageId, locality, id }) {
    // console.log('restorent', restorent)
    return (
        <div className="w-72 h-96 p-2 border-spacing-2 m-4 text-white bg-gray-500 hover:bg-rose-50 hover:text-neutral-500 font-bold py-2 px-4 rounded">
            <img src={image_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export const withIsOpen = (RestorentCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-white p-2 m-2 rounded-lg text-green-500">avilable</label>
                <RestorentCard {...props} />
            </div>
        )
    }
}
export default RestorentCard
