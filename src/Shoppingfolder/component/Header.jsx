import React from 'react'

import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header =()=>
{
    return(
        <div className='Headersection'>
           <div className="left">
                 <div className="title"><h3>Amazon Shopping</h3></div>
           </div>
           <div className="center">
              <ul>
                <li>women</li>
                <li>men</li>
                <li>children</li>
                <li>Beauty</li>
              </ul>
           </div>
           <div className="search">
              <input type="text" placeholder='search....' />
           </div>
           <div className="right">
                    Signin/Signup
            </div>
            <div className="cart">Cart</div>
               <div className="cart-icon">
               <FaShoppingCart size={30} />
               </div>
        </div>
    )
}
export default Header