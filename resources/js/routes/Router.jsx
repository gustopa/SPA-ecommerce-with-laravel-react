import React,{useEffect, useState} from 'react'
import { Routes,Route,useLocation } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Layout from '../layouts/Layout';
import Login from '../components/auth/Login';
import nProgress from 'nprogress';


export default function Router({tema}){
    useEffect(()=>{
        nProgress.start()
        nProgress.done()
    },[useLocation()])
    
    return (
        <Routes>
            <Route path='/login' element={<Login theme={tema}/>} />
            <Route path='/' element={<Layout theme={tema}/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
        
    )
}