import {  Link  } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../Images/logo.jpeg"
import avatar  from "../Images/Avatar.jpeg";
const pages = ['Home', 'Review', 'Portfolio','Price'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);
    
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
      return (
        <AppBar   sx={{background:"white"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
               <Link to="/Home" alt="logo"> <Avatar variant="square" src={Logo} sx={{ height:70, width:220}} /></Link>
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                 sx={{color:"black"}}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                <Link to="/Home"> <Avatar variant="square" src={Logo} alt="Logo" sx={{ height:70, width:220}} /> </Link>
              </Typography>
              <Box sx={{ display:"flex", justifyContent:"right",marginRight:10 ,flexGrow: 1, display: { xs: 'none', md: 'flex',  } }}>
              <Link  to="/Home" style={{textDecoration:"none ",color:"black" ,marginRight:40, fontFamily:"Open Sans Condensed", fontWeight:"bold" , fontSize:20}}>Home</Link>
              <Link to="/Portfolio" style={{textDecoration:"none ",color:"black", marginRight:40,fontFamily:"Open Sans Condensed", fontWeight:"bold" , fontSize:20}}> Portfolio</Link>
              <Link to="/Blog" style={{textDecoration:"none ",color:"black",marginRight:40, fontFamily:"Open Sans Condensed", fontWeight:"bold" , fontSize:20}}>Price</Link>
              <Link to="/About" style={{textDecoration:"none ",color:"black",marginRight:40, fontFamily:"Open Sans Condensed", fontWeight:"bold" , fontSize:20 }}>Review  </Link>

              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={avatar}  sx={{ width: 56, height: 56 }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px', }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    };
   
  
  export default Header;
