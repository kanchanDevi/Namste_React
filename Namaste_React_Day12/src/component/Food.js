import {  IMG_URL } from "../constent";


const Food = ({ name, cloudinaryImageId, description, price }) => {
 
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img className="h-18 w-[300px]" src={IMG_URL + cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default Food;