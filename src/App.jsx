import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [ gameObject, setGameObject ] = useState(null)
  
  const fetchData = async () => {
    try {

      const response = await axios.get("http://localhost:3500/game1")
      const gameObject = response.data;
      setGameObject(gameObject)

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          padding: "1rem 2rem",
          borderRadius: "1rem"
        }}>
        {gameObject && 
          gameObject.grid
          }
      </div>
    </>
  )
}

export default App
