import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Employees from './Pages/Employees';
import Employee from './Pages/Employees/Employee';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation
} from 'react-router-dom';
import Media from 'react-media';
import SideBar from './Components/SideBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Media queries={{
        medium: '(max-width: 1024px)'
      }}>
        {matches => (
          matches.medium ? (
            <SideBar width={300} height={'100%'} />
          ) : (<Navbar />)
        )}
      </Media>
        {/* <Navbar /> */}
        {/* <SideBar width={300} height={'100%'}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>Absences</p>
          <Link to="/employees">
            <p>Employees</p>
          </Link>
        </SideBar> */}
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
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
