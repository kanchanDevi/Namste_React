import { useState, useEffect } from "react";
import { FETCH_URL } from "../constent";

const useRestaurant=(resid)=>{
    const [restaurant, setRestauraunt] = useState(null); 
 
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(
        FETCH_URL + resid //mistake 3: Used the wrong URL to fetch details of menu
        );
        const json = await data.json();
        console.log(json);
        
        setRestauraunt(json.data);
      }
      
    return restaurant
}
export default useRestaurant