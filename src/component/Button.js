import {useContext,useCallback,memo} from "react";
import { UserContext } from "./provider";

const Button = (props) => {
    const {shoeid} = props
    const { memoizedCartItems , memoizedNewCartItems} = useContext(UserContext);
    const { newCartItems} = memoizedNewCartItems;
    const { cartItems, setCartItems } = memoizedCartItems;

    const btn = useCallback((item) => {
        const index = newCartItems.indexOf(item);
        if (index >= 0) {
          return true;
        }
        return false;
      }, [newCartItems]);
    
      const addItem = useCallback((item) => {
        const index = newCartItems.indexOf(item);
        if (index >= 0) {
          newCartItems.splice(index, 1);
        } else {
          newCartItems.push(item);
        }
        setCartItems(newCartItems);
      }, [cartItems]);
      {console.log("button")}
    return (
        <button className={btn(shoeid)?'color-button':'cart-button'}  onClick={() => addItem(shoeid)}>{btn(shoeid)?"Remove From Cart":"Add to Cart"}</button>
    )
}

export default memo(Button);
