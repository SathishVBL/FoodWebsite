import React from 'react';

function OverAllRating(){
    const rating =3;
    const maxStars = 5;
    const stars = [];

    

    return (
        <div className="star-rating">
            {Array.from({length:6},(i,indx)=>(
                <span
                    key={indx}
                    style={{
                        color:indx<rating?'blue':'lightblue',
                        fontSize: '30px', 
                    }}
            >{'\u2605'}</span>
            ))}
           
        </div>
    );
};

export default OverAllRating;
