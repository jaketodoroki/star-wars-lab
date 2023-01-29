import { useState, useEffect } from "react";
import { getDetails } from "../../services/sw-api";
import { Location, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
    <h1 className="title">STAR WARS STARSHIPS</h1>
      <h2>Name: {starshipDetails.name} </h2>
      <h2>Model: {starshipDetails.model} </h2>
      <Link to='/' className='return-link'>Return</Link>
    </>
  );
}
 
export default StarshipDetails;