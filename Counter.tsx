//BASIC EXAMPLE

import React,{ useState } from 'react';

interface IProps{
    initialCount?: number,
    title: string,
}

interface IState{
    count: number,
    isActive: boolean,
    inputValue: string,
}

const Counter: React.FC<IProps> = ({initialCount = 0, title}) => {
    const [state, setState] = useState<IState>({
        count: initialCount,
        isActive: false,
        inputValue: ' ',

    })

    const increment = (): void => {
      setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    }
    const decrement = (): void => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count -1,
        }))
    }
     const toggleActive = (): void => {
    setState(prevState => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(prevState => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  };

    
    return(
        <>
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="card">
                        <h1>{title}</h1>
                        <p >count: {state.count}</p>
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>

                        <p>Status: {state.isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={toggleActive}>
        Toggle Status
      </button>

                        <input
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {state.inputValue}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Counter;