import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import NavbarItem from './Navbar_item'

const itemdata = [
    {
        id : 1,
        linkUrl : '/',
        itemName : 'Home'
    },
    {
        id : 2,
        linkUrl : '/about',
        itemName : 'about'
    },
    {
        id : 3,
        linkUrl : '/service',
        itemName : 'service'
    },
    {
        id : 4,
        linkUrl : '/product',
        itemName : 'product'
    },
]

const Navbar = () => {
    const [close, setClose] = useState(true)

    const closeNavbar = () => {
        setClose(!close)
    }

    return (
        <nav className="navBar">
            <Link to='/' className='logo' onClick={closeNavbar}>
                TRVL
                    <i className='fab fa-typo3' />
            </Link>
            <label onClick={closeNavbar} className="checkBtn">
                <i className={close ? 'fas fa-bars' : 'fas fa-times'} ></i>
            </label>
            <ul className={close ? 'navbar_content nav_content_hide' : 'navbar_content nav_content_show'}>
                { itemdata.map(item => (
                    <NavbarItem 
                    item={item}
                    key={item.id} 
                    closeNavbar={closeNavbar} />
                )) }
            </ul>
        </nav>
    );
};

export default Navbar;
