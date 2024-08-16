import React from 'react';
import ReactDOM from 'react-dom/client';

const TileComp = (props) => {
    const {resData} = props;
    const {tileName, rating} = resData;
    return (

        <div className='tile-container'>
            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' alt='food-image'
                className='tile-image' />
            <h2 className="tile-name">{tileName}</h2>
            <span className='tile-rating'>Rating - {rating} / 5</span>
        </div>
    )
};

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

const TilesComp = () => (
    <div className='tiles-container'>
        {
            arr.map(tileObj => <TileComp key={tileObj.id} resData={tileObj} />)
        }
        
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TilesComp />);