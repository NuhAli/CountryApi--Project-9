import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = (props) => {
    return (
        <Link
            to="/selectedcountry" 
            className="cards-item-link"
            onClick={() => {props.handleClick(props.card.id)}}
        >
            <figure
                className="cards-item-pic-wrap"
                data-category={props.card.name}
            >
                <img
                    src={props.card.image}
                    alt={props.card.label}
                    className="cards-item-img"
                />
            </figure>
        </Link>
    )
}

export default Card

