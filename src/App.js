import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from './components/layout/LayoutPage';
import AdminApp from './components/adminPanel/AdminApp';
import Contact from './components/layout/contact/Contact';
import SinglePropertyCard from './components/layout/propertiesForSale/singlePropertyCard/SinglePropertyCard';
import PropertiesPage from './components/layout/propertiesForSale/PropertiesPage';
import HistoryPage from './components/layout/homePage/about/HistoryPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import PDFpage from './components/layout/propertiesForSale/singlePropertyCard/PDFpage';

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
          <Route
            exact
            path="/nieruchomosc/:name/:id"
            component={SinglePropertyCard}
          />
          <Route exact path="/pdf" component={PDFpage} />
          <Route exact path="/contact" component={Contact} />
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
