const queryInitialState = null;

export const query = (state = queryInitialState, action) => {
    switch (action.type) {
        case 'QUERY':
            return action;
        default:
            return state;
    }
}