import logo from './logo.svg';
import './App.css';
import {Message} from "./Message";


function App() {

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>

      <Message/>
    </div>
  );
}

export default App;
