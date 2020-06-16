import React from 'react';
import { connect } from 'react-redux';
import { anotherName, addWish } from './Actions/myAction';

function App(props) {
  const myWish = props.myWish.map((item) => {
    return <h2>{item}</h2>;
  });
  return (
    <div>
      <h1>This is App Component</h1>
      <h2>Hello I am {props.myName}</h2>
      {myWish}
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        Channge It!
      </button>
      <button
        onClick={() => {
          props.addWish();
        }}
      >
        Channge wish!
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { myName: state.name, myWish: state.wish };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(anotherName());
    },
    addWish: () => {
      dispatch(addWish());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
