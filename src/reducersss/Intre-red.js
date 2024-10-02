

const initialState = [
    {
        id: 1,
        todo: 'Get soul stone',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}

const newTodo = {
    id: 2,  // autoincremental
    todo: 'Get time stone',
    done: false
}

let todos = todoReducer();


const todoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, todoAction);

console.log("todos", todos);
