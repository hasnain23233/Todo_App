import React, { useEffect, useState } from "react";
import { getTodos } from "../Servieces/itemeServices";

function TodoItem1() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      {todos.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          {/* Title + Status */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{item.task}</h2>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${item.complete
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {item.complete ? "Completed" : "Pending"}
            </span>
          </div>

          {/* Dates */}
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

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
              Edit
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>

  );
}

export default TodoItem1;
