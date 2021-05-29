import { combineReducers } from "redux";
import progressBarReducer from "./progress-bar.reducer";


const allReducers = combineReducers({
    progressBar: progressBarReducer
})

export default allReducers;