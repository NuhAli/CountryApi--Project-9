import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SelectedCountry from './pages/SelectedCountry'
import Data from './utils/Data'
import Filters from './utils/Filters'
import './App.scss'


const App = () => {
    
    const [theme, setTheme] = useState("dark")
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [currentItem, setCurrentItem] = useState([])
    const [filterQuery, setFilterQuery] = useState('')
    const [order, setOrder] = useState(0)

    // Gets all the initial country data from the API as soon as the component mounts
    useEffect(() => {
        Data.getData().then((response) => {
            setData(response)
        })
    }, [])

    // Toggles the theme from dark to light
    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    // Captures the input from the search text box and stores the value as state
    const handleChange = (e) => {
        const { value } = e.target
        setFilterQuery(value)
    }
    // Captures the selection option from the select box and stores the value in state
    const handleSort = (e) => {
        setOrder(e.target.value)
    }
    // Used to select a specific country
    function handleClick(id) {
        const filteredItem = data.filter(item => item.id === id)
        setCurrentItem(filteredItem)
    }
    // Function takes the search query term from state as a paramter, it returns the API response and updates the data state
    function handleSearch(term) {
        Data.searchCountry(term).then(response => {
            setData(response)
        })
    }
    // Function used to take user from specific country page back to the home page that lists all the countries.
    function restart() {
        Data.getData().then((response) => {
            setData(response)
            setFilterQuery("")
        })
    }
    // Function sorts the state depending on the option thats selected in the sort selctbox
    function sort(order) {
        if (order === "1") {
            const newOrder = Filters.nameAscending(data)
            setSortedData(newOrder)
        } else if (order === "2") {
            const newOrder = Filters.nameDescending(data)
            setSortedData(newOrder)
        }
        else if (order === "3") {
            const newOrder = Filters.populationAscending(data)
            setSortedData(newOrder)
        }
        else if (order === "4") {
            const newOrder = Filters.populationDescending(data)
            setSortedData(newOrder)
        }
        setSortedData([])
    }

    return (
        <div className={`App App--${theme}`}>
            <Header
                restart={restart}
                theme={theme}
                changeTheme={changeTheme}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                        theme={theme}
                        data={data}
                        sortedData={sortedData}
                        filterQuery={filterQuery}
                        order={order}
                        sort={sort}
                        handleSort={handleSort}
                        handleChange={handleChange}
                        handleClick={handleClick}
                        handleSearch={handleSearch}
                    />
                </Route>
                <Route path="/selectedcountry">
                    <SelectedCountry
                        data={currentItem}
                        theme={theme}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default App

