// Save new todo
export const savingTodo = async (task, date) => {
    try {
        const response = await fetch('http://localhost:4200/api/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task, date }),
        });

        const data = await response.json();
        return mapDataFromDataBase(data); // ✅ return mapped object
    } catch (error) {
        console.error('Error saving todo:', error);
        throw error;
    }
};

// Get all todos
export const getTodos = async () => {
    try {
        const response = await fetch('http://localhost:4200/api/todo');
        const data = await response.json();
        return data.map(mapDataFromDataBase);
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

// Map DB data to frontend-friendly format
const mapDataFromDataBase = (data) => {
    return {
        id: data._id,        // ✅ always use "id"
        task: data.task,
        date: data.date,
        completed: data.completed, // ✅ match backend schema
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
    };
};

// Delete todo
export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:4200/api/todo/${id}`, { // ✅ pass id in URL
            method: 'DELETE',
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

// Update todo
export const updateTodo = async (id, updatedFields) => {
    try {
        const response = await fetch(`http://localhost:4200/api/todo/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFields),
        });

        const data = await response.json();
        return {
            id: data._id,
            task: data.task,
            date: data.date,
            completed: data.completed,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
};
