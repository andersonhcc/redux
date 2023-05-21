import {createStore} from 'redux';

const count_initial: number = 20;

function reducer(state = count_initial, action: {type: string}) {
  switch (action.type) {
    case 'counter/increment':
      return state + 1;
    case 'counter/decrement':
      return state - 1;
    case 'counter/morefive':
      return state + 5;
    default:
      return state;
  }
}

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'counter/increment': {
//       return {
//         ...state,
//         counter: {
//           value: state.counter.value + 1,
//         },
//       };
//     }
//     case 'counter/incrementAmount': {
//       return {
//         ...state,
//         counter: {
//           value: state.counter.value + action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// }

export const store = createStore(reducer);
