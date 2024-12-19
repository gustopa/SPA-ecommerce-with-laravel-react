import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link as LinkRouter} from 'react-router-dom'
import WeekendIcon from '@mui/icons-material/Weekend';
import { Typography } from '@mui/material';
import SpeakerIcon from '@mui/icons-material/Speaker';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useThemeContext } from './ThemeProviderCustom';
export default function SecondLayout() {
    const {toggleTheme,themeMode} = useThemeContext()
    const linkRouter = {
        color: themeMode == 'light' ? 'rgb(125, 135, 156)' : 'white',
        textAlign:'center',
        textDecoration:'none',
        lineHeight:'0',
        margin : '0 20px',
    }
  return (
      <AppBar position="sticky" style={{boxShadow : 'none' , backgroundColor : 'transparent', padding : '10px 0'}}>
        <Toolbar variant="regular">
          <Box display="flex" width="100%" justifyContent="center">
            <LinkRouter to="" style={linkRouter}>
                <WeekendIcon/>
                <Typography fontSize='12px'>
                    Furniture
                </Typography>
            </LinkRouter>
            <LinkRouter to="" style={linkRouter}>
                <SpeakerIcon/>
                <Typography fontSize='12px'>
                    Electronic
                </Typography>
            </LinkRouter>
            <LinkRouter to="" style={linkRouter}>
                <PhoneIphoneIcon/>
                <Typography fontSize='12px'>
                    Phone
                </Typography>
            </LinkRouter>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
