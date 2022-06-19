import React from "react";
import Star from '../images/Star.png';


export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../images/${props.coverImg}`} alt="" />
            <div className="card--stats">
                <img className="card--star" src={Star} alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})•</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
        </div>

    )
}