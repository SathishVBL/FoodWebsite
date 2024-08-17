import React, { useState } from "react";
import "./cssFiles/CaterForm.css"

function CaterForm(){

    const[formData,setFormData]=useState(
        {
            name:"",
            mobileNo:"",
            email:"",
            purpose:"",
            street:"",
            city:"",
            state:"",
            country:"",
            pinCode:"",
            date:"",
            from:"",
            to:""
        }
    );
const onChangeInputHandler=(e)=>{
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value
    });
};

const onSubmitHandler = (e) => {
    e.preventDefault();
    
    for (var key in formData) {
        if (formData[key] === "") {
            alert(`You have missed ${key}. Please fill it to submit properly.`);
            return;
        }
    }
    
    alert("Our team member will contact you soon.");
    console.log(formData);
};


return(/* From Uiverse.io by jack0237 */ 
    <div class="form-container">
      <form className="form" onSubmit={onSubmitHandler}>
        <span className="heading">Book Catering</span>
    
        <div className="form-group">
          <input className="form-input" required type="text" onChange={onChangeInputHandler} name="name"/>
          <label>Name* :</label>
        </div>
    
        <div className="form-group">
          <input className="form-input" required type="text" onChange={onChangeInputHandler} name="mobileNo"/>
          <label>Mobile No* :</label>
        </div>

        <div className="form-group">
          <input className="form-input" required type="email" onChange={onChangeInputHandler} name="email"/>
          <label>E-mail* :</label>
        </div>
        
        <div className="form-group">
          <input className="form-input" required  type="" onChange={onChangeInputHandler} name="purpose"/>
          <label>Purpose* :</label>
        </div>

        <div className="form-group">
          <input className="form-input"  type="text" onChange={onChangeInputHandler} name="street"/>
          <label>Street :</label>
        </div>

        <div className="form-group">
          <input className="form-input"  type="text" onChange={onChangeInputHandler} name="city"/>
          <label>City :</label>
        </div>

        <div className="form-group">
          <input className="form-input"  type="text" onChange={onChangeInputHandler} name="state"/>
          <label>State :</label>
        </div>

        <div className="form-group">
          <input className="form-input"  type="text" onChange={onChangeInputHandler} name="country"/>
          <label>Country :</label>
        </div>

        <div className="form-group">
          <input className="form-input"  type="text" onChange={onChangeInputHandler} name="pinCode"/>
          <label>Pin Code :</label>
        </div>

        <div className="form-group">
          <input className="form-input" required type="date" onChange={onChangeInputHandler} name="date"/>
          <label>Date* :</label>
        </div>

        <p>Enter start time and end time</p>

        <div className="sub-form-container">
        <p>From:</p>
          <div className="form-group">
            
            <input className="form-input" required type="time" onChange={onChangeInputHandler} name="from"/>
            {/* <label>From:</label> */}
          </div>

          <p>To:</p>

          <div className="form-group">
            
            <input className="form-input" required type="time" onChange={onChangeInputHandler} name="to"/>
            {/* <label>To:</label> */}
          </div>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
    );

}

export default CaterForm;