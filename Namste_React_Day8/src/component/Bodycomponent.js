import {restaurantList} from '../constent';
import Card from './Card'
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants){
    const filterData=restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText)
    );
    return filterData
}


const BodyComponent=()=>{
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurant]=useState([]);
const [searchText, setSearchText]=useState("");

useEffect(()=>{
   getSearchData()
   
    }, []);

   async function getSearchData(){
const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.904472&lng=80.092805&page_type=DESKTOP_WEB_LISTING");

const json= await data.json();
console.log(json);
setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)



   } 
       console.log("render")


       if(!allRestaurants) return null;
     
    return (allRestaurants.length===0)?<Shimmer/>:(
        <>

        <div className='search-container'><input type="Text" className='searh-input' placeholder='search' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }} />
        <button type="button" className="search-button" onClick={()=>{
            const data=filterData(searchText, allRestaurants)
            console.log(data)
            setFilteredRestaurant(data)
            console.log("render")
           
        }}>Search</button></div>

        <div className="container">
            
         {
            filteredRestaurants.map((restaurant)=>{
return                <Card {...restaurant.data} key={restaurant.data.id}/>


            })
         }
         
          
    
       </div>

        </>
    )
}
export default BodyComponent