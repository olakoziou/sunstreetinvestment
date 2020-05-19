import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from './components/adminPanel/spinner/Spinner';
// import LayoutPage from './components/layout/LayoutPage';
// import AdminApp from './components/adminPanel/AdminApp';
// import SinglePropertyCard from './components/layout/propertiesForSale/singlePropertyCard/SinglePropertyCard';
// import PropertiesPage from './components/layout/propertiesForSale/PropertiesPage';
// import HistoryPage from './components/layout/homePage/about/HistoryPage';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';
// import PDFpage from './components/layout/propertiesForSale/singlePropertyCard/PDFpage';

const LayoutPage = lazy(() => import('./components/layout/LayoutPage'));
const AdminApp = lazy(() => import('./components/adminPanel/AdminApp'));
const SinglePropertyCard = lazy(() =>
  import(
    './components/layout/propertiesForSale/singlePropertyCard/SinglePropertyCard'
  )
);
const PropertiesPage = lazy(() =>
  import('./components/layout/propertiesForSale/PropertiesPage')
);
const HistoryPage = lazy(() =>
  import('./components/layout/homePage/about/HistoryPage')
);
const Navbar = lazy(() => import('./components/layout/LayoutPage'));
const Footer = lazy(() => import('./components/layout/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
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
            {/* <Route exact path="/oferta-pdf" component={PDFpage} /> */}
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
      </Suspense>
    </div>
  );
}

export default App;
