import ItemList from "./ItemList";

const RestaurantCategory = (props) => {

    const {toggleExpand, showItems, data, index} = props;
    const handleClick = () => {
        if(showItems) {
            toggleExpand(null);
        }
        else toggleExpand(index);
    };
    
    return (
        <div>
            <div className="p-4 my-4 bg-gray-50 shadow-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <h2 className="font-bold text-md">{data?.title} ({data.itemCards.length})</h2>
                    <span>🔽</span>
                </div>

                { showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;