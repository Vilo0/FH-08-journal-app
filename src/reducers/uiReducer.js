import { types } from '../types/types';

const initalState = {
    loading: false,
    msgError: null,
};

export const uiReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            };
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            };
        default:
            return state;
    }
};