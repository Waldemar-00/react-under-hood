import './App.css' 
import Button from './components/UI/Button'
import Paragraph from './components/Out/Paragraph'
import Article from './components/Out/Article'
import { useState, useCallback } from 'react'
function App() {
  const [isShow, setIsShow] = useState(false)
  const toggleParagraph = useCallback(() => {
    setIsShow(isShow => !isShow)
  }, [])
  return (
    <div className="App">
      <h1>React under the hood</h1>
      <Paragraph show={isShow}/>
      <Button foo={toggleParagraph}>
        Toggle paragraph
      </Button>
      <Article show={false}/>
    </div>
  ) 
}

export default App 
