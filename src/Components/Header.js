import { useState } from "react";
import "../Styles/HeaderStyles.css";
import CartComponent from "./CartComponent";
import MobileMenuComponent from "./MobileMenuComponent";

const Header = ({ amountItemsInCart, setAmountItemsInCart, cartActive, setCartActive }) => {
  const [currTabClicked, setCurrTabClicked] = useState(0);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  return (
    <div className='Header'>
      <div className='logoNavContainer'>
        <div id='menu-button' onClick={() => setMenuDrawerOpen(true)} />

        {menuDrawerOpen ? <MobileMenuComponent menuDrawerOpen={menuDrawerOpen} setMenuDrawerOpen={setMenuDrawerOpen} /> : <></>}

        <div id='logo' />

        <div id='navContainer'>
          {/* 0 */}

          <div className='navButton' style={currTabClicked === 0 ? { borderBottom: "5px solid #ff7d1a" } : {}} onClick={() => setCurrTabClicked(0)}>
            <p className='navText'>Collections</p>
          </div>

          {/* 1 */}

          <div className='navButton' style={currTabClicked === 1 ? { borderBottom: "5px solid #ff7d1a" } : {}} onClick={() => setCurrTabClicked(1)}>
            <p className='navText'>Men</p>
          </div>

          {/* 2 */}

          <div className='navButton' style={currTabClicked === 2 ? { borderBottom: "5px solid #ff7d1a" } : {}} onClick={() => setCurrTabClicked(2)}>
            <p className='navText'>Women</p>
          </div>

          {/* 3 */}

          <div className='navButton' style={currTabClicked === 3 ? { borderBottom: "5px solid #ff7d1a" } : {}} onClick={() => setCurrTabClicked(3)}>
            <p className='navText'>About</p>
          </div>

          {/* 4 */}

          <div className='navButton' style={currTabClicked === 4 ? { borderBottom: "5px solid #ff7d1a" } : {}} onClick={() => setCurrTabClicked(4)}>
            <p className='navText'>Contact</p>
          </div>
        </div>
      </div>

      <div className='cartUserContainer'>
        <div>
          <div id='cartTab' onClick={() => setCartActive(!cartActive)} />
          {amountItemsInCart > 0 ? (
            <div id='cartQuantityNotifContainer'>
              <p id='cartQuantityNotifText'>{amountItemsInCart}</p>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div id='userIcon'></div>
      </div>

      {cartActive ? (
        <CartComponent
          amountItemsInCart={amountItemsInCart}
          setAmountItemsInCart={setAmountItemsInCart}
          cartActive={cartActive}
          setCartActive={setCartActive}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
