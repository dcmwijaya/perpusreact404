import React, { useState } from 'react';

function ManajemenBuku({ bookList, store, update, remove, search }) {
    const [form, setForm] = useState();
    const [inputBook, setInputBook] = useState();

    function showCreate(){
        setForm("create");
    }

    function showEdit(book){
        setInputBook(book);
        setForm("edit");
    }

    function handleJudul(event) {
        setInputBook({ ...inputBook, judul: event.target.value })
    }

    function handlePengarang(event) {
        setInputBook({ ...inputBook, pengarang: event.target.value })
    }

    function handlePublikasi(event) {
        setInputBook({ ...inputBook, publikasi: event.target.value })
    }

    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);        
        setForm("");
    }

    function submitChange(event) {
        event.preventDefault();
        update(inputBook);
        setForm("");
    }

    function deleteBook(book){
        remove(book);
    }

    function searchData(book){
        search(book);
    }

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
                                <button type="submit" className="btn btn-success" onClick={searchData}><i className="bi bi-search me-1"></i>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                {form === "create" && (
                    <div classname="card py-2 my-2 bg-secondary" id="formTambah">
                        <div className="card-body">
                            <h4>Tambah Buku</h4>
                            <form className="row" onSubmit={submitAdd}>
                                <div className="col-4">
                                    <input type="text" name="judul" className="form-control mx-2" placeholder="Title...." onChange={handleJudul} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="pengarang" className="form-control mx-2" placeholder="Author...." onChange={handlePengarang} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="publikasi" className="form-control mx-2" placeholder="Publish...." onChange={handlePublikasi} />
                                </div>
                                <div className="col-2">
                                    <button type="submit" className="btn btn-dark"><i className="fa-regular fa-square-check me-1"></i>Simpan</button><br/><br/>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {form === "edit" && (
                    <div classname="card py-2 my-2 bg-secondary" id="formUbah">
                        <div className="card-body">
                            <h4>Ubah Data Buku</h4>
                            <form className="row" onSubmit={submitChange}>
                                <div className="col-4">
                                    <input type="text" name="judul" className="form-control mx-2" placeholder="Title...." onChange={handleJudul} value={inputBook.judul} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="pengarang" className="form-control mx-2" placeholder="Author...." onChange={handlePengarang} value={inputBook.pengarang} />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="publikasi" className="form-control mx-2" placeholder="Publish...." onChange={handlePublikasi} value={inputBook.publikasi} />
                                </div>
                                <div className="col-2">
                                    <button type="submit" className="btn btn-dark"><i className="fa-regular fa-square-check me-1"></i>Ubah</button><br/><br/>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <br></br>
                
                <div id="daftarBuku">
                    <table className="table table-sm">
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
                            {bookList.map((book, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{book.judul}</td>
                                <td>{book.pengarang}</td>
                                <td>{book.publikasi}</td>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => showEdit(book)}>
                                        <i className="fa-solid fa-pen-to-square me-1"></i>Update
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" onClick={() => deleteBook(book)}>
                                        <i className="fa-solid fa-trash-can me-1"></i>Delete
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManajemenBuku