import React from 'react';
import { Box } from '@mui/material';
import SideBar from '../components/sideBar/SideBar';
import NavBar from '../components/navBar/NavBar';
import AnnouncementBar from '../components/announcementBar/AnnouncementBar';

function CollectionsLayout({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AnnouncementBar />
      <NavBar />
      <Box
        classname='container'
        sx={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <SideBar />
        <Box classname='content'>{children}</Box>
      </Box>
    </Box>
  );
}

export default CollectionsLayout;
