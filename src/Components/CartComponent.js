import "../Styles/CartComponentStyles.css";

const CartComponent = ({ amountItemsInCart, setAmountItemsInCart }) => {
  const isCartEmpty = () => {
    return amountItemsInCart <= 0;
  };

  return (
    <div id='cartComponentContainer'>
      <div id='cartTextContainer'>
        <p id='cartTextText'>Cart</p>
      </div>

      <div id='cartItemsContainer'>
        {isCartEmpty() ? (
          <p id='cartEmptyText'>Your cart is empty.</p>
        ) : (
          <div id='cartItemContainer'>
            <div id='itemsQuantityContainer'>
              <img id='cartItemPreview' src='image-product-1-thumbnail.jpg' alt='' />

              <div id='itemsQuantityTextContainer'>
                <p className='cartItemQuantityText'>Fall Limited Edition Sneakers</p>
                <p className='cartItemQuantityText'>
                  $125.00 x {amountItemsInCart} <p id='totalCostText'>{"$" + 125 * amountItemsInCart}.00</p>
                </p>
              </div>

              <div id='cartTrashIcon' />
            </div>

            <div id='checkoutButtonContainer'>
              <div id='checkoutButton'>
                <p id='checkoutButtonText'>Checkout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
