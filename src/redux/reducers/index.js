import { combineReducers } from "redux";
import districtsReducer from "./districts.reducer";
import progressBarReducer from "./progress-bar.reducer";
import statesReducer from "./states.reducer";


const allReducers = combineReducers({
    progressBar: progressBarReducer,
    states: statesReducer,
    districts: districtsReducer
})

export default allReducers;