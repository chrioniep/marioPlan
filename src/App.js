import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import DashboardRouter from './components/dashboard/Dashboard';
import ProjectDetailRouter from './components/projects/ProjectsDetail';
import SignInRouter from './components/auth/SignIn';
import SignUpRouter from './components/auth/SignUp';
import CreateProjectRouter from './components/projects/CreateProject'
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/project/:id" component={ProjectDetailRouter}/> 
          <Route path="/signin" component={SignInRouter}/>
          <Route path="/signup" component={SignUpRouter}/>
          <Route path="/create" component={CreateProjectRouter}/>
          <Route exact path="/" component={DashboardRouter}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
