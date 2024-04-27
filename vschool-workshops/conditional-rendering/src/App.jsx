import { useState } from 'react'
import './App.css'
import BadgeList from './BadgeList.jsx'

function App() {

  // states to set conditional rendering and save date into an array

  const [toggle, setToggle] = useState(true)

  const [savedBadges, setSavedBadges] = useState([])

  const [darkMode, setDarkMode] = useState(false)

  const [seeBadgeList, setSeeBadgeList] = useState(false)

  const [inputs, setInputs] = useState({
    backgroundColor: 'white',
    name: '',
    title: '',
    fontColor: 'black'
  })

  // functions to handle or toggle the states
  function flipToggle(){
    setToggle(prevState => !prevState)
  }

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  function toggleBadgeList(){
    setSeeBadgeList(prevState => !prevState)
  }

  //handleChange function 
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => {
      return {
        ...prevInputs, 
        [name] : value
      }
    })
  }

  // handleSubmit button that will save and add a badge to our count 
  function handleSubmit(e){
    e.preventDefault() // stops page from refreshing on submit
    setSavedBadges(prevState => {
      return [
        ...prevState, 
        inputs
      ]
    })
    setInputs({
      backgroundColor: 'white',
      name: '',
      title: '',
      fontColor: 'black'
    })
    flipToggle()
  }

  //CSS styling objects
  const darkStyle = {
    backgroundColor: '#322f2f',
    color: 'white'
  }

  const lightStyle ={
    backgroundColor: 'lightblue',
    color: 'black'
  }

  // toggle to disbel the button while iput fields are empty
  const buttonDisabled = inputs.title.length < 3 || inputs.name.length < 3

  return (
    <div className='app'>
      <nav>
        <h1>Conditional Rendering</h1>
        {savedBadges.length > 0 && <h3>Saved Badges: {savedBadges.length}</h3>}
        <button onClick={toggleDarkMode}> {darkMode ? 'Light Mode' : "Dark Mode"}</button>
      </nav>
      <div className='main'>
        <form onSubmit={handleSubmit}>
          <input/>
          <input/>
          <input/>
          <button>Add Badge</button>
        </form>

      </div>

   
    </div>
  )
}

export default App
