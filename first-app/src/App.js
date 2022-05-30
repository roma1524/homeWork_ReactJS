import logo from './logo.svg';
import './App.css';
import {MessageList} from "./components";


function App() {

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>

      <MessageList/>
    </div>
  );
}

export default App;
