import React from "react";
import { buyCake } from "../redux/Cake/cakeActions";
import { connect } from "react-redux";

function C({ numOfCakes, buyCake }) {
  return (
    <>
      <h1>No of Cakes - {numOfCakes}</h1>
      <button onClick={buyCake}>Buy Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(C);
