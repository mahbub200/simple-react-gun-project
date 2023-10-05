import React from 'react';
import './Navbar.css'
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Kupa samsu store </h1>
            <div className='cart-counter'>
        <span></span>
        <BsFillCartFill className='icon' color='#fff' />
      </div>
        </nav>
    );
};

export default Navbar;