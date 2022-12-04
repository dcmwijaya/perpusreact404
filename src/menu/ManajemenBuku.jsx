import React, { useState, userEffect } from 'react';
import ManageBookTable from '../tables/ManageBookTable';
import axios from "axios";

function ManajemenBuku() {
    //PART DATA
    const [formMode, setFormMode] = useState("");
    const [books, setBooks] = useState([]);
    const [inputForm, setInputForm] = useState();

    //PART EVENT HANDLING
    function showCreateForm(){
        setInputForm("");
        setFormMode("create");
    }
    function showEditForm(book){
        setInputForm(book);
        setFormMode("edit");
    }
    userEffect(() => {
        retrieveData();
    }, []);
    function retrieveData() {
        axios.get("http://localhost:4000/book")
        .then((response) => { setBooks(response.data) })
        .catch(function (error) { console.log(error.response.data) });
    }
    function handleJudul(e) {
        setInputForm({ ...inputForm, judul: e.target.value })
    }
    function handlePengarang(e) {
        setInputForm({ ...inputForm, pengarang: e.target.value })
    }
    function handlePublikasi(e) {
        setInputForm({ ...inputForm, publikasi: e.target.value })
    }
    function submitForm(event) {
        event.preventDefault();
        if (formMode === "create"){
            axios.post("http://localhost:4000/book/add", inputForm)
            .then(() => {
                alert("Data berhasil ditambahkan!");
                retrieveData();
            })
            .catch((error) => { console.log(error.response) })
        }
        if (formMode === "edit"){
            axios.post("http://localhost:4000/book/update/", inputForm._id, inputForm)
            .then(() => {
                alert("Data berhasil diubah!");
                retrieveData();
            })
            .catch((error) => { console.log(error.response) })
        }
    }
    function deleteOne(book) {
        axios.post("http://localhost:4000/book/delete/", inputForm._id, inputForm)
        .then(() => {
            alert("Data berhasil dihapus!");
            retrieveData();
        })
        .catch((error) => { console.log(error.response) })
    }

    return (
        <div className="container mt-5 mb-5 w-75">
            <h3 className="text-center">
                <strong>Manajemen buku perpusreact404</strong>
            </h3><hr></hr>

            {/* Action */}
            <div className="container p-4">
                <div id="TombolAksi">
                    <div className="row">
                        <div className="col-7">
                            <button type="button" className="btn btn-success" onClick={showCreateForm}>
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
                </div><br></br>

                {/* Input Form */}
                {formMode === "" && (
                    <div id="form" className="card py-2 my-2 bg-secondary">
                        <div className="card-body">
                            <h4>Book Forms</h4>
                            <form className="row" onSubmit={submitForm}>
                                <div className="col-4">
                                    <input type="text" name="judul" className="form-control mx-2" placeholder="Title...." value={inputForm.judul || ""} onChange={handleJudul} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="pengarang" className="form-control mx-2" placeholder="Author...." value={inputForm.pengarang || ""} onChange={handlePengarang} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="publikasi" className="form-control mx-2" placeholder="Publish...." value={inputForm.publikasi || ""} onChange={handlePublikasi} />
                                </div>
                                <div className="col-2">
                                    <a type="submit" className="btn btn-dark"><i class="fa-regular fa-square-check me-1"></i>Submit</a>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Tabel Data Buku */}
                <ManageBookTable showEdit={showEditForm} books={books} requestToDelete={deleteOne} />
            </div>
        </div>
    );
}

export default ManajemenBuku