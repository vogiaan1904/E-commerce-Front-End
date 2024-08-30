import './navBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Divider,
  // IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Link,
  alpha,
  InputBase,
  Button,
} from '@mui/material';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import MenuIcon from '@mui/icons-material/Menu';
import navLinkData from './data';
import styled from '@emotion/styled';
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDrawer, setOpeoDrawer] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setOpeoDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {navLinkData.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton to={item.path}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
      className='container'
      sx={{
        alignItems: 'center',
      }}
    >
      <Box
        className='navBarContent'
        sx={{
          height: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
        }}
      >
        <Box
          className='navBarTop'
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: '#cf102d',
          }}
        >
          <Link
            herf='/'
            sx={{
              margin: '16px 0',
              width: '100%',
            }}
          >
            <img
              src='https://www.mykingdom.com.vn/cdn/shop/files/image_47.svg?v=1683551202&width=400'
              alt=''
            />
          </Link>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box
            className='headerIcons'
            sx={{
              width: '100%',
            }}
          >
            <Button to='/' sx={{ padding: '15px 20px' }}>
              <PersonIcon />
              <Box
                component={'p'}
                sx={{
                  textTransform: 'none',
                  display: {
                    lg: 'block',
                    md: 'none',
                    sm: 'none',
                    sx: 'none',
                  },
                  marginLeft: '10px',
                }}
              >
                Đăng nhập
              </Box>
            </Button>
            <Button herf='/cart' sx={{ padding: '15px 20px' }}>
              <ShoppingBagIcon />
              <Box
                component={'p'}
                sx={{
                  textTransform: 'none',
                  display: {
                    lg: 'block',
                    md: 'none',
                    sm: 'none',
                    sx: 'none',
                  },
                  marginLeft: '10px',
                }}
              >
                Giỏ hàng
              </Box>
            </Button>
          </Box>
        </Box>
        <Box
          className='navBarLinks'
          sx={{
            display: {
              lg: 'flex',
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <List
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              paddingInlineStart: 0,
            }}
          >
            {navLinkData.map(item => {
              return (
                <NavLink key={item.name} to={item.path} className='navBarLink'>
                  <p>{item.name}</p>
                </NavLink>
              );
            })}
          </List>
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: '12px',
            }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>

            <IconButton
              onClick={handleClick}
              size='small'
              sx={{}}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <PersonIcon sx={{ width: 32, height: 32 }}>M</PersonIcon>
            </IconButton>

            <IconButton aria-label='cart'>
              <Badge badgeContent={4} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box> */}
        </Box>
        {/* <Box
          className='navBarRight'
          sx={{
            display: {
              lg: 'none',
              md: 'none',
              sm: 'flex',
              xs: 'flex',
            },
            maxWidth: '25%',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={toggleDrawer('right', true)}
            edge='start'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        </Box> */}
        {/* <Box
          className='navBarLeft'
          sx={{
            display: {
              lg: 'none',
              md: 'none',
              sm: 'block',
              xs: 'block',
            },
            maxWidth: '25%',
          }}
        >
          <IconButton to='/' className='nav-logo-sm'>
            <AppleIcon />
          </IconButton>
        </Box> */}
        <Menu
          className='personMenu'
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize='small' />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize='small' />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <Drawer anchor='right' open={openDrawer} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box>
  );
}
