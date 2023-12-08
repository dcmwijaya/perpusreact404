import React, { useState } from 'react';

function FormCreate({ store }) {
    const [inputBook, setInputBook] = useState();

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
    }

    return (
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
    );
}

export default FormCreate