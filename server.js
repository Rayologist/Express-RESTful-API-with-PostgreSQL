const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require("./database");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
