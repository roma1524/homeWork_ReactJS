import logo from './logo.svg';
import './App.css';
import {Message} from "./Message";

function App(props) {
  let title1 = props.MyProps;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message title={title1}/>
      </header>
    </div>
  );
}

export default App;
