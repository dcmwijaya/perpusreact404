import React from 'react';
import KatalogTable from '../tables/KatalogTable';

function Katalog() {
    //PART DATA
    //PART EVENT HANDLING
    return (
        <div className="container mt-5 mb-5 w-75">
            <h3 className="text-center">
                <strong>Katalog perpusreact404</strong>
            </h3><hr></hr>

            {/* Tabel Data Buku */}
            <KatalogTable />
        </div>
    );
}

export default Katalog