import React from "react";
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="Nav_wrapper">
      <div className="Nav_content">
        <h1>
          <span className="he">He</span>-<span className="codes">Codes</span>
        </h1>
        <ul className="Nav_ul">
            <div className="link_wrapper">
              <Link className="links"  to = "/">Home</Link>
              <div className="link_underline"></div>
            </div>
            <div className="link_wrapper">
              <Link className="links"  to = "/about">About</Link>
              <div className="link_underline"></div>
            </div>
            <div className="link_wrapper">
              <Link className="links"  to = "/products">Products</Link>
              <div className="link_underline"></div>
            </div>
        </ul>
        <div className="other_nav_menu">
          <div className="cart_div">
            <i className='bx bxs-cart cart'></i>
            <p className="cart_value">0</p>
          </div>
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
