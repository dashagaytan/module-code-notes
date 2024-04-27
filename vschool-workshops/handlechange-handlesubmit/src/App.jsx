import { useState } from 'react'
import Form from './Form.jsx'

function App() {
  const [list, setList] = useState([])

  const listElements = list.map(name => <p>{name}</p>)

  return (
    <div className='app-container'>
      <h2>Add New Name</h2>
      <Form setList = {setList}/>
      <h1> Names</h1>
      {listElements}
    </div>
  )
}

export default App
