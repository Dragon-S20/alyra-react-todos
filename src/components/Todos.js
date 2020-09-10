import React, { useState } from "react"
import TodosList from "./TodosList"
import AddTodoForm from "./AddTodoForm"
import SelectTodos from "./SelectTodos"
import { v4 as uuidv4 } from "uuid"

const initialTodos = [
  {
    text: "Faires des courses",
    isCompleted: true,
    id: "1b688c51-e990-4ce3-95a5-9018cf81d23d",
  },
  {
    text: "Réviser ES6 classes",
    isCompleted: false,
    id: "efc6331d-7ca2-49a6-b014-378b8280b33d",
  },
  {
    text: "Aroser les plantes",
    isCompleted: false,
    id: "9e60d353-cd72-40bb-97e6-5841e51635c0",
  },
]

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [filter, setFilter] = useState("all")

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el.id !== task.id))
  }

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        if (el.id === task.id) {
          el.isCompleted = !el.isCompleted
        }
        return el
      })
    )
  }

  const completedCount = todos.filter((el) => el.isCompleted).length

  const displayedTodos = todos.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted
    }
    if (filter === "notcompleted") {
      return !el.isCompleted
    }
    return true
  })
  return (
    <main>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList
        todos={displayedTodos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
      <AddTodoForm addTodo={addTodo} setFilter={setFilter} />
    </main>
  )
}

export default Todos
