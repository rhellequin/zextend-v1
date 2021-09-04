
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Fabrications from './pages/Fabrications';
import Stocks from './pages/Stocks';
import Team from './pages/Team';
import Reports from './pages/Reports';
import Messages from './pages/Messages';
import Support from './pages/Support';




function App() {
  return (
    
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/articles'  component={Articles}/>
            <Route path='/fabrications'  component={Fabrications}/>
            <Route path='/stocks'  component={Stocks}/>
            <Route path='/reports'  component={Reports}/>
            <Route path='/team' component={Team} />
            <Route path='/support' component={Support} />
            <Route path='/messages' component={Messages} />
        </Switch>
      </Router> 
  
  );
}

export default App;
