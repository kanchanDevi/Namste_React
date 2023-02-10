import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/Cartslice";
import Food from "./Food";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems,'dsf');

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {/* <h1>Cart</h1> */}
      <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1>
      <button onClick={() => handleClearCart()} className="bg-green-200">
        Clear Cart
      </button>
      <div className="flex">
        {cartItems?.map((item) => (
         <Food {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Cart
