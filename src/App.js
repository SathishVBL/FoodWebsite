
import img from './images/relax-atmosphere.jpg'
import sty from './cssFiles/App.css'
import Address from './Address';
import RestaurentAddress from './RestaurentAddress';
import CaterForm from './CaterForm';
import { useState } from 'react'




function App() {
  const[showContentOnBtnClick,setshowContentOnBtnClick]=useState(null);
 

  const onClickHandlerTrackTruck = () => {
    console.log('Button clicked successfully!!');
    setshowContentOnBtnClick((<Address/>));
  };

  const onClickHandlerFindRetaurant=()=>{
    setshowContentOnBtnClick((<RestaurentAddress/>));
    
  };
  const onClickHannlderCaterForm=()=>{
    setshowContentOnBtnClick((<CaterForm/>));
  };

  


  return (
    <div className="Whole">

      <div className='App' >
        {/* <img className="pencilArt" src={img}  alt="sample pencil art" style={sty}/> */}
        <p className='greeting'>WELCOME TO THE WORLD OF <span className='mis'>MIS</span> FOOD  TRUCK!!
        </p>
      </div>
      <div>
        <p className='txt1'>We are making food with <span className='loveAndCare'>LOVE</span> and <span className='loveAndCare'>CARE</span></p>
      </div>

      <p className='openTxt'>Ways To Reach Us</p>
      <div className='waysToReach'>
        
        <button class="btn" onClick={onClickHandlerTrackTruck}>
          {/* <a href='#showPlaces'>TRACK TRUCK</a> */}
          TRACK TRUCK
        </button>
       
        <button class="btn" onClick={onClickHandlerFindRetaurant}>
          SHOW RESTAURANT
        </button>
        <button class="btn" onClick={onClickHannlderCaterForm}>
          CATER WITH US
        </button>


      </div>
      <div  id='showPlaces'>{showContentOnBtnClick}</div>
      

    </div>
    
  );
}

export default App;
