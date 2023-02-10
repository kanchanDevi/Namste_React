// import {restaurantList} from '../constent';
import { filterData } from '../Utils/helper';
import Card from './Card'
import {useState, useEffect, useContext} from 'react';
import Shimmer from './Shimmer';
import useOnline from '../Utils/useOnline';
import RestautantMenu from './RestaurentMenu'
import {Link} from 'react-router-dom';
import UserContext from '../Utils/UserContext';




const BodyComponent=()=>{
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurant]=useState([]);
const [searchText, setSearchText]=useState("");
const {user, setUser}=useContext(UserContext)
useEffect(()=>{
   getSearchData()
   
    }, []);

   async function getSearchData(){
const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.904472&lng=80.092805&page_type=DESKTOP_WEB_LISTING");

const json= await data.json();
console.log(json,'df');
setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)



   } 
       console.log("render")

const offline=useOnline()
if(!offline){
    return <h1>check your internet connection</h1>
}

       if(!allRestaurants) return null;
     
    return (allRestaurants.length===0)?<Shimmer/>:(
        <>

        <div className='flex justify-center p-4  border-blue-500 bg-gray-300'><input type="Text" className='border-blue-400 border-solid border-2 p-1 mr-1' placeholder='search' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }} />
        <button type="button" className="text-md text-black" onClick={()=>{
            const data=filterData(searchText, allRestaurants)
            console.log(data)
            setFilteredRestaurant(data)
            console.log("render")
           
        }}>Search</button>
        <input value={user.name} onChange= {
        e => setUser({
          ...user,
          name: e.target.value,
        })
      }></input>
      <input value={user.email} onChange= {
        e => setUser({
          ...user,
          email: e.target.value,
        })
      }></input>
        </div>

        <div className="bg-gray-300 flex flex-wrap justify-center">
            
       
                {filteredRestaurants.map((restaurant) => {
                    return (
                      <Link
                        to={"/restaurant/" + restaurant.data.id}
                        key={restaurant.data.id}
                      >
                        <Card {...restaurant.data} user={user}/>
                      </Link>
                    );
                  })}

         
          
    
       </div>

        </>
    )
}
export default BodyComponent