import React from "react";
import './FoodMenu.css'
function FoodMenu(props){
    
    const menu=props.menu;
    // const menu=[
    //     {item:"parottaa",amt:20,offer:20},
    //     {item:"mutton chukka",amt:15,offer:15},
    //     {item:"peper chicken",amt:10,offer:10}

    // ];
    return(
        <div>
           {menu.map((i,index)=>(
                    <div key={index}>
                        <p>{i.item}</p>
                        <p>{i.amt}</p>
                        <p>{i.offer}</p>

                        </div>
                ))}
        </div>
    );
}
export default FoodMenu;