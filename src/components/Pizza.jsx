import React from "react";

const Pizza = (props) => {
    return (
        <li className="pizza">
            <img src={props.data.photoName} alt="pizza" />
            <div>
                <h3>{props.data.name}</h3>
                <p>{props.data.ingredients}</p>
                <span>{props.data.price}</span>
            </div>
        </li>
    )
}

export default Pizza