/** @format */

import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <div className='header'>
      <img
        src='https://persuaders.offerorchard.com/wp-content/uploads/2020/06/Slide-2_Amazon.png'
        className='header__logo'
        alt=''
      />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nave'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Dax</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
          <span className='header__optionLineTwo'>& Order</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>
      <h1>Hello from header</h1>
    </div>
  );
};

export default Header;
