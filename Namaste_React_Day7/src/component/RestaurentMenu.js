import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constent";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestauraunt] = useState([]);

 
 useEffect(() => {
       getRestaurantInfo();
     }, []);

     async function getRestaurantInfo() {
       const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.904472&lng=80.092805&menuId=" + resId
       );
       const json = await data.json();
       console.log(json);
       setRestauraunt(json?.data?.cards);
     }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
           {(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
         ))}
        
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;