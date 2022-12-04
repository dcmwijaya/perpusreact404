const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./db.js");

const app = express();
const port = 3000;
const routeAkses = require("./routes.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/manajemenbuku", routeAkses);

app.listen(port, () => {
    console.log("Server berhasil berjalan pada port: " + port);
});