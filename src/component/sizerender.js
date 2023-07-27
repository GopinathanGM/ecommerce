import '../style/add-cart.css';
import { useContext,useMemo,memo } from 'react';
import { UserContext } from './provider';
import data from './data.json';
import Imagecontainer from './image-container';
const Sizerender = (props) => {
    const {memoizedSelectedSize} = useContext(UserContext); 
    const {selectedSize} = memoizedSelectedSize;
    console.log("sizerender");
    const filterDate = useMemo(()=>data.filter((item)=>{
        if(selectedSize.length===0){
            return true
        }
        else if(selectedSize.length===1){
            return selectedSize.includes(item.brand) || selectedSize.includes(item.size) || selectedSize.includes(item.desc)
        }
        else{
            return (selectedSize.includes(item.desc) || selectedSize.includes(item.brand)) && selectedSize.includes(item.size)
        }
    }),[selectedSize])

    if(filterDate.length === 0){
        return(
            <div className='right-aside'>
                <h2>Products Not Available</h2>
            </div> 
        )
    }
    else{
    return (
        <div className='right-aside'>
        {/* <div className='image-container'>
            {filterDate.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className={btn(shoe.id)?'color-button':'cart-button'}  onClick={() => addItem(shoe.id)}>{btn(shoe.id)?"Remove From Cart":"Add to Cart"}</button>
                </div>
            )}
        </div> */}
        <Imagecontainer filterDate={filterDate} />
        </div>
    )
    }
}

export default memo(Sizerender);