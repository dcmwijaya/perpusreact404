import React from 'react';

function Footer() {
    return (
        <div className="footer footer-expand-lg footer-dark bg-success pt-4 pb-3">
            <div className="footer-brand text-center">
                <span className="text-white fw-bold">© 2022 perpusreact404 | All Rights Reserved</span>
            </div>
            <div className="footer-content">                
                <div className="col-md-12 text-center text-white">
                    <small><i className="bi bi-geo-alt-fill me-1"></i>Sidoarjo, Jawa Timur, Indonesia</small>
                </div>
                <div className="col-md-12 pt-2">
                    <ul className="list-unstyled d-flex justify-content-center align-items-center p-2">
                        <li className="ms-3">
                            <a className="text-white" type="button" href="#">
                                <i className="bi bi-twitter me-1"></i>
                                <small><span>Twitter</span></small>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-white" type="button" href="#">
                                <i className="bi bi-instagram me-1"></i>
                                <small><span>Instagram</span></small>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-white" type="button" href="#">
                                <i className="bi bi-facebook me-1"></i>
                                <small><span>Facebook</span></small>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer