const statesChange = ({state}) => {
    return {
        type:'STATE_CHANGE',
        payload: state
    }
}

export default statesChange;