import React from "react";
import "./Navbar.scss";

const NavbarTop = () => {
  return (
    <nav className="nav-top-container">
      <div className="nav-top-contact">
        <ul className="nav-top-list">
          <i className="fa fa-phone" aria-hidden="true">
            {" "}
            +91 9898989898
          </i>
          <li style={{ fontWeight: "100" }}> | </li>
          <li>trulyhelpfoundation@gmail.com</li>
        </ul>
      </div>
      <div className="nav-top-icons">
        <div className="nav-top-social-media-icons">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
