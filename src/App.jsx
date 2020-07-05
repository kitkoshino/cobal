import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Toolbar from './Components/Toolbar';
import Employees from './Pages/Employees';
import Employee from './Pages/Employees/Employee';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/employees">
              <Employees />
            </Route>
            <Route exact path="/employee">
              <Employee />
            </Route>
            <Route exact path="/employee/:id" render={(props) => (<Employee {...props} />)} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
