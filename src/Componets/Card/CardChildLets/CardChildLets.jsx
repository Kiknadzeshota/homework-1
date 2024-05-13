import './CardChildLets.css'
function CardChildLets(){
    return(
        <div className='CardChildLets'>
            <h1>Summary</h1>
            <div className='div1'>
                <h1 style={{color : '#FF5555'}}>Reaction</h1>
                <span>80 / <span>100</span></span>
            </div>
            <div className='div2'>
                <h1 style={{color: '#FFB21E'}}>Memory</h1>
                <span>92 / <span>100</span></span>
            </div>
            <div className='div3'>
                <h1 style={{color : '#00BB8F'}}>Verbal</h1>
                <span>61 / <span>100</span></span>
            </div>
            <div className='div4'>
                <h1 style={{color : '#1125D6'}}>Visual</h1>
                <span>73 / <span>100</span></span>
            </div>
            <button>Continue</button>
        </div>
    );
}
export default CardChildLets