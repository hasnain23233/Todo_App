function AddTodo() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="flex items-center justify-between gap-4 py-3">
        {/* Todo input */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date input */}
        <div className="w-1/3">
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <div className="w-1/6 text-right">
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
