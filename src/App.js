import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ProductPreview from "./Components/ProductPreview";

const App = () => {
  const [photoCarousel, setPhotoCarousel] = useState(false);
  const [currPhotoImgNumber, setCurrPhotoImgNumber] = useState(1);
  const [amountItemsInCart, setAmountItemsInCart] = useState(0);
  const [cartActive, setCartActive] = useState(false);

  return (
    <div className='App'>
      <Header
        amountItemsInCart={amountItemsInCart}
        setAmountItemsInCart={setAmountItemsInCart}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
      <Body
        setPhotoCarousel={setPhotoCarousel}
        setCurrPhotoImgNumber={setCurrPhotoImgNumber}
        currPhotoImgNumber={currPhotoImgNumber}
        amountItemsInCart={amountItemsInCart}
        setAmountItemsInCart={setAmountItemsInCart}
      />
      {photoCarousel ? <ProductPreview setPhotoCarousel={setPhotoCarousel} currPhotoImgNumber={currPhotoImgNumber} /> : <></>}
    </div>
  );
};

export default App;
