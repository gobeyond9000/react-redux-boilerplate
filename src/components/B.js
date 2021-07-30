import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Cake/cakeActions";
import C from "./C";

function B() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>B Component cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake from B shop</button>
      <C />
    </>
  );
}

export default B;
