function filterData(searchText, allRestaurant) {
    const filterData = allRestaurant.filter((el) => {
        return (
            el.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        )
    })
    console.log('filterData', filterData)
    // const filterData = mapedData.filter((res) =>res?.info?.includes(searchText))
    return filterData

}

export default filterData