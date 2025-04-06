import { imageBaseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    };

    return (
        <div>
            {
               items.map(item => {
                return (
                    <div className="flex justify-between border-gray-200 border-b-2 p-2 m-2" key={item?.card?.info?.id}>
                        <div className="text-left w-9/12 p-4">
                            <span className="text-md font-medium">{item?.card?.info?.name}</span> <span className="text-md font-medium">- Rs. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="relative w-3/12 p-1">
                            <button className="absolute bg-black p-2 rounded-lg text-white z-10 left-[25%] cursor-pointer" onClick={() => handleAddItem(item)}>Add</button>
                            <img className="w-[150px] h-[100px]" src={imageBaseUrl+item?.card?.info?.imageId} />
                            
                        </div>
                    </div>
                );
               })
            }
        </div>
    );
};

export default ItemList;