import React from "react";
import {Link} from "react-router-dom"

const Navigation = ({ handleMobile, handleCart, mobile, allCart}) => {
  return (
    <nav className="Nav_wrapper">
      <div className="Nav_content">
        <h1>
          <span className="he">He</span>-<span className="codes">Codes</span>
        </h1>
        <ul className={mobile? "Nav_ul active" : "Nav_ul"}>
            <div className="link_wrapper">
              <Link onClick={handleMobile} className="links"  to = "/">Home</Link>
              <div className="link_underline"></div>
            </div>
            <div className="link_wrapper">
              <Link onClick={handleMobile} className="links"  to = "/about">About</Link>
              <div className="link_underline"></div>
            </div>
            <div className="link_wrapper">
              <Link onClick={handleMobile} className="links"  to = "/products">Products</Link>
              <div className="link_underline"></div>
            </div>
        </ul>
        <div className={mobile ? "other_nav_menu active" : "other_nav_menu"}>
          <Link to = "/cart">
            <div className="cart_div" onClick={handleCart}>
              <i className='bx bxs-cart cart'></i>
              <p className="cart_value">{allCart.length}</p>
            </div>
          </Link>
          <p>Login</p>
        </div>
        <div className={mobile? "hamburger active": "hamburger"} onClick={handleMobile}>
              <div className='bar'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
