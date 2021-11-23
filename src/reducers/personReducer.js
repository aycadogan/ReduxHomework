import * as actionTypes from "../actions/personAction"

const personReducer = (state,action) => {

    let newState;

    switch(action.type){
        case actionTypes.addPerson:
            return(newState = state + action.payload)

        case actionTypes.deletePerson:
            return(newState = state - action.payload)

        default:
            return state;
    }
}

export default personReducer