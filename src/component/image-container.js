import { memo } from "react"
import Button from "./Button";


const Imagecontainer = (props) => {
const {filterDate} = props
console.log("imgcon");

  return (
    <div className='image-container'>
            {filterDate.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={require("../images/"+shoe.image)} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <Button shoeid={shoe.id}></Button>
                </div>
            )}
    </div>
  )
}

export default memo(Imagecontainer)