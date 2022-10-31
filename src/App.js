import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Waiting for message...');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(text => setMsg(text))
      .catch(err => setMsg(`Error: ${err}`));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{msg}</div>
      </header>
    </div>
  );
}

export default App;
