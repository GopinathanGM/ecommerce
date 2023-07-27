import './App.css';
import Header from './component/header';
import { useContext,useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import RightAside from './component/right-aside';
import LeftAside from './component/left-aside';
import Sizerender from './component/sizerender';
import Addcart from './component/add-cart';
import { UserContext } from './component/provider';
function App() {
  const { memoizedSelectedSize,memoizedNewCartItems } = useContext(UserContext);
  const { newCartItems} = memoizedNewCartItems;
  const { selectedSize, setSelectedSize } = memoizedSelectedSize;

  const barndItems = useCallback((brand) => {
    console.log("branditems");
    if (typeof brand === 'string') {
      if (selectedSize.includes(brand)) {
        setSelectedSize([]);
      } else {
        setSelectedSize([brand]);
      }
    } else {
      if (selectedSize.length <= 1) {
        setSelectedSize([...selectedSize, brand]);
      }
      if (selectedSize.length >= 2) {
        selectedSize.splice(selectedSize.length - 1, 1);
        setSelectedSize([...selectedSize, brand]);
      }
    }
  }, [selectedSize]);



  return (

    <div className="App">
      <BrowserRouter>
      {console.log("app")}
      <Header className="header"  brandItems={barndItems}  setSelectedSize={setSelectedSize} newCartItems={newCartItems.length} ></Header>
          <div className='body'>
            <LeftAside className="left-aside" barndItems={barndItems}></LeftAside>
            <Routes>
              <Route path='/size' element={<Sizerender  ></Sizerender>} />
              <Route path='/addcart' element={<Addcart newCartItems={newCartItems} ></Addcart>}></Route>
              <Route exact path='/' element={
                <RightAside className="right-aside"  ></RightAside>
              }></Route>
            </Routes>
          </div>
          <Footer className="footer"></Footer>
      </BrowserRouter>
    </div>

  );
}
export default App;
