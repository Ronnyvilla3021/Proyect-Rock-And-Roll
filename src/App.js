// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ACDC from './pages/acdc/ACDC';
import Albunes from './pages/acdc/albunes';  
import Ozzy from './pages/ozzy/OZZY';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* paginas ACDC */}
                    <Route path="/acdc" element={<ACDC />} />
                    <Route path="/albunes" element={<Albunes />} /> 


                    <Route path="/ozzy" element={<Ozzy />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;