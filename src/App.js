import './App.css' 
import Button from './components/UI/Button'
import { useState } from 'react'
function App() {
  const [isShow, setIsShow] = useState(false)
  function toggleParagraph() {
    setIsShow(isShow => !isShow)
  }
  return (
    <div className="App">
      <h1>React under the hood</h1>
      { isShow &&
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores iure aliquid quam repellat doloribus nihil, error quos
          natus nobis adipisci illum eaque nulla molestias dolorem eveniet temporibus odio cupiditate!
        </p>
      }
      <Button foo={toggleParagraph}>
        Toggle paragraph
      </Button>
    </div>
  ) 
}

export default App 
