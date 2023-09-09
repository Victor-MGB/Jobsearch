import React from 'react'
import {Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar'
import RecordList from './Components/RecordList';
import Edith from './Components/Edith';
import Create from './Components/Create'
import './Styles/NavBar.css'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edith />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App