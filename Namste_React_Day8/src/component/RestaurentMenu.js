import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constent";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams(); //mistake 1: use the same param name which you passed in app.js
  const [restaurant, setRestauraunt] = useState(null); //mistake 2: set null as default, because restaurant will be an object not array

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?menuId=" + resid //mistake 3: Used the wrong URL to fetch details of menu
    );
    const json = await data.json();
    console.log("menu-", json);
    setRestauraunt(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resid}</h1>
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
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;