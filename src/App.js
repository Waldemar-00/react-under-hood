import './App.css' 
import Button from './components/UI/Button'
import Paragraph from './components/Out/Paragraph'
import { useState } from 'react'
function App() {
  const [isShow, setIsShow] = useState(false)
  function toggleParagraph() {
    setIsShow(isShow => !isShow)
  }
  return (
    <div className="App">
      <h1>React under the hood</h1>
      <Paragraph show={isShow}/>
      <Button foo={toggleParagraph}>
        Toggle paragraph
      </Button>
    </div>
  ) 
}

export default App 
