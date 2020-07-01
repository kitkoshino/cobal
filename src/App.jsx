import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Employees from './Pages/Employees';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <Home /> */}
        <Employees />
      </main>
      <Footer />
    </div>
  );
}

export default App;
