import { useState } from 'react'
import './App.css'
import NewForm from './NewForm.jsx'
import List from './List.jsx'

function App() {

  return (
    <>
      <NewForm />
      <List items ={[
        {title: 'test', _id: 1},
        {title: 'test2', _id: 2}
      ]}/>
    </>
  )
}

export default App
