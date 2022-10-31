import store from "./Store"
import Scalculator from "./Reducers";
import { useDispatch, useSelector } from "react-redux";
import { cube, square } from "./Actions";
import { useState } from "react";
const App=()=>{
  store.subscribe(()=>{console.log(store.getState())});
  let init=useSelector((state)=>state.Scalculator);
  let dispatch=useDispatch();

  return(<>
  <h1>{init} App component is runing</h1>
  <button onClick={()=>{
    dispatch(square())
  }}>Square</button>
  <button onClick={()=>{
    dispatch(cube())
  }}>Cube</button>
  <input type="number" value={init} />
  </>
  )
}
export default App;