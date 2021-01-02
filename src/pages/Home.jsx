import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdSort } from 'react-icons/md'
import Card from '../components/Card/Card'

const Home = (props) => {

    // Variable cards is used to dispaly every object within the props.data array as an individual country
    const cards = props.data.map(card => {
        return <Card
            key={Math.random()}
            card={card}
            handleClick={props.handleClick}
        />
    })

    return (
        <>
            <form action="#" className="App__filter">
                <div className="App__filter-area">
                    <select
                        value={props.order}
                        name="order"
                        onChange={props.handleSort}
                    >
                        <option value={0}>Please select an option</option>
                        <option value={1}>Sort by ascending order (name)</option>
                        <option value={2}>Sort by descending order (name)</option>
                        <option value={3}>Sort by ascending order (population)</option>
                        <option value={4} >Sort by descending order (population)</option>
                    </select>
                    <MdSort
                        className={`icon ${props.theme}`}
                        onClick={()=>{props.sort(props.order)}}
                    />
                </div>
                <div className="App__filter__search-area">
                    <input
                        type="text"
                        placeholder="Search for a specific country by name....."
                        name="filterQuery"
                        value={props.filterQuery}
                        onChange={props.handleChange}
                        aria-label="Filter countries by capital city, currency and region"
                    />
                    <FaSearch
                        className="icon"
                        onClick={() => { props.handleSearch(props.filterQuery) }}
                    />
                </div>
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
