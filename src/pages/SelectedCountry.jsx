import React from 'react'

const SelectedCountry = (props) => {

    function getLanguages(obj) {
        let languagesArray = []

        obj.forEach(item => {
            languagesArray.push(<li key={Math.random()}>{item.name}</li>)
        })
        return languagesArray
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            <div className="country">
                <div className="country__container">
                    <div className="country__information__card">
                        <img
                            src={props.data[0].image}
                            alt={`The flag of ${props.data[0].name}`}
                            className="country__information__image"
                        />
                        <ul className="country__information__list">
                            <li className="country__information__list-item">
                                Name of country : {props.data[0].name}
                            </li>
                            <li className="country__information__list-item">
                                Region : {props.data[0].subRegion}, {props.data[0].region}
                            </li>
                            <li className="country__information__list-item">
                                Capital city : {props.data[0].capital}
                            </li>
                            <li className="country__information__list-item">
                                Population : ~ {numberWithCommas(props.data[0].population)}
                            </li>
                            <li className="country__information__list-item">
                                Language (s) : <ul className="country__information__languages">
                                    {
                                        getLanguages(props.data[0].languages)
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedCountry
