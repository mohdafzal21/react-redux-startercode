import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// First Store
// const counter = (state = 'hello') => ({ welcome: state });
// const store = createStore(counter);
// console.log(store.getState());

// First Reducer & Actions
// const counter = (state = 'Hello World', action) => {
//   switch (action.type) {
//   case 'HI':
//     return 'Hi Scott';
//   case 'HELLO':
//     return 'Hello, how are you?';
//   default:
//     return 'Hello world';
//   }
// };
// const store = createStore(counter);
// store.dispatch({
//   type: 'HELLO',
// });
// console.log(store.getState());

// Second Reducer & Actions
// const counter = (state = { greeting: 'hi', otherState: 'some stuff' }, action) => {
//   switch (action.type) {
//   case 'HI':
//     return { ...state, greeting: `Hi, ${action.name}` };
//   case 'HELLO':
//     return { ...state, greeting: `Hello ${action.name}, how are you?'` };
//   default:
//     return { ...state, greeting: 'Hello world' };
//   }
// };
// const store = createStore(counter);
// store.dispatch({
//   type: 'HELLO',
//   name: 'Scott',
// });
// console.log(store.getState());
