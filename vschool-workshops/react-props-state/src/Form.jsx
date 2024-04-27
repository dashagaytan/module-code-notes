import React, {useState} from "react";

function Form(props){

    const [name, setName] = useState({firstName: '', lastName: ''})

    function handleChange(e){
        // console.log(e)
        const {name, value} = e.target 
        setName((prevName) => {
            return{
                ...prevName,
                [name] : value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        props.setList((prevState) => {
            return [...prevState, name]
        })
    }

    console.log(name)
    return (
        <form onSubmit = {handleSubmit}>
            <input
            placeholder="First Name"
            name ="firstName"
            value = {name.firstName}
            onChange = {handleChange}
            />
            <input
            placeholder="Last Name"
            name ="lastName"
            value = {name.lastName}
            onChange = {handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;