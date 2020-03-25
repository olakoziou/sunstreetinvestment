import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import HomePage from './homePage/HomePage';
import Conatct from './contact/Contact';
import SinglePropertyCard from './propertiesForSale/SinglePropertyCard';
import PropertiesPage from './propertiesForSale/PropertiesPage';
import HistoryPage from './homePage/about/HistoryPage';

function LayoutPage() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nieruchomosci" component={PropertiesPage} />
          <Route exact path="/nieruchomosci/archiwum" component={HistoryPage} />
          <Route
            exact
            path="/nieruchomosci/:name"
            component={SinglePropertyCard}
          />
          <Route exact path="/contact" component={Conatct} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default LayoutPage;
