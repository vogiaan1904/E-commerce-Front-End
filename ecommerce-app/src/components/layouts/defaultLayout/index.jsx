import React from 'react';
import { Box } from '@mui/material';
import SideBar from '../components/sideBar/SideBar';
import NavBar from '../components/navBar/NavBar';

function DefaultLayout({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <NavBar />
      <Box
        className='container'
        sx={{
          maxWidth: '1170px',
          height: '60px',
          alignItems: 'center',
        }}
      >
        <SideBar />
        <Box classname='content'>{children}</Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
