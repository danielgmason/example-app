import logo from './logo.svg';
import './App.css';

function App() {
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
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button>Connect</button>
          <button>Take Action</button>
        </div>
      </header>
    </div>
  );
}

export default App;