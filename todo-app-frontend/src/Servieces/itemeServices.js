export const savingTodo = async (task, date) => {
    try {
        const response = await fetch('http://localhost:4200/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task, date }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error saving todo:', error);
        throw error;
    }
}

export const getTodos = async () => {
    try {
        const response = await fetch('http://localhost:4200/api/todo', {

        });

        const data = await response.json();
        return data.map(mapDataFromDataBase);
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

const mapDataFromDataBase = (data) => {
    return {
        id: data._id,
        task: data.task,
        date: data.date,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
    }
}