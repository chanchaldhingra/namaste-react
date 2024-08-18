import {TileComp} from './Tile';
import {arr} from '../utils/mockData';

export const TilesComp = () => (
    <div className='tiles-container'>
        {
            arr.map(tileObj => <TileComp key={tileObj.id} resData={tileObj} />)
        }
        
    </div>
);