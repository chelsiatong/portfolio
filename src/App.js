import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Homepage from './pages/homepage/homepage';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contacts/contacts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation />
        <Route to="/" exact component={Homepage} />
        <Route to="/about" component={About} />
        <Route to="/projects" component={Projects} />
        <Route to="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
