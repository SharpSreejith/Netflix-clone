
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import Rowpost from './components/RowPost/Rowpost'
import {orginals, action, ComedyMovies, HorrorMovies} from './urls'


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url = {orginals} title="Netflix Orginals"/>
      <Rowpost  url ={action} title="Action" isSmall  />
      <Rowpost  url ={ComedyMovies} title="Commedy" isSmall  />
      <Rowpost  url ={HorrorMovies} title="Horror" isSmall  />
        
    </div>
  );
}

export default App
