import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ProductPreview from "./Components/ProductPreview";

const App = () => {
  const [photoCarousel, setPhotoCarousel] = useState(false);
  const [currPhotoImgNumber, setCurrPhotoImgNumber] = useState(1);
  const [amountItemsInCart, setAmountItemsInCart] = useState(0);

  return (
    <div className='App'>
      <Header amountItemsInCart={amountItemsInCart} setAmountItemsInCart={setAmountItemsInCart} />
      <Body
        setPhotoCarousel={setPhotoCarousel}
        setCurrPhotoImgNumber={setCurrPhotoImgNumber}
        currPhotoImgNumber={currPhotoImgNumber}
        setAmountItemsInCart={setAmountItemsInCart}
      />
      {photoCarousel ? <ProductPreview setPhotoCarousel={setPhotoCarousel} currPhotoImgNumber={currPhotoImgNumber} /> : <></>}
    </div>
  );
};

export default App;
