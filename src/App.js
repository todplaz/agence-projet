import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Etudes from './components/Etudes';
import './styles/theme.scss';
import { Button } from './components/button/button';






function App() {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark');
    }
    else{
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (   
    <div className={`App ${theme}`}>
      <Router>
      <Button onClick={toggleTheme} label="On/Off" />
        <Navbar />
        <main>
          <Switch>
            <Route path="/Works/:clientname">
              <Etudes />
            </Route>
            <Route path='/'exact>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Works'>
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

