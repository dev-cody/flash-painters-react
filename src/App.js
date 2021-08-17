import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import MarketPage from './components/pages/MarketPage';
import SplitsPage from './components/pages/SplitsPage';
import ContactPage from './components/pages/ContactPage';
import Login from './components/layout/Login';
import Signup from './components/layout/Signup';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' render={ () => <HomePage />} />
          <Route exact path='/market' render={ () => <MarketPage />} />
          <Route exact path='/splits' render={ () => <SplitsPage />} />
          <Route exact path='/contact' render={ () => <ContactPage />} />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
