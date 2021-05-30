const statesReducer = (state=0, action) => {
    switch(action.type) {
        case 'STATE_CHANGE' :
            return action.payload;
        default :
            return state;
    }
}

export default statesReducer;