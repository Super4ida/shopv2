import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

