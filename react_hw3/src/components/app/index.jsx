import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Counter from "../counter";
import { createStore } from "redux";


const actionTypes = {
INCREMENT: 'INCREMENT',
DECREMENT: 'DECREMENT'
};



const counterReducer = function (state = 0, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload;

      case actionTypes.DECREMENT:
      return state - action.payload;
      default: return state;
  }
};

const actions = {
  increment(val) {
    return {
      type: actionTypes.INCREMENT,
      payload: val
    }
  },
  decrement(val) {
    return {
      type: actionTypes.DECREMENT,
      payload: val
    }
  }
};

const store = createStore(counterReducer);

const counterValue = document.querySelector(".js-value");
const btnAdd = counter.querySelector(".js-add");
const btnSub = counter.querySelector(".js-sub");

btnAdd.addEventListener("click", () => {
store.dispatch(actions.increment(10));
});
btnSub.addEventListener("click", () => {
store.dispatch(actions.dicrement(10));
});

store.subscribe(updateCounterUI)

function updateCounterUI(){
  const value = store.getState;
  counterValue.textContent = value;
}


class App extends Component {

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}


export default hot(module)(App);
