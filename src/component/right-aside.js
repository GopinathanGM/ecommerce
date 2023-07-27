import { useState ,useMemo} from 'react';
import '../style/right-aside.css';
import  data  from './data.json';
import { FaSearch } from "react-icons/fa";
import Imagecontainer from './image-container';
const RightAside = (props) => {
    const [searchInput, setSearchInput] = useState('');    

    const searchItems = (event) => {
        setSearchInput(event.target.value)
    }
    
    const filteredData = useMemo(()=>data.filter((item) =>
        item.brand.toLowerCase().includes(searchInput.toLowerCase())
    ),[searchInput]);

    return (
        <div className='right-aside'>
            {console.log("rightside")}
            <div className='search'>
                <form>
                    <input type="text" className='input-box' placeholder='Search'  onChange={searchItems}></input>
                </form>
                <div className='fa-search'>
                    <FaSearch></FaSearch>
                </div>

            </div>
            <Imagecontainer filterDate={filteredData} />
        </div>
    )
}

export default RightAside;