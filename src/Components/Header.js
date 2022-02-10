import "../Styles/HeaderStyles.css";

const Header = () => {
  return (
    <div className='Header'>
      <div className='logoNavContainer'>
        <div id='logo'></div>

        <div id='navContainer'>
          <button className='navButton'>
            <p className='navText'>Collections</p>
          </button>

          <button className='navButton'>
            <p className='navText'>Men</p>
          </button>

          <button className='navButton'>
            <p className='navText'>Women</p>
          </button>

          <button className='navButton'>
            <p className='navText'>About</p>
          </button>

          <button className='navButton'>
            <p className='navText'>Contact</p>
          </button>
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
