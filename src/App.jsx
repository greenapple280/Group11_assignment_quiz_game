import Header from './components/Header'
import Questions from './components/Questions'
import Button from './components/Button/Button'
import { useState } from 'react'
import { ways, differences } from './data'   //from data.js
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  const [ content, setContentType ] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }


  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Вопросы & Ответы</h3>
          <ul>
            <Questions                    /* 3 options how to write: */
              title={ways[0].title} 
              description={ways[0].description}
            />
            <Questions { ... ways[2]} />  
            <Questions title="111" description="222" />
          </ul>
        </section>
        <section>
          <h3>Вы не просто изучите React</h3>

          <Button onClick={() => handleClick('way')}>Фильтрация</Button>
          <Button onClick={() => handleClick('easy')}>Применение</Button>

          <p>{differences[content]}</p> 

        </section>
      </main>
    </div>

    
  )
}

export default App
