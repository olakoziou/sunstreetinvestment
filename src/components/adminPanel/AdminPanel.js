import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../colors';

const DashboardDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(${colors.secondary5});
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AdminPanel({ userConfirmed }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) {
    return <Redirect to="/admin-panel/log-in" />;
  }
  return (
    <DashboardDiv>
      {userConfirmed !== 'Confirmed' ? (
        <div className="confirmation">
          <h3>Czekaj na zatwierdzenie</h3>
        </div>
      ) : (
        <div>
          <h3>Panel użytkownika</h3>
        </div>
      )}
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
    </DashboardDiv>
  );
}

export default AdminPanel;
