import Home from './Component/Home/home';
import Login from './Component/login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
return(
  <div className="App">
    <h1>TCROWN TODO LIST!</h1>
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LandingPage" element={<Home />} />
      
      </Routes>
      </Router>
  </div>
)
}
export default App;