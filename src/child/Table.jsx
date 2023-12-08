import React, { useState } from 'react';

function Table({ bookList, remove }) {
    const [setForm, setInputBook] = useState();
    
    function showEdit(book){
        setInputBook(book);
        setForm("edit");
    }

    function deleteBook(book){
        remove(book);
    }

    return (
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
    );
}

export default Table