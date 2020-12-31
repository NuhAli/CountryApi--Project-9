import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import Card from '../components/Card/Card'

const Home = (props) => {
    // State Area
    const [filterQuery, setFilterQuery] = useState('')

    // State functions
    const handleChange = (e) => {
        const { value } = e.target
        setFilterQuery(value)
    }
    // State Area end

    const cards = props.data.map(card => {
        return <Card
                    key={Math.random()}
                    card={card}
                    handleClick={props.handleClick}
                />
    })

    return (
        <>
            <form action="" className="App__filter">
                <input
                    type="text"
                    placeholder="Search countries by name....."
                    name="filterQuery"
                    value={filterQuery}
                    onChange={handleChange}
                    aria-label="Filter countries by capital city, currency and region"
                />
                <FaSearch className="icon" />
            </form>
            <section className="results-area">
                <div className="results-area__container">
                    {
                        cards
                    }
                </div>
            </section>
        </>
    )
}

export default Home
