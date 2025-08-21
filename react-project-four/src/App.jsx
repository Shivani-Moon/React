import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount (count+1);
  }
  

  return (
    <>
      <div>
        <Button handleClick={handleClick} text="click me"/>
        <h1>{count}</h1>
        {/* <Card name="Web Development">
          <h1>Types of Web Development</h1>
          <p>The three main types of web development are front-end, back-end, and full-stack.</p>
          <p>Best Web Development Languages include HTML, CSS, JavaScript, Java, Python, PHP, C#, Ruby, Swift, Kotlin, Perl, . NET and GoLang.</p>
          </Card>
          <Card children='I am a children'/> */}
      </div>
    </>
  )
}

export default App
