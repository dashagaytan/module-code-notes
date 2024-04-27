import React, {useState} from 'react'

function Form(props){
    const [input, setInput] = useState({
        firstName: ""
    })

    function handleChange(e){
        console.log(e)
        const {name, value} = e.target
        setInput(prevInput => {
            return{
                ...prevInput,
                [name] : value
            }
        }) 
    };

    function handleSubmit(e){
        e.preventDefault();
        props.setList(prevList => {
            return[
                ...prevList,
                input.firstName
            ]
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                placeholder='First Name'
                name='firstName'
                value={input.firstName}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
    

}

export default Form;