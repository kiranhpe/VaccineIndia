const progressBarReducer = (state = true, action) => {
    switch(action.type) {
        case 'HIDE' :
            return !state;
        default :
            return state;
    }
}

export default progressBarReducer;