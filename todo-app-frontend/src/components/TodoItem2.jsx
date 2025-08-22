function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between border-b py-3">
        <div className="w-1/2 text-gray-800 font-medium">{todoName}</div>
        <div className="w-1/3 text-gray-600">{todoDate}</div>
        <div className="w-1/6 text-right">
          <button
            type="button"
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
