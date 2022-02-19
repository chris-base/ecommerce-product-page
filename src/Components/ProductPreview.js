import "../Styles/ProductPreviewStyles.css";
import { useState } from "react";

const ProductPreview = ({ setPhotoCarousel }) => {
  const [currImageNumber, setImageNumber] = useState(1);

  return (
    <div id='productPreviewBody'>
      <div id='closeButtonContainer'>
        <img src='icon-close.svg' alt='preview' id='closeButton' onClick={() => setPhotoCarousel(false)} />
      </div>

      <div id='mainPhotoPreviewContainer'>
        <div />
        <img src='image-product-1.jpg' alt='preview' id='mainPhotoPreview' />
        <div />
      </div>

      <div id='overlayPhotoCollection'>
        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 1 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(1)}
        >
          <img
            src='image-product-1-thumbnail.jpg'
            alt='preview'
            id=''
            className='smallphotoPreviewImg'
            style={currImageNumber === 1 ? { opacity: 0.5 } : {}}
          />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 2 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(2)}
        >
          <img
            src='image-product-2-thumbnail.jpg'
            alt='preview'
            id=''
            className='smallphotoPreviewImg'
            style={currImageNumber === 2 ? { opacity: 0.5 } : {}}
          />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 3 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(3)}
        >
          <img
            src='image-product-3-thumbnail.jpg'
            alt='preview'
            id=''
            className='smallphotoPreviewImg'
            style={currImageNumber === 3 ? { opacity: 0.5 } : {}}
          />
        </div>

        <div
          className='smallPhotoPreviewContainer'
          style={currImageNumber === 4 ? { border: "2px solid #ff7d1a" } : {}}
          onClick={() => setImageNumber(4)}
        >
          <img
            src='image-product-4-thumbnail.jpg'
            alt='preview'
            id=''
            className='smallphotoPreviewImg'
            style={currImageNumber === 4 ? { opacity: 0.5 } : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
