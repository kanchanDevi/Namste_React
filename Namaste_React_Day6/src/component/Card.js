import { IMG_URL } from "../constent";


   
    
   

const Card =({cloudinaryImageId, name, cuisines })=>{
    return(
        <>
        
        <div className="cards">
            <img className="images" src={IMG_URL + cloudinaryImageId}/>
        <h1 className="name">{name}</h1>
      
        <h3 className="cuisines">{cuisines.join(',')}</h3>
       
        </div>
        </>
    )

}
export default Card