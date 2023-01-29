import { Routes, Route } from 'react-router-dom';
import './App.css'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/starshipDetails/StarshipDetails';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship-details' element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;
