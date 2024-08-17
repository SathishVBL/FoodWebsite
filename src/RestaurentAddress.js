import React from "react";
import { useState } from 'react'
import sty from './cssFiles/RestaurentAddress.css'
import img from './images/restaurent.jpg'
import FoodMenu from "./FoodMenu";
function RestaurentAddress(props){
    const[showMenuOnExploreMore,setshowMenuOnExploreMore]=useState(null);

    const aboutRestaurant={
        IDtvm1:{about:"ethachu  soolu bro antha kadaya pathi"},
        IDmdri1:{about:"ethachu  soolu bro antha kadaya pathi"}
    };

    const addresses={
        IDtvm1:{street: "Navappalayam",city: "Tiruvannamalai",state: "Tamil nadu",pin:"606901",
            menu:[
                {name:"Parottaa",   amt:20,  offer:20,  dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",  image:"/parotta_image.webp"
                },
                {name:"Mutton Chukka",    amt:15,    offer:15,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/mutton_image.jpg"
                },
                {name:"Peper Chicken",    amt:10,    offer:10,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/paneer_image.jpg"
                }]
        },
        IDmdri1:{street: "melur",city: "madurai",state: "Tamil nadu",pin:"606901",
            menu:[
                {name:"Biriyani",   amt:20,  offer:20,  dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",  image:"/biriyani2_image.jpg"
                },
                {name:"Full meal",    amt:15,    offer:15,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/full_meals_image.jpg"
                },
                {name:"Panner Masala",    amt:10,    offer:10,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/paneer_image.jpg"
                }]
        }
    };

    const onClickClose=()=>{
        setshowMenuOnExploreMore(<div></div>);
       };
       

const onClickExploreMore=(menu)=>{
        setshowMenuOnExploreMore((
            <div className="Whole-dish-list">
                <button className="close-button" onClick={onClickClose}><p>X</p></button>
                <FoodMenu menu={menu} />
            </div>
    ));
        console.log(menu);
   };

   

    return (
        <div>
        <div className="RestaurentAddressWhole">
            {Object.entries(addresses).map(([id,adrs])=>(
                <div key={id} className="RestaurentAddresCard">
                <div className="InsideCard">
                    <img className="Image"src={img}/>
                    <div className="AddressName">
                        <p>{aboutRestaurant[id].about}</p>
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