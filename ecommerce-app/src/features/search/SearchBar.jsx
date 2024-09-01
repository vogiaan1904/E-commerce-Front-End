import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react';

function SearchBar() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '30px',
    backgroundColor: 'white',
    width: '100%',
    marginRight: theme.spacing(2),
    marginLeft: 0,
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
    color: '#cf102d',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: '15px',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      // transition: theme.transitions.create('width'),
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Nhập từ khóa để tìm kiếm (ví dụ: lắp ráp, mô hình, ba lô,...)'
        inputProps={{ 'aria-label': 'search' }}
        sx={{ width: '100%' }}
      />
    </Search>
  );
}

export default SearchBar;
