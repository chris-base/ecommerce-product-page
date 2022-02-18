import { useState } from "react";
import "../Styles/HeaderStyles.css";

const Header = () => {
  const [currTabClicked, setCurrTabClicked] = useState(0);

  return (
    <div className='Header'>
      <div className='logoNavContainer'>
        <div id='logo'></div>

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
        <div id='cartTab'></div>

        <div id='userIcon'></div>
      </div>
    </div>
  );
};

export default Header;
