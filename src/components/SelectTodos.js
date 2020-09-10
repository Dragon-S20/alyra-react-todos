import React from "react"

const SelectTodos = (props) => {
  const { filter, setFilter } = props
  const handleSelectChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        value={filter}
        className="form-select"
        id="select"
        onChange={handleSelectChange}
      >
        <option value="all">Toutes</option>
        {/* eslint-disable-next-line  */}
        <option value="completed">Terminées 💪</option>
        {/* eslint-disable-next-line  */}
        <option value="notcompleted">Pas encore Terminées 🌪</option>
      </select>
    </div>
  )
}

export default SelectTodos
