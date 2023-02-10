import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constent";
import useRestaurant from "../Utils/useRestaurant";
import Shimmer from "./Shimmer";
import { URL_IMGS } from "../constent";
import { addItem } from "../Utils/Cartslice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // [restaurant, setRestaurant]=useState(null);

  const { resid } = useParams(); //mistake 1: use the same param name which you passed in app.js

  const restaurant = useRestaurant(resid);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col ">
      <div className="flex justify- bg-blue-900 p-10 border-2">
        <img
          src={IMG_URL + restaurant?.cloudinaryImageId}
          className="pr-3 h-40 w-60"
        />
        <div className="flex flex-col text-white pl-10">
          <h1 className="text-lg  font-semibold text-white">
            Restraunt Id: {resid}
          </h1>
          <h2 className="text-3xl text-white">{restaurant?.name}</h2>

          <div className="flex">
            <h3 className="pr-2">{restaurant?.area}</h3>
            <h3 className="bg-">{restaurant?.city}</h3>
          </div>
          <h3 className="font-bold">⭐{restaurant?.avgRating} stars</h3>
          <h3 className="font-bold p-1">{restaurant?.costForTwoMsg}</h3>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="text-center font-bold">Menu</h1>
        <ul className=" bg-white-200  mb-2 flex justify-center flex-col">
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <>
              <div className="flex mb-2 mt-2 bg-blue-100  p-5 flex-col justify-between">
                <li key={item.id}>{item?.name}</li>

                <li className="text-blue-900 text-lg font-bold">
                  {item?.category}
                </li>

                <li className="text-blue-900 font-semibold">
                  {item?.description}
                </li>

                <li>{item?.inStock}</li>

                <img
                  src={URL_IMGS + item?.cloudinaryImageId}
                  className="pr-3 h-40 w-60"
                  alt="item-image"
                />

                {/* <li key={item?.id}>
              {item.name} -{" "}
              <button
                className="p-2 m-5 bg-green-600"
                onClick={() => handleAddItem()}
              >
                Add
              </button>
            </li> */}
                <div>
                  <button
                    type="button"
                    className="p-2 m-5 bg-green-600"
                    onClick={() => handleAddItem(item)}
                    key={item?.id}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
