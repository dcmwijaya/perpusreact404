import React from 'react';

function KatalogTable() {
    return (
        <div className="container p-4">
            <div id="TombolAksi">
                <div className="row">
                    <div className="col-7"></div>
                    <div className="col-5 d-flex">
                        <a href="/katalog" type="button" className="btn btn-secondary me-2">
                            <i className="bi bi-arrow-clockwise"></i>
                        </a>
                        <div className="input-group">
                            <input id="inSearchKtg" type="text" className="form-control formin-group" aria-label="Search" placeholder="Find the book title...."/>
                            <button type="submit" className="btn btn-success"><i className="bi bi-search me-1"></i>Search</button>
                        </div>
                    </div>
                </div>
            </div><br></br>
            <table className="table table-sm">
                <caption>Total list of books: 2</caption>
                <thead className="table-success">
                    <tr>
                        <th scope="col" className="col-md-1">
                            <i className="fa-solid fa-arrow-up-1-9"></i>
                        </th>
                        <th scope="col" className="col-md-3">
                            <i className="fa-solid fa-book-open-reader me-1"></i>Title
                        </th>
                        <th scope="col" className="col-md-3">
                            <i className="fa-solid fa-user-pen me-1"></i>Author
                        </th>
                        <th scope="col" className="col-md-2">
                            <i className="bi bi-calendar-range-fill me-1"></i>Publish
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Learn Fuzzy Logic</td>
                        <td>George Otto Mark</td>
                        <td>2022/10/10</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Method In IT2FL</td>
                        <td>Lotfi A. Zadeh</td>
                        <td>2022/08/08</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default KatalogTable