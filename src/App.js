import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
return (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);
 
}

export default App;
