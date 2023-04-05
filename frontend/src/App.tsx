import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//import MovieData from './movies';
import Home from './pages/Home';
//import MovieData from './pages/Collection';
import MovieList from './pages/MovieList';

export const centerText = {
  textAlign: 'center' as const,
};

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={centerText}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              The Joel Hilton Movie Collection
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/collection">Movie Collection</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://baconsale.com/">
                    My Podcasts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
