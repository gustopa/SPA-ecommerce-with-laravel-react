import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import LoginIcon from '@mui/icons-material/Login';
import SecondLayout from './SecondLayout';
import { Brightness7Outlined ,Brightness4Outlined,LocalMallOutlined,AccountCircleOutlined } from '@mui/icons-material';
import { useThemeContext } from './ThemeProviderCustom';
import { Modal,Box } from '@mui/material';
import Login from '../components/auth/Login';
function TopNav() {
  const {toggleTheme, themeMode} = useThemeContext()

  const linkStyle = {
    color : themeMode == 'light' ? 'rgb(125, 135, 156)' : 'white',
    textDecoration : 'none'
  }
 
    return (
        <>
            {/* AppBar */}
            <AppBar position="sticky" sx={{backgroundColor : 'transparent',boxShadow : 'none', borderBottom : '1px solid rgba(125, 135, 156,.2)'}}> 
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src={Logo} width={150} alt="" />
                    </Typography>
                    <Link to="/" style={linkStyle}>
                        <Button color="inherit">
                            <AccountCircleOutlined/>
                        </Button>
                    </Link>
                    <Link to="/about" style={linkStyle}>
                        <Button color="inherit">
                            <LocalMallOutlined/>
                        </Button>
                    </Link>
                      <Login/>
                      
                    <Button color="inherit" onClick={toggleTheme} style={linkStyle}>
                        {themeMode == 'light' ? (<Brightness7Outlined/>) : (<Brightness4Outlined/>)}
                    </Button>
                </Toolbar>
            </AppBar>
            <SecondLayout/>
        </>
    );
}

export default TopNav;
