import TileComp from './Tile';

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

export default TilesComp;