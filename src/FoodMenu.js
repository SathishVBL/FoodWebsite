import React, { useState } from "react";
import './FoodMenu.css';
import img from './images/homepage-hero-bg-img.jpg';
function FoodMenu(props){
    
    
    const menu=props.menu;
    return (
        
        <div className="dish-list">
            {menu.map((m, index) => (
                <div key={index} className="dish-item">
                    <img src={m.image} className="dish-image" />
                    <h3>{m.name}</h3>
                    <p>{m.dicrp}</p>
                    <p>{m.amt}</p>
                    <p>{m.offer}</p>
                </div>
            ))}
        </div>
        
    );
}
export default FoodMenu;
 // const menu=[
    //     {name:"parottaa",   amt:20,  offer:20,  dicrp:"nothing",  image:"/parotta_image.webp"
    //     },
    //     {name:"mutton chukka",    amt:15,    offer:15,    dicrp:"nothing",    image:"/mutton_image.jpg"
    //     },
    //     {name:"peper chicken",    amt:10,    offer:10,    dicrp:"nothing",    image:"/paneer_image.jpg"
    //     }

    // ];