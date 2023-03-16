import React, { useState } from "react";

function Form(props) {
    const [form, setForm]=useState({firstName: ''})

    function handleChange(e){
      const {name, value} = e.target
      setForm(prevState => {
        return{
          ...prevState,
          [name]:value
        }
      })
    }

    function handleSubmit(e){
      e.preventDefault()
      props.addList(form.firstName)
    }

 return(
    <form onSubmit={handleSubmit}>
      <input
      onChange={handleChange}
      name="firstName"
      value={form.firstName}
      placeholder="First Name" />

      <button type="submit">Submit</button>
    </form>
 )
   
}

export default Form;