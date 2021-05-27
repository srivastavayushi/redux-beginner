import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from "./reducers/index"
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();

// // STORE - GLOBALISED STATE

// // ACTION
// const increment=()=>{
//   return {
//     type : 'INCREMENT'
//   }
// }
// const decrement=()=>{
//   return {
//     type : 'DECREMENT'
//   }
// }
// // REDUCER 

// const counter =(state =0, action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state +1;
//     case 'DECREMENT':
//       return state -1;
//   }
// }

// let store = createStore(counter);

// // DISPLAY IT INTO THE CONSOLE
// store.subscribe(()=>console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
