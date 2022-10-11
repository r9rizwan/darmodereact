import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css';
import { PropaneSharp } from '@mui/icons-material';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ToggleMode from './ToggleMode';
import style from 'styled-theming';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={{mode:'dark'}}>
        <div className='App'>
         
    <Box sx={{ paddingTop: 15 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    </div>
    </ThemeProvider>
  );
}
