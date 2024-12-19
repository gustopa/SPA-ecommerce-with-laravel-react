import React from "react";
import { Link } from "react-router-dom";
import ColorModeSelect from "./shared-theme/ColorModeSelect";
export default function Home(){
    return (
        <>
            <h1>Home</h1>
            <Link to="/about">About</Link>
            <ColorModeSelect sx={{ position: 'fixed', top: '10rem', right: '1rem' }} />
        </>
    )
}