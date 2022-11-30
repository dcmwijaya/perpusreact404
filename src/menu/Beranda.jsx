import React from 'react';
import BigSizeLogo from '../assets/favicon/logo.png'

function Beranda() {
    return (
        <div className="container mt-4 mb-5 pb-4 w-75 text-center justify-content-center align-items-center">
            <img src={ BigSizeLogo } class="Logo" alt="Logo"/>
            <h1>Selamat datang di website perpusreact404</h1>
            <p>- Website perpusreact404 ini merupakan media pustaka digital yang dibuat dengan bantuan framework React JS -</p>
        </div>
    );
}

export default Beranda