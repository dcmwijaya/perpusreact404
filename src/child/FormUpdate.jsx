import React, { useState } from 'react';

function FormUpdate({update}) {
    const [setForm, inputBook, setInputBook] = useState();

    function handleJudul(event) {
        setInputBook({ ...inputBook, judul: event.target.value })
    }

    function handlePengarang(event) {
        setInputBook({ ...inputBook, pengarang: event.target.value })
    }

    function handlePublikasi(event) {
        setInputBook({ ...inputBook, publikasi: event.target.value })
    }

    function submitChange(event) {
        event.preventDefault();
        update(inputBook);
        setForm("");
    }

    return (
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
    );
}

export default FormUpdate