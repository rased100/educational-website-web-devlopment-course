import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contuctus from './components/Contuctus/Contuctus';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ServicesAll from './components/ServicesAll/ServicesAll';

function App() {
  return (
    <div className="App">

      {/*--------- React router ---------------*/}

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <ServicesAll></ServicesAll>
          </Route>
          <Route path="/contuctus">
            <Contuctus></Contuctus>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
