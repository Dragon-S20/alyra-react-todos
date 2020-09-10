import React from "react"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <main>
        <Todos />
      </main>
    </div>
  )
}

export default App
