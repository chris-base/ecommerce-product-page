import "../Styles/BodyStyles.css";
import { useState, useEffect, useRef } from "react";

const Body = ({ setPhotoCarousel, currPhotoImgNumber, setCurrPhotoImgNumber, amountItemsInCart, setAmountItemsInCart }) => {
  const [itemCount, setItemCount] = useState(0);
  const [addCartScale, setAddCartScale] = useState(1);
  const [under600px, setUnder600px] = useState(false);
  // const [fromTopImgButton, setFromTopImgButton] = useState(0);

  const photoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setUnder600px(true);
      } else if (window.innerWidth > 600) {
        setUnder600px(false);
      }
    };

    if (window.innerWidth <= 600) {
      setUnder600px(true);
    } else if (window.innerWidth > 600) {
      setUnder600px(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div id='Body'>
      <div id='photosContainer'>
        <div id='mainPhotoContainer' onClick={() => (!under600px ? setPhotoCarousel(true) : {})}>
          {under600px ? (
            <div
              className='nextImgButtonMobile'
              style={{ left: "20px" }}
              onClick={() => {
                currPhotoImgNumber === 1 ? setCurrPhotoImgNumber(4) : setCurrPhotoImgNumber(currPhotoImgNumber - 1);
              }}
            >
              <img src='icon-previous.svg' alt='' className='nextImgImgMobile' />
            </div>
          ) : (
            <></>
          )}

          <img src={`image-product-${currPhotoImgNumber}.jpg`} id='mainPhoto' alt='product' ref={photoRef} />

          {under600px ? (
            <div
              className='nextImgButtonMobile'
              style={{ right: "20px" }}
              onClick={() => {
                currPhotoImgNumber === 4 ? setCurrPhotoImgNumber(1) : setCurrPhotoImgNumber(currPhotoImgNumber + 1);
              }}
            >
              <img src='icon-next.svg' alt='' className='nextImgImgMobile' />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div id='photoCollection'>
          {/* 1 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currPhotoImgNumber === 1 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrPhotoImgNumber(1)}
          >
            <img
              src='image-product-1-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currPhotoImgNumber === 1 ? { opacity: 0.2 } : {}}
            />
          </div>
          {/* 2 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currPhotoImgNumber === 2 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrPhotoImgNumber(2)}
          >
            <img
              src='image-product-2-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currPhotoImgNumber === 2 ? { opacity: 0.2 } : {}}
            />
          </div>

          {/* 3 */}

          <div
            className='smallPreviewPhotoContainer'
            style={currPhotoImgNumber === 3 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrPhotoImgNumber(3)}
          >
            <img
              src='image-product-3-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currPhotoImgNumber === 3 ? { opacity: 0.2 } : {}}
            />
          </div>

          {/* 4 */}
          <div
            className='smallPreviewPhotoContainer'
            style={currPhotoImgNumber === 4 ? { border: "2px solid orange" } : {}}
            onClick={() => setCurrPhotoImgNumber(4)}
          >
            <img
              src='image-product-4-thumbnail.jpg'
              alt='preview'
              id=''
              className='photoPreview'
              style={currPhotoImgNumber === 4 ? { opacity: 0.2 } : {}}
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

          <div id='pricesContainer'>
            <div id='priceDiscountContainer'>
              <p id='productPrice'>$125.00</p>

              <div id='discountContainer'>
                <p id='discountText'>50%</p>
              </div>
            </div>

            <p id='originalPrice'>$250.00</p>
          </div>

          <div id='quantityAddCartContainer'>
            <div id='quantityContainer'>
              <div className='quantityButton' onClick={() => (itemCount <= 0 ? null : setItemCount(itemCount - 1))}>
                <img src='icon-minus.svg' className='quantityButtonImg' alt='' />
              </div>

              <p id='quantityText'>{itemCount}</p>

              <div className='quantityButton' onClick={() => setItemCount(itemCount + 1)}>
                <img src='icon-plus.svg' className='quantityButtonImg' alt='' />
              </div>
            </div>

            <div
              id='addToCartButton'
              onClick={() => {
                setAddCartScale(0.9);
                setTimeout(() => setAddCartScale(1), 200);
                setAmountItemsInCart(amountItemsInCart + itemCount);
                setItemCount(0);
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
