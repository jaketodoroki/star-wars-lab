import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";
import './StarshipList.css'

const StarshipList = () => {
  const [starshipsList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <h1 className="title">STAR WARS STARSHIPS</h1>
      {starshipsList.length ?
      <>
        <div className="body-div">
          {starshipsList.map(starship => 
            <div key={starship.name} className='starship-div'>
              <Link to='/starship-details' state={{starship}} className='starship-link'>{starship.name}</Link>
            </div>
            )}
        </div>
      </>
      :
      <>
        <h4>Loading Starships...</h4>
      </>  
    }
    </>
  );
}
 
export default StarshipList;