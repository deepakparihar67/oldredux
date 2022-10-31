import { createStore } from "redux";
import { rootreducer } from "./Rootreducer";
let store=createStore(rootreducer);
export default store;