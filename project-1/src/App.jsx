import React, { useState } from 'react';
import './App.css'; // Import custom CSS file

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0)
    }
    return (
        <div className="container h-screen flex justify-center items-center bg-gray-100">
            <div className="box">
                <h1 className="heading">Counter</h1>
                <div className="flex justify-center items-center space-x-4">
                <button className="btn" onClick={increment}>
                    Add count
                    </button>
                    <div className="counter">{count}</div>
                    <button className="btn" onClick={decrement}>
                        Sub count
                    </button>
                    <button className="reset" onClick={reset}>Reset button</button>
                   
                </div>
            </div>
        </div>
    );
}

export default App;
