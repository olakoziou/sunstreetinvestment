import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../colors';
import { BrowserRouter } from 'react-router-dom';
import UserAccount from './account/UserAccount';
import AddedProperties from './added/AddedProperties';
import AddNewProperty from './addNew/AddNewProperty';
import DeletedProperties from './deleted/DeletedProperties';
import Users from './users/Users';
import Archives from './added/Archives';
import SingleProperty from './addNew/SingleProperty';
import EditProperty from './edit/EditProperty';
import EditUser from './account/EditUser';

const DashboardDiv = styled.div`
  width: 100%;
  min-height: 10rem;
  background-color: rgba(${colors.secondary5});
`;

function AdminPanel() {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) {
    return <Redirect to="/admin-panel/log-in" />;
  }

  return (
    <DashboardDiv className="dashboard">
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin-panel/account" component={UserAccount} />
          <Route
            exact
            path="/admin-panel/added-properties"
            component={AddedProperties}
          />
          <Route
            exact
            path="/admin-panel/add-new-property"
            component={AddNewProperty}
          />
          <Route
            exact
            path="/admin-panel/deleted-properties"
            component={DeletedProperties}
          />
          <Route
            exact
            path="/admin-panel/edit-property"
            component={EditProperty}
          />
          <Route exact path="/admin-panel/archives" component={Archives} />
          <Route exact path="/admin-panel/edit-user" component={EditUser} />
          <Route exact path="/admin-panel/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </DashboardDiv>
  );
}

export default AdminPanel;
