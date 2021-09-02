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

// Create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // WHERE
    const { description } = req.body; // SET

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json({ msg: "Todo Updated" });
  } catch (error) {
    console.error(error.message);
  }
});

// Delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id,
      ]);
      res.json({msg: "Todo was deleted!"})
    } catch (error) {
      console.error(error.message);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
