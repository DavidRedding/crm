import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';

const App = () => {
  const { user, authIsReady } = useAuthContext();
  // prettier-ignore
  return (
    <div className="flex font-poppins">
      {authIsReady && (
        <Router>
          {user && <Sidebar user={user}/>}
          <div className="min-h-screen bg-var-bg px-14 grow">
            <Navbar user={user} />
            <Switch>
              <Route exact path="/">{user ? <Dashboard /> : <Redirect to="/login" />} </Route>
              <Route path="/create">{user ? <Create /> : <Redirect to="/login" />}</Route>
              <Route path="/project/:id">{user ? <Project /> : <Redirect to="/login" />}</Route>
              <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
              <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>
            </Switch>
          </div>
          {user && <OnlineUsers/>}
        </Router>
      )}
    </div>
  );
};

export default App;
