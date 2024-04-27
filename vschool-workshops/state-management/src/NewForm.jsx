import React from "react";

function NewForm(){

    return(
        <form>
            <label htmlFor="">
                Title: 
                <input type='text'/>
            </label>

            <label htmlFor="">
                Description: 
                <input type='text'/>
            </label>
            <button>Add Todo</button>
        </form>
    )
}

export default NewForm;