import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="orders"
            element={<Orders />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
