const districtChange = ({district}) => {
    return {
        type:'DISTRICT_CHANGE',
        payload: district
    }
}

export default districtChange;