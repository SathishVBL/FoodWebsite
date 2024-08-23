// Address.js
import React, { useState } from 'react';
import  './cssFiles/Address.css'
function Address() {
    const [showSchedule,setshowSchedule]=useState(null);

    const schedule=[ 
        {date:"20-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"TVMalai",
            locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"21-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Polur",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"22-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Perambur",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"23-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Kancheepuram",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"24-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Velachery",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"25-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Metur",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"26-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"PattapottiKiramam",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}},
        {date:"27-8-2024",from:"12-PM",to:"10:30-PM",location:{name:"Therila",locat:"https://maps.app.goo.gl/xjH2sQdPCSUZFHCbA"}}
   ];
    const onClickBtnSchedule=()=>{
        setshowSchedule(<div className='showSchedule'>
            {schedule.map((sch,id)=>(
                <div key={id} className='showSchedule1'>
                    <p>{sch.date}</p>
                    <p>{sch.from} to {sch.to}</p>
                    <p></p>
                    <p>{sch.location.name}</p>
                    <a href={sch.location.locat} target="_blank" rel="noopener noreferrer">
                        See Map &rarr;
                    </a>

                </div>
            ))}
        </div>);
    };

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
        <div className>
            <div className='WholeAddress'>
                {addresses.map((adrs,index)=>(
                    <div key={index} className="card">
                    <div className='card2'>
                    <div className="Address">
                        <div className="loader"></div> 
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

                {/* button for calendar */}
                

            </div>
                <div className='cal-button-txt'>
                    <p>DO YOU WANT TO KNOW 1 WEEK SCHEDULE!!...</p>
                    <button className="cal-button" onClick={onClickBtnSchedule}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
                        <span class="lable">SEE SCHEDULE</span>
                        </button>
                        </div>
                {showSchedule}
         </div>
        
    );
}

export default Address;
