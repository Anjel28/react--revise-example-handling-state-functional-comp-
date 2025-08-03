//COMPLEX USER STATE


import React, { useReducer } from 'react';

interface IProps {
  initialCount?: number;
  title: string;
}

interface IState {
  count: number;
  isActive: boolean;
  inputValue: string;
}

// Define action types with string literals
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'toggleActive' }
  | { type: 'updateInput'; payload: string };  // 'updateInput' is a literal type

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'toggleActive':
      return { ...state, isActive: !state.isActive };
    case 'updateInput':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const Reducer: React.FC<IProps> = ({ initialCount = 0, title }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    isActive: false,
    inputValue: '',
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      
      <p>Status: {state.isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={() => dispatch({ type: 'toggleActive' })}>
        Toggle Status
      </button>
      
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ 
          type: 'updateInput',  // Must match the literal type exactly
          payload: e.target.value 
        })}
        placeholder="Type something..."
      />
      <p>You typed: {state.inputValue}</p>
    </div>
  );
};

export default Reducer;