import "../Styles/ProductPreviewStyles.css";
import { useState } from "react";

import photo1 from "./jsImages/image-product-1.jpg";
import photo2 from "./jsImages/image-product-2.jpg";
import photo3 from "./jsImages/image-product-3.jpg";
import photo4 from "./jsImages/image-product-4.jpg";

import photoPrev1 from "./jsImages/image-product-1-thumbnail.jpg";
import photoPrev2 from "./jsImages/image-product-2-thumbnail.jpg";
import photoPrev3 from "./jsImages/image-product-3-thumbnail.jpg";
import photoPrev4 from "./jsImages/image-product-4-thumbnail.jpg";

import iconNext from "./jsImages/icon-next.svg";
import iconPrevious from "./jsImages/icon-previous.svg";

import iconClose from "./jsImages/icon-close.svg";

const ProductPreview = ({ setPhotoCarousel, currPhotoImgNumber }) => {
  const [currImageNumber, setImageNumber] = useState(currPhotoImgNumber);

  const productPhotos = [photo1, photo2, photo3, photo4];

  return (
    <div id='productPreviewBody'>
      <div id='closeButtonContainer'>
        <img src={iconClose} alt='preview' id='closeButton' onClick={() => setPhotoCarousel(false)} />
      </div>

      <div id='mainPhotoPreviewContainer'>
        <div
          className='nextImgButton'
          style={{ marginRight: "-25px" }}
          onClick={() => {
            currImageNumber === 1 ? setImageNumber(4) : setImageNumber(currImageNumber - 1);
          }}
        >
          <img src={iconPrevious} alt='' className='nextImgImg' />
        </div>

        <img src={productPhotos[currImageNumber - 1]} alt='preview' id='mainPhotoPreview' />

        <div
          className='nextImgButton'
          style={{ marginLeft: "-25px" }}
          onClick={() => {
            currImageNumber === 4 ? setImageNumber(1) : setImageNumber(currImageNumber + 1);
          }}
        >
          <img src={iconNext} alt='' className='nextImgImg' />
        </div>
      </div>

      <div id='overlayPhotoCollection'>
        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 1 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(1)}
        >
          <img src={photoPrev1} alt='preview' id='' className='smallphotoPreviewImg' style={currImageNumber === 1 ? { opacity: 0.5 } : {}} />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 2 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(2)}
        >
          <img src={photoPrev2} alt='preview' id='' className='smallphotoPreviewImg' style={currImageNumber === 2 ? { opacity: 0.5 } : {}} />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 3 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(3)}
        >
          <img src={photoPrev3} alt='preview' id='' className='smallphotoPreviewImg' style={currImageNumber === 3 ? { opacity: 0.5 } : {}} />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 4 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(4)}
        >
          <img src={photoPrev4} alt='preview' id='' className='smallphotoPreviewImg' style={currImageNumber === 4 ? { opacity: 0.5 } : {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
