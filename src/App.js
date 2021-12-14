import React from "react"
import Glimpse from "./components/Glimpse/Glimpse.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import data from './data'

function App() {
  const info = data.map(item => {
      return (
      
      <Glimpse
        key={item.id}
        {...item}
      />
      
    );
  })

  return(
    <div>
      <Navbar/>
      {console.log("info==>",info)}
      {info}   
    </div>
  )
}

export default App;
