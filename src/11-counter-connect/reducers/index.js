import { combineReducers } from "redux";
import counter from "./counter";

/**
 * 雖然本例中只有一個reducer，但還是使用了`combineReducers`來進行合併，便於後期的拓展。
 * 在進行合併後，計數器的數值將被轉移到`state.counter`中。
 */

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
