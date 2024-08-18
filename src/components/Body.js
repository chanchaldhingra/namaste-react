import {arr} from '../utils/mockData';
import {TileComp} from './Tile';
import { useState } from 'react';

const BodyComp = () => {
    let [listCuisine, setListCuisine] = useState(arr);

    return (
        <div className='body'>
            <button className="filter-btn" onClick={ () => {
                const filteredList = listCuisine.filter(cuisine => Number(cuisine.rating) >= 4);
                setListCuisine(filteredList);
            }}>Top Rated</button>
            <div className='tiles-container'>
                {
                    listCuisine.map(tileObj => <TileComp key={tileObj.id} resData={tileObj} />)
                }
                
            </div>
        </div>
    )
};

export default BodyComp;