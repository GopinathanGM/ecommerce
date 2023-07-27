import { createContext, useState, useMemo,memo } from 'react'

export const UserContext = createContext();

const Provider = (props) => {
  console.log("provider")
    const [cartItems, setCartItems] = useState('');
    const [selectedSize, setSelectedSize] = useState([]);
    const memoizedNewCartItems = useMemo(() => {
      const newCartItems = [...cartItems];
      return { newCartItems };
    }, [cartItems]);
    const memoizedCartItems = useMemo(() => ({cartItems,setCartItems}), [cartItems]);
    const memoizedSelectedSize = useMemo(() => ({selectedSize,setSelectedSize}), [selectedSize]);

  return (
    <UserContext.Provider value={{memoizedCartItems,memoizedSelectedSize,memoizedNewCartItems}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default memo(Provider);
