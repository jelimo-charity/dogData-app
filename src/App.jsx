
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [dogs, setDog] = useState([]);
   useEffect( ()=>{
    fetch("https://api.thedogapi.com/v1/images/search?")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      setDog(data);
    })

   }, [])

  return (
  <section>
    <div className="dogContainer">
      {dogs.map((dog)=>(
        <>
        <article key={dog.id}>
          <img src={dog.url} alt="dog-image" width={200} />
          <p>{dog.width}</p>
          <p>{dog.height}</p>

        </article>
        <article key={dog.id}>
        <img src={dog.url} alt="dog-image" width={200} />
        <p>{dog.width}</p>
        <p>{dog.height}</p>

      </article>
      </>
      ))}
    </div>
  </section>
  )
}

export default App
