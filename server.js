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

// Get a todo

app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await pool.query(
      "SELECT description FROM todo WHERE todo_id = $1",
      [id]
    );
    if (!todo.rows.length) {
      return res.status(400).json({
        msg: `ID: ${id} Not Found`,
      });
    }
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
