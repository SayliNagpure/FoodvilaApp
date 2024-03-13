const ShimmerEffect = () => {
    return (
        <div className="flex flex-wrap">
            {Array.from({ length: 15 }).map((el,index) =>
                <div key={index} className="w-72 h-96 p-2 border-spacing-2 m-4 bg-slate-300"></div>
            )}
        </div>
    )
}

export default ShimmerEffect