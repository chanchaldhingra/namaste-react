import { useEffect, useState } from 'react';
import TileComp from './Tile';
import ShimmerComp from './Shimmer';

const arr = [
    {
        id: 1,
        tileName: 'Roasted Chicken',
        rating: '4'
    },
    {
        id: 2,
        tileName: 'Salad',
        rating: '3'
    },
    {
        id: 3,
        tileName: 'Chinese',
        rating: '2'
    },
    {
        id: 4,
        tileName: 'Punjabi',
        rating: '1'
    }
];

const TilesComp = () => {
    const [filteredTileArr, setFilteredTileArr] = useState([]);
    const [searchText, setSearchText] = useState('');
    
    let tileArr = [];

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        setTimeout(() => {
            setFilteredTileArr(arr);
            tileArr = arr;
        }, 1000);
        // const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');

        // const json = await data.json();
        // console.log("json ", json);
    };

    return !tileArr.length ? <ShimmerComp /> : (
        <div className="body-content">
            <div className='search-container'>
                <input type='text' value={searchText} onChange={(event) => {setSearchText(event.target.value)}}/>
                <button onClick={() => {
                    console.log("searchText ", searchText);
                    if (searchText) {
                        const filterList = tileArr.filter(tileObj => tileObj.tileName.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredTileArr(filterList);
                    } else {
                        console.log("else ");
                        setFilteredTileArr(tileArr);
                    }
                    
                }}>Search</button>
            </div>
            <div className='tiles-container'>
                {
                    filteredTileArr.map(tileObj => <TileComp key={tileObj.id} resData={tileObj} />)
                }
                
            </div>
        </div>
    );
};

export default TilesComp;