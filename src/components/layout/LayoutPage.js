import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SinglePropertyCard from './propertiesForSale/singlePropertyCard/SinglePropertyCard';
import PropertiesPage from './propertiesForSale/PropertiesPage';
import HistoryPage from './homePage/about/HistoryPage';
import PDFpage from './propertiesForSale/singlePropertyCard/PDFpage';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

function LayoutPage() {
  useFirestoreConnect();
  const state = useSelector((state) => state);
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
          <Route exact path="/oferta-pdf" component={PDFpage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default LayoutPage;
