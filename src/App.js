import './App.css';
import Home from "./views/home";
import Order from "./views/order";
import Basket from "./views/basket";
import MainLogo from "./utils/kaffet-logo.PNG";
import { Route, Routes, Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
  <section class="hero is-warning is-small">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <figure class="image is-square is-64x64">
             <img src={ MainLogo }alt="Logo" style={{maxWidth: 400 + "px", maxHeight: 400 + "px"}}/>
            </figure>
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <Link to="/" class="navbar-item">Home</Link>
            <Link to="/order" class="navbar-item">Order</Link>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <Link to="/basket">Basket</Link>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
   
  </div>
  <Outlet /> 
  </section>
  
  
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route 
            path="/order" 
            element={<Order />}
        />
        <Route
            path="/basket"
            element={<Basket />}
        />
        </Route>
    </Routes>
  );
}



export default App;
