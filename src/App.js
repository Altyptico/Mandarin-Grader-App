import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = 'Welcome to the Mandarin Grader Supplemental App';
  return (
    <div className="App">
      <Router>
      <h2>{title}</h2>
     <Navbar />
     <div className="content">
  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

      </Switch>
     </div>
     </Router>
    </div>
   
  );
}

export default App;
