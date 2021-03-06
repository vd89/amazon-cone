/** @format */

import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
const Header = () => {
  const [{ basket, user }] = useStateValue();

  // const login = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://persuaders.offerorchard.com/wp-content/uploads/2020/06/Slide-2_Amazon.png'
          className='header__logo'
          alt=''
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
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
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
