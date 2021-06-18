import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = (props) => {
    return (
    <header>
        <nav class="nav-top">
            <div className="nav-top-contact">
                <ul class="nav-top-list">
                    <i class="fa fa-phone" aria-hidden="true"> +91 9898989898</i>
                    <li style={{fontWeight: '100'}}> | </li>
                    <li>trulyhelpfoundation@gmail.com</li>
                </ul>
            </div>
            <div class="nav-top-icons">
                <div class="nav-top-social-media-icons">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
            </div>
        </nav>
        <div class="nav-bottom-container">
            <div class="nav-bottom">
                <img class="nav-logo" src="images/logo.png" />
                <ul class="nav-bottom-list">
                    <div class="nav-bottom-list-content">
                        <li><a href="#">Home  </a></li>
                        <li><a href="#">Active Cases  </a></li>
                        <li><a href="#">Volunteer  </a></li>
                        <li><a href="#">About Us  </a></li>
                        <li><a href="#">Contact Us  </a></li>
                        <li><a href="#">Our Partners  </a></li>
                        <li><a id="nav-donate" href="#">Donate  </a></li>
                    </div>
                    <img src="option-icon.PNG" />
                </ul>
            </div>
        </div >
    </header>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;