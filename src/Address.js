// Address.js
import React from 'react';
import  './cssFiles/Address.css'
function Address() {
    const adrs = {
        street: "navappalayam",
        city: "tiruvannamalai",
        state: "tamil nadu",
        summ:"vsathis kumar from thiruvannamalai"
    };

    const addresses=[
        {street: "Navappalayam",city: "Tiruvannamalai",state: "Tamil nadu",pin:"606901" },
        {street: "Melur",city: "Madurai",state: "Tamil nadu",pin:"XXXXXXX" },
        {street: "Keelampakkam",city: "Chennai",state: "Tamil nadu",pin:"600026" },
        {street: "Navappalayam",city: "Tiruvannamalai",state: "Tamil nadu",pin:"606901" },
        {street: "Navappalayam",city: "Tiruvannamalai",state: "Tamil nadu",pin:"606901" },
        {street: "Melur",city: "Madurai",state: "Tamil nadu",pin:"XXXXXXX" },
        {street: "Keelampakkam",city: "Chennai",state: "Tamil nadu",pin:"600026" }

    ];

    return (
        <div className='WholeAddress'>
            {addresses.map((adrs,index)=>(
                <div key={index} className="card">
                <div className='card2'>
                <div className="Address">
                    <div className="loader"></div>  {/* Updated to match the CSS selector */}
                    <div className='AddressName'>
                        <p>{adrs.street}</p>
                        <p>{adrs.city}</p>
                        <p>{adrs.state}</p>
                        <p>{adrs.pin}</p>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        
        
    );
}

export default Address;
