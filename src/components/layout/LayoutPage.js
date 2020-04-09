import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Conatct from './contact/Contact';
import SinglePropertyCard from './propertiesForSale/singlePropertyCard/SinglePropertyCard';
import PropertiesPage from './propertiesForSale/PropertiesPage';
import HistoryPage from './homePage/about/HistoryPage';

function LayoutPage() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/nieruchomosc/:name/:id"
            component={SinglePropertyCard}
          />
          <Route exact path="/nieruchomosci" component={PropertiesPage} />
          <Route exact path="/archiwum" component={HistoryPage} />
          <Route exact path="/contact" component={Conatct} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default LayoutPage;
