import React from "react";
import { useState } from 'react'
import sty from './cssFiles/RestaurentAddress.css'
import img from './images/restaurent.jpg'
import FoodMenu from "./FoodMenu";
import OverAllRating from "./OverAllRating";
function RestaurentAddress(props){
    const[showMenuOnExploreMore,setshowMenuOnExploreMore]=useState(null);

    const aboutRestaurant={
        IDtvm1:{about:"ethachu  soolu bro antha kadaya pathi.ada  summa sollu bro"},
        IDmdri1:{about:"ethachu  soolu bro antha kadaya pathi.ada  summa sollu bro"},
        IDmdri2:{about:"ethachu  soolu bro antha kadaya pathi.ada  summa sollu bro"}
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
        },
        IDmdri2:{street: "melur",city: "madurai",state: "Tamil nadu",pin:"606901",
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
        document.getElementById('showMenuOnExploreMore').scrollIntoView({ behavior: 'smooth' });
       };
       

const onClickExploreMore=(menu)=>{
        
        setshowMenuOnExploreMore((
            <div className="Whole-dish-list" style={{ backgroundImage: "url('/bg-img2.jpg')" }}>
                <button className="close-button" onClick={onClickClose}><p>X</p></button>
                
                <FoodMenu menu={menu} />
            </div>
    ));

    
        
        console.log(menu);
   };

   

    return (
        <div>
        <div className="RestaurentAddressWhole" >
            {Object.entries(addresses).map(([id,adrs])=>(
                <div key={id} className="RestaurentAddresCard">
                <div className="InsideCard"  style={{backgroundImage:"url('/bg-img3.jpg')"}}>
                    <img className="Image"src={`/restaurantImages/${id}.avif`} alt ="Restaurant-Image"/>
                    <div className="AddressName">
                        <p>{aboutRestaurant[id].about}</p>
                        <p>{adrs.street}</p>
                        <p>{adrs.city}</p>
                        <p>{adrs.state}</p>
                        <p>{adrs.pin}</p>

                        <button className="boton-elegante" onClick={()=>onClickExploreMore(adrs.menu)}>Explore More </button>
                        <OverAllRating/>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1795.4086450821123!2d78.97934761545717!3d12.507949749139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1723954459516!5m2!1sen!2sin"
                    width="400" height="350"></iframe>
                    </div>
                    
            </div>
            
            ))}
            
            <div id='showMenuOnExploreMore'>{showMenuOnExploreMore}</div>
            
            
        </div>
       
        </div>
    );
}
export default RestaurentAddress;