import { createStore } from 'redux';

const store = createStore(reducer);

const state = store.getState();

store.dispatch(addTodo('hello'));



const ADD_TODO = '添加 TODO';
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
const action = addTodo('learn redux');


const InitialState = {};
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state + action.payload;
        default:
            return state;
    }
}
const state2 = reducer(1, {
    type: addTodo,
    payload: 2
})