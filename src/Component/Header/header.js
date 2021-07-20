import React, { PropTypes } from 'react';

const Header = props => {
    return (
        <div>
          <header>
          <input type="checkbox" className="hamburger" id="hamburger"/>
  <label for="hamburger" className="icon"></label>
  <nav role="navigation">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
        </div>
    );
};


export default Header;