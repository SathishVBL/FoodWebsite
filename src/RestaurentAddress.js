import React from "react";
import { useState } from 'react'
import sty from './cssFiles/RestaurentAddress.css'
import img from './images/restaurent.jpg'
import FoodMenu from "./FoodMenu";
function RestaurentAddress(props){
    const[showMenuOnExploreMore,setshowMenuOnExploreMore]=useState(null);

    const addresses=[
        {street: "Navappalayam",city: "Tiruvannamalai",state: "Tamil nadu",pin:"606901",
            menu:[
                {item:"dosa",amt:20,offer:20},
                {item:"idly",amt:15,offer:15},
                {item:"vada",amt:10,offer:10}

            ]
        },
        {street: "melur",city: "madurai",state: "Tamil nadu",pin:"606901",
            menu:[
                {item:"parottaa",amt:20,offer:20},
                {item:"mutton chukka",amt:15,offer:15},
                {item:"peper chicken",amt:10,offer:10}

            ]
        }
    ];

const onClickExploreMore=(menu)=>{
        // props.setshowMenuOnExploreMore(<FoodMenu menu={menu}/>);
        setshowMenuOnExploreMore(<FoodMenu menu={menu}/>);
        console.log(menu);
   };
   

    return (
        <div>
        <div className="RestaurentAddressWhole">
            {addresses.map((adrs,index)=>(
                <div key={index} className="RestaurentAddresCard">
                <div className="InsideCard">
                    <img className="Image"src={img}/>
                    <div className="AddressName">
                        <p>{adrs.street}</p>
                        <p>{adrs.city}</p>
                        <p>{adrs.state}</p>
                        <p>{adrs.pin}</p>

                        <button className="boton-elegante" onClick={()=>onClickExploreMore(adrs.menu)}>Explore</button>

                    </div>
                    </div>
            </div>
            ))}
            
            
            
        </div>
        <div id='showMenuOnExploreMore'>{showMenuOnExploreMore}</div>
        </div>
    );
}
export default RestaurentAddress;