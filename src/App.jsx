import React, { useState,useEffect } from 'react'
import {Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SelectedCountry from './pages/SelectedCountry'
import Data from './utils/Data'
import './App.scss'

const App = () => {
    const [data,setData] = useState([])
    const [currentItem,setCurrentItem] = useState([]) 

    useEffect(() => {
        Data.getData().then((response) => {
            setData(response)
        })
    }, [])

    function handleClick(id) {
        const filteredItem = data.filter(item => item.id === id )
        setCurrentItem(filteredItem)
    }

    return (
        <div className="App App--dark">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home data={data} handleClick={handleClick} />
                </Route>
                <Route path="/selectedcountry">
                    <SelectedCountry data={currentItem} />
                </Route>
            </Switch>
        </div>
    )
}

export default App

