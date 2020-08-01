import {combineReducers} from "redux";
import auth from "./Auth";
import profile from "./Profile";
import order from "./Order";
import address from "./Address";

export default combineReducers({auth, profile, order, address});