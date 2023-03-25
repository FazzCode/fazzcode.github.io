import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="holder">
          <div className="section" id="Ruby">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div className="section" id="Title">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Old School RL Leaderboard
            </p>
          </div>
          <div className="section" id="Emerald">
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
