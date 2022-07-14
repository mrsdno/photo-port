// this app.js file is the center of the application
// root or "wrapper" component that houses all other components
// must either change this or add a component to make a change to the page

import React from "react";
import './App.css';
import About from './components/About';
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
