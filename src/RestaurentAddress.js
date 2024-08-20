import React from "react";
import { useState } from 'react'
import sty from './cssFiles/RestaurentAddress.css'
import img from './images/restaurent.jpg'
import FoodMenu from "./FoodMenu";
import OverAllRating from "./OverAllRating";
function RestaurentAddress(props){
    const[showMenuOnExploreMore,setshowMenuOnExploreMore]=useState(null);

    const aboutRestaurant={
        IDtvm1:{about:"A cozy spot offering a blend of traditional and contemporary flavors with stunning sunset views."},
        IDmdri1:{about:" A vibrant eatery known for its gourmet dishes, warm ambiance, and exceptional service."},
        IDmdri2:{about:"A modern restaurant that brings global culinary experiences to the heart of the city."}
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
        IDmdri1:{street: "Melur",city: "Madurai",state: "Tamil nadu",pin:"606901",
            menu:[
                {name:"Biriyani",   amt:20,  offer:20,  dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",  image:"/biriyani2_image.jpg"
                },
                {name:"Full meal",    amt:15,    offer:15,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/full_meals_image.jpg"
                },
                {name:"Panner Masala",    amt:10,    offer:10,    dicrp:"Delicious, fresh, and flavorful dishes that blend tradition with modern culinary creativity.",    image:"/paneer_image.jpg"
                }]
        },
        IDmdri2:{street: "Melur",city: "Madurai",state: "Tamil nadu",pin:"606901",
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
       

const onClickExploreMore=(menu,city)=>{
        
        setshowMenuOnExploreMore((
            <div className="menu-whole2">
                <div className="city-closebtn">
                    <p className="at">At {city}</p>
                    <button className="close-button" onClick={onClickClose}><p>X</p></button>
                </div>

                
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
                <div className="InsideCard"  >
                    {/* style={{backgroundImage:"url('/restaurantImages/coffee.jpg')"}} */}
                    <img className="Image" src={`/restaurantImages/${id}.webp`} alt ="Restaurant-Image"/>
                    <p className="smallAbout">{aboutRestaurant[id].about}</p>    
                        <div className="AddressName-iframe">
                            <div className="AddressName">
                                
                                <p>{adrs.street}</p>
                                <p>{adrs.city}</p>
                                <p>{adrs.state}</p>
                                <p>{adrs.pin}</p>
                                <OverAllRating className="overallrating"/>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1795.4086450821123!2d78.97934761545717!3d12.507949749139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1723954459516!5m2!1sen!2sin"
                                    ></iframe>
                        </div>
                        <button className="boton-elegante" onClick={()=>onClickExploreMore(adrs.menu,adrs.city)}>Explore More </button>
                        
                    
                    
                    </div>
                    
            </div>
            
            ))}
            
            
            
            
        </div>
        <div id='showMenuOnExploreMore'>{showMenuOnExploreMore}</div>
        </div>
    );
}
export default RestaurentAddress;