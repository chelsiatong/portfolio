import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Homepage from './pages/homepage/homepage';
import About from './components/about/about';
import ProjectsSection from './components/projects/projectsSection';
import Contact from './components/contacts/contacts';
import ProjectsCheckIt from './components/projects/checkit/projects-checkit';
import ProjectsGoogleMoods from './components/projects/googlemoods/projects-googleMoods';
import ProjectsInStock from './components/projects/instock/projects-inStock';
import Etsy from './components/projects/etsy/etsy';
import Connector from './components/projects/connector/connector';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/checkit" component={ProjectsCheckIt} />
        <Route path="/googlemoods" component={ProjectsGoogleMoods} />
        <Route path="/inStock" component={ProjectsInStock} />
        <Route path="/etsy" component={Etsy} />
        <Route path="/connector" component={Connector} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
