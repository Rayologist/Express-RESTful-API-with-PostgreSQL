const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require("./database");