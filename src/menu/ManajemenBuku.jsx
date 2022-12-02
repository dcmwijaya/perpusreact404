import React from 'react';
import { Link } from 'react-router-dom';

function ManajemenBuku() {
    //PART DATA
    //PART EVENT HANDLING

    return (
        <div className="container mt-5 mb-5 w-75">
            <h3 className="text-center">
                <strong>Manajemen buku perpusreact404</strong>
            </h3><hr></hr>

            {/* Input Form */}
            <div id="form">
                {/* Layout Form */}
            </div>

            {/* Tabel Data Buku */}
            <div className="container p-4">
                <div id="TombolAksi" className="mb-3">
                    <div className="row">
                        <div className="col-7">
                            <button type="button" className="btn btn-primary">
                                <i className="fa-solid fa-file-pen me-1"></i>Create
                            </button>
                        </div>
                        <div className="col-5 d-flex">
                            <Link to="/manajemenbuku" type="button" className="btn btn-secondary me-2">
                                <i className="bi bi-arrow-clockwise"></i>
                            </Link>
                            <div className="input-group">
                                <input id="inSearchManbuk" type="text" className="form-control formin-group" aria-label="Search" placeholder="Find the book title...."/>
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
                            <th scope="col" className="col-md-3">
                                <i className="fa-solid fa-wrench me-1"></i>Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Learn Fuzzy Logic</td>
                            <td>George Otto Mark</td>
                            <td>2022-10-10</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm m-1">
                                    <i className="fa-solid fa-pen-to-square me-1"></i>Update
                                </button>
                                <button type="button" className="btn btn-danger btn-sm m-1">
                                    <i className="fa-solid fa-trash-can me-1"></i>Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Method In IT2FL</td>
                            <td>Lotfi A. Zadeh</td>
                            <td>2022-08-08</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm m-1">
                                    <i className="fa-solid fa-pen-to-square me-1"></i>Update
                                </button>
                                <button type="button" className="btn btn-danger btn-sm m-1">
                                    <i className="fa-solid fa-trash-can me-1"></i>Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManajemenBuku