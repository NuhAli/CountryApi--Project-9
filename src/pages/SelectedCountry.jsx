import React from 'react'

const SelectedCountry = (props) => {
    return (
        <div className="country">
            <div className="country__container">
                <h2 className="country__title">
                    {
                        props.data[0].name
                    }
                </h2>
                <div className="country__information">
                    <div className="country__information__wrapper">
                        <table className="country_information_table">
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Region
                                </th>
                                <th>
                                    Capital City
                                </th>
                                <th>
                                    Population
                                </th>
                                <th>
                                    Calling Codes
                                </th>
                                <th>
                                    Language(s)
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedCountry
