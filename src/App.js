import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from './components/layout/LayoutPage';
import AdminPanel from './components/adminPanel/adminPanel';
import Conatct from './components/layout/contact/Contact';
import SinglePropertyCard from './components/layout/propertiesForSale/singlePropertyCard/SinglePropertyCard';
import PropertiesPage from './components/layout/propertiesForSale/PropertiesPage';
import HistoryPage from './components/layout/homePage/about/HistoryPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LayoutPage} />
          <Route path="/admin-panel" component={AdminPanel} />
          <Route path="/nieruchomosci" component={PropertiesPage} />
          <Route path="/archiwum" component={HistoryPage} />
          <Route
            exact
            path="/nieruchomosc/:name/:id"
            component={SinglePropertyCard}
          />
          <Route exact path="/contact" component={Conatct} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
