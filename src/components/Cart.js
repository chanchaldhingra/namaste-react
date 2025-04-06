import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartITems ", cartItems);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearItem());
    }

    return (
        <div>
            <h1 className="font-bold my-2 p-4  text-2xl text-center">Cart</h1>
            <div className="w-6/12 m-auto flex flex-col justify-center">
                <button className="bg-black text-white rounded-lg p-2 m-2 mx-auto cursor-pointer" onClick={handleClick}>Clear Cart</button>
                {cartItems.length===0 ? <h1 className="text-center">Cart is empty</h1> : <ItemList items={cartItems} />}
            </div>
        </div>
    );
};

export default Cart;