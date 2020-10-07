import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logo.png';
import Box from "@material-ui/core/Box";
// This is the header component that will go on most pages
// Logo on the left
// Page Navigation Links
// Pages:
// Home, Login, Register, Dashboard, About, Help

function Header() {
  return (
    <nav className="header">
    <AppBar boxShadow={3} borderBottom={1} borderColor="primary.main" style={{ background: '#F8F8F8' }}>
    <Toolbar>
    
    <Box display='flex' flexGrow={2}>
    <div>
    <Link to="/">
      <img src={logo} alt="logo" className="logo"/>
    </Link>
    </div>
    </Box>
 
    <Link to="/loginpage" className="header__link">
           <div className="header__option">
             <span className="header_optionLineOne">Hello, User</span>
             <span className="header_optionLineTwo">Sign In</span>
           </div>
    </Link>
    <Link to="/register" className="header__link">
           <div className="header__option">
            <span className="header_optionLineOne">Student</span>
             <span className="header_optionLineTwo">Registration</span>
           </div>
    </Link> 
  </Toolbar>
  </AppBar>
    </nav>
  );
}

export default Header;
