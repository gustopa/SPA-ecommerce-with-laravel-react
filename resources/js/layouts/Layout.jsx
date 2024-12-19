import React from 'react';
import { Container } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import TopNav from './TopNav'
import LabelBottomNavigation from './LabelBottomNavigation';
// Komponen Layout
function Layout({theme}) {
    return (
        <>
            {/* AppBar */}
            <TopNav theme={theme} />

            {/* Konten Halaman */}
            <Container sx={{ mt: 4 }}>
                <Outlet /> {/* Tempat halaman akan dirender */}
            </Container>

            <LabelBottomNavigation/>
        </>
    );
}

export default Layout;
