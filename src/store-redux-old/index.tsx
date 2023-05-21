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

export const store = createStore(reducer);
