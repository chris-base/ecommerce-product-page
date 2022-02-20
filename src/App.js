import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ProductPreview from "./Components/ProductPreview";

const App = () => {
  const [photoCarousel, setPhotoCarousel] = useState(false);
  const [currPhotoImgNumber, setCurrPhotoImgNumber] = useState(1);

  return (
    <div className='App'>
      <Header />
      <Body setPhotoCarousel={setPhotoCarousel} setCurrPhotoImgNumber={setCurrPhotoImgNumber} currPhotoImgNumber={currPhotoImgNumber} />
      {photoCarousel ? <ProductPreview setPhotoCarousel={setPhotoCarousel} currPhotoImgNumber={currPhotoImgNumber} /> : <></>}
    </div>
  );
};

export default App;
