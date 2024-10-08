import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/navBar/NavBar';
import AccouncementBar from '../components/announcementBar/AnnouncementBar';

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
      <AccouncementBar />
      <NavBar />
      <Box
        classname='container'
        sx={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box classname='content'>{children}</Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
