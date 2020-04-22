import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const dataReducer = (state = initialState.data,action) =>{
    switch (action.type) {
        case actionTypes.ADD_TABLE:
            return action.payload
        default:
          return  state;
    }
}

export default dataReducer;