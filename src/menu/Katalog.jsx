import React, { useState, userEffect } from 'react';
import KatalogTable from '../tables/KatalogTable';
import axios from "axios";

function Katalog() {
    //PART DATA
    const [books, setBooks] = useState([]);

    //PART EVENT HANDLING
    userEffect(() => {
        retrieveData();
    }, []);
    function retrieveData() {
        axios.get("http://localhost:4000/katalog")
        .then((response) => { setBooks(response.data) })
        .catch(function (error) { console.log(error.response.data) });
    }

    return (
        <div className="container mt-5 mb-5 w-75">
            <h3 className="text-center">
                <strong>Katalog perpusreact404</strong>
            </h3><hr></hr>

            {/* Tabel Data Buku */}
            <KatalogTable book={books} />
        </div>
    );
}

export default Katalog