const districtsReducer = (state=0, action) => {
    switch(action.type) {
        case 'DISTRICT_CHANGE' :
            return action.payload;
        default :
            return state;
    }
}

export default districtsReducer;