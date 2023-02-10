import { useContext } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
 
  const {user}=useContext(UserContext)

  const cartItems =useSelector((store)=>store.cart.items)
  console.log(cartItems)
    return (
      <>
        <div className="flex justify-between bg-pink-700 ">
        <h1 className="p-5 text-lg font-bold text-white" >Foodie</h1>
          <div className="">
            <ul className="flex p-8 text-white">
            <Link to= "/"><li className="px-5">Home</li></Link>
              <Link to= "/about"> <li className="px-5">About</li></Link>
              <Link to= "/cart"><li className="px-5">Cart{cartItems.length}</li></Link>

              <Link to= "/instamart"> <li className="px-5">Instamart</li></Link>
              <p>{user.name}</p>
            
            

            </ul>
          </div>
        </div>
      </>
    );
  };
  export default HeaderComponent