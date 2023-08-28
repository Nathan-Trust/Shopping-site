import React from "react";
import {  ShoppingCart} from '@mui/icons-material'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="nav-title"><ShoppingBagOutlined sx={{fontSize:'32px'}}/> ShopRex</div> */}
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to='/cart'><ShoppingCart sx={{fontSize:'32px'}}/></Link>
      </div>
    </div>
  );
};

export default Navbar;
