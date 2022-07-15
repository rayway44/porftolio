import React from "react";
import Main from '../src/Pages/Main'
import About from '../src/Pages/About'
import Modal from '../src/Pages/Components/Modal'

import {BrowserRouter as Router, Switch, Routes, Route, Link, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<Modal />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
