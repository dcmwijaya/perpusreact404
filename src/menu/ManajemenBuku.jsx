import React, { useState, useEffect } from 'react';
import FormCreate from '../child/FormCreate';
import FormUpdate from '../child/FormUpdate';
import Table from '../child/Table';
import axios from "axios";

function ManajemenBuku() {
    //PART DATA
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState();

    useEffect(() => {
        retrieveData();
    }, []);

    function retrieveData() {
        axios
            .get("http://localhost:4000/book")
            .then((response) => { setBooks(response.data) })
            .catch(function (error) { console.log(error.response.data) });
    }

    function showCreate(){
        setForm("create");
    }
    
    function storeData(inputBook) {
        axios
            .post("http://localhost:4000/book/add", inputBook)
            .then(() => {
                retrieveData();
                alert("Data berhasil ditambahkan!");
            })
            .catch((error) => { console.log(error.response.data) })
    }

    // if (formMode === "edit"){
    //     axios
    //         .put("http://localhost:4000/book/update/", inputForm._id, inputForm)
    //         .then(() => {
    //             retrieveData();
    //             alert("Data berhasil diubah!");
    //         })
    //         .catch((error) => { console.log(error.response.data) })
    // }

    // function deleteData(book) {
    //     axios
    //         .delete("http://localhost:4000/book/delete/", book._id)
    //         .then(() => {
    //             retrieveData();
    //             alert("Data berhasil dihapus!");
    //         })
    //         .catch((error) => { console.log(error.response.data) })
    // }

    return (
        <div className="container mt-5 mb-5 w-75">
            <h3 className="text-center">
                <strong>Manajemen buku perpusreact404</strong>
            </h3><hr></hr>

            <div className="container p-4">
                <div id="TombolAksi">
                    <div className="row">
                        <div className="col-7">
                            <button type="button" className="btn btn-success" onClick={showCreate}>
                                <i className="fa-solid fa-file-pen me-1"></i>Create
                            </button>
                        </div>
                        <div className="col-5 d-flex">
                            <a href="/manajemenbuku" type="button" className="btn btn-secondary me-2">
                                <i className="bi bi-arrow-clockwise"></i>
                            </a>
                            <div className="input-group">
                                <input id="inSearchManbuk" type="text" className="form-control formin-group" aria-label="Search" placeholder="Find the book title...."/>
                                <button type="submit" className="btn btn-success"><i className="bi bi-search me-1"></i>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                {form === "create" && (
                    <FormCreate store={storeData} />
                )}

                {form === "edit" && (
                    <FormUpdate />
                )}

                <br></br>
                
                <Table bookList={books} />
            </div>
        </div>
    );
}

export default ManajemenBuku