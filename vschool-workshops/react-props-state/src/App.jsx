import { useState } from 'react'
import Form from './Form'
import './App.css'

function App() {
  const [list, setList] = useState([]);

  const listElements = list.map((name, index) => {
    <div key = {index} style = {{border: '1px solid black'}}>
      <p>{name.firstName}</p>
      <p>{name.lastName}</p>
    </div>
    })

  return (
    <div className='App'>
       <h2>Add New Name</h2>
       <Form setList = {setList}/>
       <h1>Names</h1>
       {listElements}
    </div>
  )
}

export default App
