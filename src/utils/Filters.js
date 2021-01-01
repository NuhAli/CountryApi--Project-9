const Filters = {
    nameAscending(arr){
        const newOrder = arr.sort((a,b) => a.name > b.name? 1:-1)
        return newOrder
    },

    nameDescending(arr){
        const newOrder = arr.sort((a,b) => a.name < b.name? 1:-1)
        return newOrder
    },
    populationAscending(arr){
        const newOrder = arr.sort((a,b) => a.population > b.population? 1:-1)
        return newOrder
    },
    populationDescending(arr){
        const newOrder = arr.sort((a,b) => a.population < b.population? 1:-1)
        return newOrder
    },

}

export default Filters