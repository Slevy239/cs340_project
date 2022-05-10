const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const cs340_project_server = express();

cs340_project_server.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
    return 0;
});
