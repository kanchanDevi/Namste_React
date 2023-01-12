import {restaurantList} from '../constent';
import Card from './Card'
import {useState} from 'react';

function filterData(searchText, restaurants){
    const filterData=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText)
    );
    return filterData
}

const BodyComponent=()=>{
    const [restaurants, setRestaurant]=useState(restaurantList);
const [searchText, setSearchText]=useState("");
    return(
        <>
        <div className='search-container'><input type="Text" className='searh-input' placeholder='search' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }} />
        <button type="button" className="search-button" onClick={()=>{
            const data=filterData(searchText, restaurants)
            console.log(data)
            setRestaurant(data)
           
        }}>Search</button></div>

        <div className="container">
         {
            restaurants.map((restaurant)=>{
return                <Card {...restaurant.data} key={restaurant.data.id}/>


            })
         }
          
    
       </div>

        </>
    )
}
export default BodyComponent