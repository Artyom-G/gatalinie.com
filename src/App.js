import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route index path='/' element={<Home />} />
                </Routes>
                <div className="App__overlay"></div>
            </div>
        </Router>
    );
}

export default App;
