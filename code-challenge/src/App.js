import React from "react";
import Form from "./Form";
import { useState } from "react";

    function App() {
      const [list, setList] = useState(['John', 'Bob'])
    
      const people = list.map(person => {
        return(
          <p>{person}</p>
        )
      })

      function addName(name){
        setList(prevState => {
          return(
            [...prevState,
            name]
          )
        })
      }
    
      return (
        <div className="App">
          <h2>Add New Name</h2>
          <Form 
          addList={addName}/>
          <p>{people}</p>
        </div>
      );
    }


export default App;
