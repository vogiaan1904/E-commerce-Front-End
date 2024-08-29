import './navBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import AppleIcon from '@mui/icons-material/Apple';
import navLinkData from './data';
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
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
        maxWidth: '1170px',
        height: '60px',
        alignItems: 'center',
      }}
    >
      <Box
        className='navBarContent'
        sx={{
          height: '100%',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
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
        </Box>
        <Box
          className='navBarCenter'
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: {
              lg: 'space-between',
              md: 'space-between',
              sm: 'flex-end',
              xs: 'flex-end',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: {
                lg: 'flex',
                md: 'flex',
                sm: 'none',
                xs: 'none',
              },
              alignItems: 'center',
            }}
          >
            <NavLink to='/'>
              <IconButton className='nav-logo-lg'>
                <AppleIcon />
              </IconButton>
            </NavLink>
            <ul className='nav'>
              {navLinkData.map(item => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className='navBarLink'
                  >
                    <p>{item.name}</p>
                  </NavLink>
                );
              })}
            </ul>
          </Box>
          <Box
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
          </Box>
        </Box>
        <Box
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
        </Box>
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
