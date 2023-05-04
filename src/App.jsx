import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import 'moment-timezone';


function App() {

  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://wordmaze-api.onrender.com/game1");
      //const response = await fetch("http://localhost:3500/game1")
      const jsonData = await response.json();
      setGame(jsonData);
    };

    fetchData(); // Fetch data initially

    const intervalId = setInterval(fetchData, 300000); // Call fetchData every 30 seconds

    return () => clearInterval(intervalId); // Clean up by clearing the interval when the component unmounts
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          padding: "1rem 2rem",
          borderRadius: "1rem"
        }}>
        {game && 
          game._id
          }
      </div>
    </>
  )
}

export default App
