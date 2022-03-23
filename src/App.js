
import './App.css';
import Login from"./Login";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Display from"./Display";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route  path="/display" element={<Display/>}/>
        
      
      </Routes>
    </Router>
    
  );
}

export default App;
