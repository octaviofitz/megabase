import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Nosotros from '../Components/Nosotros/Nosotros';
import Home from '../Components/Home/Home'

function Router() {
    return (
        <>
            <BrowserRouter>
            <header>
            <Navbar />
            </header>
           
            <main>
                <Routes>
                <Route path='/' element={<Home />} />
                </Routes>
            </main>

           
            <Footer />
            </BrowserRouter>
        </>
    );
}

export default Router;