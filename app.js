require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
//const path = require("path");

const DBConnection = require("./Apps/config/db");
DBConnection();

require('colors');

require("./Apps/models/NotiModel");
const notiRoutes = require("./Apps/routes/NotiRoute");

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname, "Apps/public"))); 

const versionOne = (routeName) => `/api/v1/${routeName}`;

app.use(versionOne("notifications"), notiRoutes);

const PORT = process.env.PORT || 9001;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

