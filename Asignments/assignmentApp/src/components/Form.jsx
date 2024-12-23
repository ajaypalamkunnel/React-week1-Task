import React, { useState } from 'react'
import './Form.css'
function Form() {

    const [formData,setFormData] = useState({
        name:"",
        place:""
    })
    
    const [submittedData,setSubmittedData] = useState(null)
    const [errors,seterrors] = useState({})

    function handleChange(event){
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})

    }

    function formValidation(){
        const newErrors = {}

        if(!formData.name.trim()){
            newErrors.name  = 'Name is required'
        }

        if(!formData.place.trim()){
            newErrors.place = 'Place is required'
        }

        seterrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formValidation()){

            setSubmittedData(formData)
            setFormData({name:"",place:""})
            seterrors({})

        }

    }


  return (
    <div>

        <form className='form' onSubmit={handleSubmit}>
            <label >
                Enter your name: 
                <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                 type="text" />
            </label>
            {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
            <br />
            <label>
                Enter your place:
                <input
                name='place'
                value={formData.place}
                onChange={handleChange}
                 type="text" />
            </label>
            {errors.place && <p style={{ color: "red", fontSize: "12px" }}>{errors.place}</p>}
            <br />

            <button type='submit' tyle={{ padding: "2px 1px" }} >submit</button>
        </form>

        

        {
            submittedData&&(
            <div>
                <h4>User Detils</h4>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Place:</strong> {submittedData.place}
            </p>
            </div>
            )
        }

    </div>
  )
}

export default Form