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

// Get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT description FROM todo");

    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
