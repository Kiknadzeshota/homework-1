import './Card.css'
import CardChildFirst from './CardChildFirst/CardChildFirst';
import CardChildLets from './CardChildLets/CardChildLets';
function Card(){
    return(
        <div className='card'>
            <CardChildFirst/>
            <CardChildLets/>
        </div>
    );
}

export default Card