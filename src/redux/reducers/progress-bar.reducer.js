const progressBarReducer = (_state = true, action) => {
    switch(action.type) {
        case 'HIDE' :
            return false;
        default :
            return true;
    }
}

export default progressBarReducer;