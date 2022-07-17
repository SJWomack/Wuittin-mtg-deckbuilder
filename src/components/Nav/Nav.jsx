import React from 'react';
import {  useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Paper from '@mui/material/Paper';
import { shadows } from '@mui/system';



function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (

    <Box sx={{ width: 390 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>

        <BottomNavigation
          showLabels
          sx={{backgroundColor:'#596e79'}}
        >
          <BottomNavigationAction sx={{color: 'lightgray'}} label="Home" onClick={() => history.push('/home')}  icon={<HomeIcon />} />
          <BottomNavigationAction sx={{color: 'lightgray'}} label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction sx={{color: 'lightgray'}} label="Shop" onClick={() => window.open('https://www.tcgplayer.com/search/magic/product?productLineName=magic&page=1&view=grid')} icon={<StorefrontIcon />} />

        </BottomNavigation>
        </Paper>

    </Box>
   
  );
}

export default Nav;
