import React, { useState } from "react";
import './FoodMenu.css';
import img from './images/homepage-hero-bg-img.jpg';
function FoodMenu(props){
    
    
    const menu=props.menu;
    const [showTableForm,setshowTableForm]=useState(null);
    const [canShowForm,setcanShowForm]=useState(false);

    const onClickBtnTableForm=()=>{
        setcanShowForm(!canShowForm);
        setshowTableForm((
            <div className="table-book-form" id="form">
                           
                <div className="book-table-card">
                <span className="title">Fill The Form To Book Table!..</span>
                <form className="book-table-form">
                    <div className="group">
                    <input placeholder="" type="text" required/>
                    <label>Name</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="email"  name="email" required/>
                    <label>Email</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="text"  name="mobileNo" required/>
                    <label>Mobile no:</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="number"  name="nop" required/>
                    <label>No. Of people:</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="number"  name="not" required/>
                    <label>No. of Table:</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="date"  name="date" required/>
                    <label>Date</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="time"  name="timeFrom" required/>
                    <label>Time From</label>
                    </div>
                <div className="group">
                    <input placeholder="" type="time"  name="timeTo" required/>
                    <label>Time To</label>
                    </div>
                <div className="group">
                    <textarea placeholder=""  name="comment" rows="5" required></textarea>
                    <label>Comment</label>
                </div>
                    <button type="submit">Submit</button>
                </form>
                </div>

            </div>
        ));
        
    };

    return (
        <div className="whole2" style={{backgroundImage:"url('/bg-img2.jpg')"}}>
            <div className="map-intro">
            
                
            
            <article>Welcome to our restaurant, where tradition meets flavor. 
                Established in the heart of the city over two decades ago, 
                we pride ourselves on serving authentic dishes crafted from time-honored family recipes. 
                Whether you're a local or a traveler, we invite you to experience a taste of home in every bite.</article>
            
            </div>

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
            
                <p className="aluthu-btn">Click Here to Book Table</p>
                <button class="btn-class-name" onClick={onClickBtnTableForm}>
                    <span class="back"></span>
                    <span class="front"></span>
                    <a href="#form"></a>
                </button>
            <div className="img-table-form" >
                {/* <img src="/restaurant-image2.jpeg"/> */}
                { canShowForm && showTableForm}
                {/* <img src="/restaurant-image2.jpeg"/> */}
            </div>
            
            



            
        
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