import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SelectedCountry from './pages/SelectedCountry'
import Data from './utils/Data'
import './App.scss'
import Filters from './utils/Filters'

const App = () => {
    const [theme,setTheme] = useState("dark")
    const [data, setData] = useState([])
    const [sortedData,setSortedData] = useState([])
    const [currentItem, setCurrentItem] = useState([])
    const [filterQuery, setFilterQuery] = useState('')
    const [order, setOrder] = useState(0)

    useEffect(() => {
        Data.getData().then((response) => {
            setData(response)
        })
    }, [])

    const changeTheme = () => {
        theme === "dark"?setTheme("light"):setTheme("dark")
    }

    const handleChange = (e) => {
        const { value } = e.target
        setFilterQuery(value)
    }

    const handleSort = (e) => {
        setOrder(e.target.value)
    }

    function handleClick(id) {
        const filteredItem = data.filter(item => item.id === id)
        setCurrentItem(filteredItem)
    }

    function handleSearch(term) {
        Data.searchCountry(term).then(response => {
            setData(response)
        })
    }

    function restart() {
        Data.getData().then((response) => {
            setData(response)
            setFilterQuery("")
        })
    }

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
                    <SelectedCountry data={currentItem} />
                </Route>
            </Switch>
        </div>
    )
}

export default App

