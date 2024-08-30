import { Box } from '@mui/material';
import React from 'react';
function AnnouncementBar() {
  return (
    <Box
      className='container'
      sx={{
        height: '40px',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          height: '100%',
          bgcolor: ' grey',
          padding: '0 16px 0 16px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: '16px',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <p>Miễn phí giao hàng đơn từ 500k</p>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>Giao hàng hỏa tốc 4 tiếng</p>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <p>Hệ thống 216 cửa hàng</p>
        </Box>
      </Box>
    </Box>
  );
}

export default AnnouncementBar;
