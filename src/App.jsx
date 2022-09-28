import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => (
  <div className="flex font-poppins">
    <Router>
      <Sidebar />
      <div className="bg-var-bg px-14 grow">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
