import { getAllStarships } from "../../services/sw-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <h2>Starship list</h2>
      {starshipList.map(starship =>
        <ul>
          <div key={starship.index}>
            <Link to='/starship' state={{starship}} key={starship.name}>
              {starship.name}
            </Link>
          </div>
        </ul>
      )}
    </>
  );
}
 
export default StarshipList;