import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from './components/layout/LayoutPage';
import AdminPanel from './components/adminPanel/adminPanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LayoutPage} />
          <Route path="/admin-panel" component={AdminPanel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
