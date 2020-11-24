import React from 'react';
import { Link } from 'react-router-dom'

const Navbar_item = ({closeNavbar, item, homeActive}) => {
    const { linkUrl, itemName } = item

    return (
        <>
            <li className={ homeActive ? 'navbar_item active' : 'navbar_item' } onClick={closeNavbar} >
                <Link to={linkUrl} className="navbar_item_link" > {itemName} </Link>
            </li>
        </>
    );
};

export default Navbar_item;