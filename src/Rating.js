import React from "react";
import './Rating.css'
 function Rating(){
    return(<div className="rating">
        <input name="rating" value={5} id="star5" type="radio"/>
        <label for="star5"></label>

        <input name="rating" value={4} id="star4" type="radio"/>
        <label for="star4"></label>

        <input name="rating" value={3} id="star3" type="radio"/>
        <label for="star3"></label>

        <input name="rating" value={2} id="star2" type="radio"/>
        <label for="star2"></label>

        <input name="rating" value={1} id="star1" type="radio"/>
        <label for="star1"></label>

    </div>);
 }
 export default Rating;