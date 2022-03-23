import logo from './logo.svg';
import './App.css';
import axios from'axios';

function App() {
  const clickButton =(username, password)=>{
    const loginDetails = {
      email: username,
      password: password
    }
    axios.post('https://reqres.in/api/login',loginDetails )
    .then(function (response) {
      console.log(response);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>SAMPLE app</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>clickButton("eve.holt@reqres.in","dsada")}>CLick Post</button>
      </header>
    </div>
  );
}

export default App;
