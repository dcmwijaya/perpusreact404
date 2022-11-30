import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../favicon/favicon-16x16.png'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <img src={ Logo } alt="Logo" width="30" height="24" />
                    <strong>perpusreact404</strong>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link me-2" href="/"><i class="bi bi-house-door-fill me-1"></i>Beranda</Link>
                        <Link to="/katalog" className="nav-link"><i class="bi bi-collection-fill me-1"></i>Katalog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar