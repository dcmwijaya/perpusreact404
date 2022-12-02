import React from 'react';

function ManageBookTable({ showEdit }) {
    function editData(){
        showEdit();
    }

    return (
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
                        <button type="button" className="btn btn-primary btn-sm m-1" onClick={()=>editData()}>
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
                        <button type="button" className="btn btn-primary btn-sm m-1" onClick={()=>editData()}>
                            <i className="fa-solid fa-pen-to-square me-1"></i>Update
                        </button>
                        <button type="button" className="btn btn-danger btn-sm m-1">
                            <i className="fa-solid fa-trash-can me-1"></i>Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ManageBookTable