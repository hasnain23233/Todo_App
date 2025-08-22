import React, { useState } from "react";
import { savingTodo } from "../Servieces/itemeServices";

function AddTodo({ setTodos }) {
  const [value, setvalue] = useState({
    task: "",
    date: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = await savingTodo(value.task, value.date);

    // Frontend state update (without reload)
    setTodos((prev) => [...prev, newTodo]);

    setvalue({ task: "", date: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-4 py-3"
      >
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={value.task}
            onChange={(e) => setvalue({ ...value, task: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-1/3">
          <input
            type="date"
            value={value.date}
            onChange={(e) => setvalue({ ...value, date: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-1/6 text-right">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
