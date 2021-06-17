import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Route render={props => <Navbar {...props} />} /> */}
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
