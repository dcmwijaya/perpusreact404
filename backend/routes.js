const akses = require("express").Router();
const BukuModel = require("./model.js");

akses.route("/").get((req, res) => {
    BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req, res) => {
    BukuModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res) => {
    BukuModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
    BukuModel.findByIdAndDelete(req.params.id)
    .then((deletedBook) => res.status(200).json(deletedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/search/:id").put((req, res) => {
    BukuModel.findById(req.params.id, req.body)
    .then((searchedBook) => res.status(200).json(searchedBook))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = akses;