import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../Servieces/itemeServices";

function TodoItem1({ todos, setTodos }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState({ task: "", date: "" });

  const handledeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditValue({ task: todo.task, date: todo.date });
  };

  const handleUpdate = async (id) => {
    try {
      const updated = await updateTodo(id, editValue);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updated : todo))
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      {todos.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          {editingId === item.id ? (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={editValue.task}
                onChange={(e) => setEditValue({ ...editValue, task: e.target.value })}
                className="border px-3 py-2 rounded-lg"
              />
              <input
                type="date"
                value={editValue.date}
                onChange={(e) => setEditValue({ ...editValue, date: e.target.value })}
                className="border px-3 py-2 rounded-lg"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{item.task}</h2>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${item.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {item.completed ? "Completed" : "Pending"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <p>
                  <span className="font-medium text-gray-700">Due Date:</span>{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Created:</span>{" "}
                  {new Date(item.createdAt).toLocaleString()}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Updated:</span>{" "}
                  {new Date(item.updatedAt).toLocaleString()}
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handledeleteTodo(item.id)}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoItem1;
