import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

const Menu = () => {
    const pizzaList = pizzaData.map((pizza) => {
        return (
            <Pizza data={pizza} />
        )
    })
    
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {pizzaList}  
            </ul>
        </div>
    )
}

export default Menu