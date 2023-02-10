import { IMG_URL } from "../constent";
import { useContext } from 'react';
import UserContext from '../Utils/UserContext';

const Card =({    cloudinaryImageId,
    name, cuisines, avgRating, deliveryTime,costForTwoString })=>{

    const { user } = useContext(UserContext);
    return(
        <>     
        <div className="h-50 w-30 p-8 m-2 flex flex-col bg-white rounded justify-center">
            <img className="h-18 w-[300px]" src={IMG_URL + cloudinaryImageId
}/>
        <h1 className=" text-sm text-pink-700 font-bold pt-2 pb-2">{name}</h1>
        <p className="text-sm pb-1">{cuisines.join(', ')}</p> 

                <div className='card-subdivision'>
                    <div className="bg-green-400 h-6 w-20 p-2 flex justify-between items-center">
                    <p className="text-sm p-2"><span className="p-1">⭐</span>{avgRating}</p>
                    </div>
                    <div className="flex justify-between">
                    <p  className="text-sm p-2">{deliveryTime} MINS</p>

                    <p  className="text-sm text-green-800 font-semibold p-2">{costForTwoString}</p>
                  
                    
                    </div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
      
       
        </div>
        </>
    )

}
export default Card