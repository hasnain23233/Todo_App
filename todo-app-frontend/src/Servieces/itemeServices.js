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