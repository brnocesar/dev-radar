import React, {useState } from 'react';
import './App.css';

// JSX: Funcionalidade que permite escrever HTML (sintaxe de XML) dentro do JavaScript

import Header from './Header';

function App() {

    const [counter, setCounter] = useState(0);

    function clicador() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <Header title={`Contador: ${counter}`} />
            
            <h1>{counter}</h1>

            <button type="button" onClick={clicador}>Aumentar</button>
            <button type="button" onClick={() => { alert('oi')}}>oi</button>
        </div>
    );
}

export default App;
