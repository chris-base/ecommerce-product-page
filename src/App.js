import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ProductPreview from "./Components/ProductPreview";

const App = () => {
  const [photoCarousel, setPhotoCarousel] = useState(false);

  return (
    <div className='App'>
      <Header />
      <Body setPhotoCarousel={setPhotoCarousel} />
      {photoCarousel ? <ProductPreview setPhotoCarousel={setPhotoCarousel} /> : <></>}
    </div>
  );
};

export default App;
