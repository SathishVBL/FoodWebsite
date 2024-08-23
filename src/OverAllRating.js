import React, { useState } from 'react';
import Rating from './Rating';
import './Rating.css';

function OverAllRating(){
    const rating =3;
    const[showRating,setshowRating]=useState(null);

    const onClickRating=()=>{
        setshowRating(<div ><Rating/></div>)
    };

    return (
        <div>
            <div className="star-rating">
                {Array.from({length:5},(i,indx)=>(
                    <span
                        key={indx}
                        style={{
                            color:indx<rating?'blue':'lightblue',
                            fontSize: '30px', 
                        }}
                >{'\u2605'}</span>
                ))}
            
            </div>
            <div className='put-rating'>
            <a onClick={onClickRating}>Please rate here..</a>
            <div id='Rating' >{showRating}</div>
            </div>
        </div>
    );
}

export default OverAllRating;
