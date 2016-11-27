const searchInitialState = null;

export const search = (state = searchInitialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return action;
        default:
            return state;
    }
}