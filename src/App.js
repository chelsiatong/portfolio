import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Homepage from './pages/homepage/homepage';
import About from './components/about/about';
import ProjectsSection from './components/projects/projectsSection';
import Contact from './components/contacts/contacts';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
