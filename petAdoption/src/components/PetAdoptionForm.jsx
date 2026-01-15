import React from 'react'
import { useState } from 'react'
import { validation } from '../utils/validation'
import AdopterData from './AdopterData'

const PetAdoptionForm = () => {
  const labelStyle = {
    display: "flex",
    justifyContent: "start"
  }

  const [showTable, setShowTable] = useState(false);

  const [formData, setFormData] = useState([]);

  const [values, setValues] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  });
  
  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  });

  const {petName, petType, breed, adopterName, email, phone } = values;

  function changeEvent(e) {

    const {name, value} = e.target;

    console.log("name : ", name);
    console.log("value : ", value);
    
    setValues((prevValues)=>({
      ...prevValues,                        
      [name]: value
    }))

    const errorsCopy = {...errors};
    const errorReturn = validation(name, value, errorsCopy);
    setErrors(errorReturn);
    console.log(errors);

  }

  const handleSubmit = () => {

  if (!petName || !petType || !breed || !adopterName || !email || !phone){
    alert("Please fill out all Fields");
    return;
  }

  console.log(values);

  setFormData([...formData,values]);

  setShowTable(true);

  }

  const handleGoBack = () => {
    setShowTable(!showTable);
  }


  if(!showTable) {

    return (
  
    <div style={{
      backgroundColor: "#c59771bd",
      padding: "2em 30px",
      margin: "1em 40em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignContent: "start",

    }}>

      <div className='petName'>
        <label for="petName" style={labelStyle}><b>Pet Name</b></label>
        <input type="text" name="petName" placeholder='Pet Name' style={{
          padding: "10px 10px"
        }}
          onChange={changeEvent}
        />
        <b> <small>{errors.petName}</small> </b>
      </div>

      <div className='PetType'>
        <label for="petTypeField" style={labelStyle}><b>Pet Type</b></label>
        <select name='petType' onChange={changeEvent} >
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Squirrel">Squirrel</option>
        </select>
      </div>


      <div className='Breed'>
        <label for="breed" style={labelStyle}><b>Breed</b></label>
        <input type="text" name="breed" placeholder='Breed' style={{
          padding: "10px 10px"
        }}
          onChange={changeEvent}
        />
        <b> <small>{errors.breed}</small> </b>
      </div>

      <div className='adopterName'>
        <label for="adopterName" style={labelStyle}><b>Your Name</b></label>
        <input type="text" name="adopterName" placeholder='Your Name' style={{
          padding: "10px 10px"
        }}
          onChange={changeEvent}
        />
        <b> <small>{errors.adopterName}</small> </b>
      </div>

      <div className='email'>
        <label for="email" style={labelStyle}><b>Email</b></label>
        <input type="text" name="email" placeholder='Email' style={{
          padding: "10px 10px"
        }}
          onChange={changeEvent}
        />
        <b> <small>{errors.email}</small> </b>
      </div>

      <div className='phone'>
        <label for="phone" style={labelStyle}><b>Phone</b></label>
        <input type="text" name="phone" placeholder='Phone' style={{
          padding: "10px 10px"
        }}
          onChange={changeEvent}
        />
        <b> <small>{errors.phone}</small> </b>
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>      

    </div>
  )
  
  }
  else{
    return <AdopterData formData={formData} handleGoBack={handleGoBack} /> 
  }

}


export default PetAdoptionForm
