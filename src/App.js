import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from './components/layout/LayoutPage';
import AdminApp from './components/adminPanel/AdminApp';
import SinglePropertyCard from './components/layout/propertiesForSale/singlePropertyCard/SinglePropertyCard';
import PropertiesPage from './components/layout/propertiesForSale/PropertiesPage';
import HistoryPage from './components/layout/homePage/about/HistoryPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';

import NotFound from './components/NotFound';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(props) =>
            // props.location.pathname !== '/admin-panel' ? <Navbar /> : null
            props.location.pathname.indexOf('/admin-panel') === -1 ? (
              <Navbar />
            ) : null
          }
        />
        <Switch>
          <Route exact path="/" component={LayoutPage} />

          <Route path="/nieruchomosci" exact component={PropertiesPage} />
          <Route path="/archiwum" component={HistoryPage} />
          <Route path="/archiwum/:name" component={HistoryPage} />
          <Route
            exact
            path="/nieruchomosc/:name/:id"
            component={SinglePropertyCard}
          />
          <Route
            path="*"
            render={(props) =>
              props.location.pathname.indexOf('/admin-panel') === -1 ? (
                <NotFound />
              ) : null
            }
          />
          <Redirect to="/404" />
        </Switch>
        <Route
          path="/"
          render={(props) =>
            props.location.pathname.indexOf('/admin-panel') === -1 ? (
              <Footer />
            ) : null
          }
        />

        <Route path="/admin-panel" component={AdminApp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
