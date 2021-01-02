const Filters = {
    // Sorts countries by name (asc)
    nameAscending(arr){
        const newOrder = arr.sort((a,b) => a.name > b.name? 1:-1)
        return newOrder
    },
    // Sorts countries by name (des)
    nameDescending(arr){
        const newOrder = arr.sort((a,b) => a.name < b.name? 1:-1)
        return newOrder
    },
    // Sorts countries by population (asc)
    populationAscending(arr){
        const newOrder = arr.sort((a,b) => a.population > b.population? 1:-1)
        return newOrder
    },
    // Sorts countries by population (des)
    populationDescending(arr){
        const newOrder = arr.sort((a,b) => a.population < b.population? 1:-1)
        return newOrder
    },

}

export default Filters