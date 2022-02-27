import { useEffect, useRef } from "react";
import "../Styles/MobileMenuComponentStyles.css";

const MobileMenuComponent = ({ menuDrawerOpen, setMenuDrawerOpen }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMenuDrawerOpen(false);
    }
  };

  return (
    <div id='menuComponentContainer' style={menuDrawerOpen ? { display: "flex" } : { display: "none" }}>
      <div id='menuComponent' ref={wrapperRef}>
        <div id='closeMenuButton' onClick={() => setMenuDrawerOpen(false)} />

        <div className='menuSectionContainer' onClick={() => setMenuDrawerOpen(false)}>
          <p className='menuSectionText'>Collections</p>
        </div>

        <div className='menuSectionContainer' onClick={() => setMenuDrawerOpen(false)}>
          <p className='menuSectionText'>Men</p>
        </div>

        <div className='menuSectionContainer' onClick={() => setMenuDrawerOpen(false)}>
          <p className='menuSectionText'>Women</p>
        </div>

        <div className='menuSectionContainer' onClick={() => setMenuDrawerOpen(false)}>
          <p className='menuSectionText'>About</p>
        </div>

        <div className='menuSectionContainer' onClick={() => setMenuDrawerOpen(false)}>
          <p className='menuSectionText'>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuComponent;
