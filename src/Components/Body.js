import "../Styles/BodyStyles.css";
import { useState, useEffect } from "react";
// import productImage from "../../assets/image-product-1.jpg";

const Body = () => {
  const [quantityCount, setQuantityCount] = useState(0);
  const [addCartScale, setAddCartScale] = useState(1);
  const [currImageNumber, setCurrImageNumber] = useState(1);

  return (
    <div id='Body'>
      <div id='photosContainer'>
        <div id='mainPhotoContainer'>
          <img src={`image-product-${currImageNumber}.jpg`} id='mainPhoto' alt='product' />
        </div>

        <div id='photoCollection'>
          {/* 1 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currImageNumber === 1 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrImageNumber(1)}
          >
            <img
              src='image-product-1-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currImageNumber === 1 ? { opacity: 0.2 } : {}}
            />
          </div>
          {/* 2 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currImageNumber === 2 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrImageNumber(2)}
          >
            <img
              src='image-product-2-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currImageNumber === 2 ? { opacity: 0.2 } : {}}
            />
          </div>

          {/* 3 */}

          <div
            className='smallPreviewPhotoContainer'
            style={currImageNumber === 3 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrImageNumber(3)}
          >
            <img
              src='image-product-3-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currImageNumber === 3 ? { opacity: 0.2 } : {}}
            />
          </div>

          {/* 4 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currImageNumber === 4 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrImageNumber(4)}
          >
            <img
              src='image-product-4-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currImageNumber === 4 ? { opacity: 0.2 } : {}}
            />
          </div>
        </div>
      </div>

      <div id='infoContainer'>
        <div id='infoInnerContainer'>
          <p id='infoTitle'>Sneaker Company</p>

          <p id='productTitle'>Fall Limited Edition Sneakers</p>

          <p id='productDescription'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer.
          </p>

          <div id='priceDiscountContainer'>
            <p id='productPrice'>$125.00</p>

            <div id='discountContainer'>
              <p id='discountText'>50%</p>
            </div>
          </div>

          <p id='originalPrice'>$250.00</p>

          <div id='quantityAddCartContainer'>
            <div id='quantityContainer'>
              <div className='quantityButton' onClick={() => (quantityCount <= 0 ? null : setQuantityCount(quantityCount - 1))}>
                <p id='minusButton' className='quantityButtonText'>
                  -
                </p>
              </div>

              <p id='quantityText'>{quantityCount}</p>

              <div className='quantityButton' onClick={() => setQuantityCount(quantityCount + 1)}>
                <p id='addButton' className='quantityButtonText'>
                  +
                </p>
              </div>
            </div>

            <div
              id='addToCartButton'
              onClick={() => {
                setAddCartScale(0.9);
                setTimeout(() => setAddCartScale(1), 200);
              }}
              style={{ transform: `scale(${addCartScale})` }}
            >
              <div id='addCartImg' />
              <p id='addCartText'>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
