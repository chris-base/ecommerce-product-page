import "../Styles/BodyStyles.css";
// import productImage from "../../assets/image-product-1.jpg";

const Body = () => {
  return (
    <div id='Body'>
      <div id='photosContainer'>
        <img src='image-product-1.jpg' id='mainPhoto' alt='product' />

        <div id='photoCollection'>
          <img src='image-product-1-thumbnail.jpg' alt='preview' id='' className='photoPreview' />

          <img src='image-product-2-thumbnail.jpg' alt='preview' id='' className='photoPreview' />

          <img src='image-product-3-thumbnail.jpg' alt='preview' id='' className='photoPreview' />

          <img src='image-product-4-thumbnail.jpg' alt='preview' id='' className='photoPreview' />
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
              <div className='quantityButton'>
                <p id='minusButton' className='quantityButtonText'>
                  -
                </p>
              </div>

              <p id='quantityText'>0</p>

              <div className='quantityButton'>
                <p id='addButton' className='quantityButtonText'>
                  +
                </p>
              </div>
            </div>

            <div id='addToCartButton'>
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
