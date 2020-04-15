import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import Navbar from './navigation/Navbar';
import LogInPanel from './logging/LogInPanel';
import UserAccount from './account/UserAccount';
import AddedProperties from './added/AddedProperties';
import AddNewProperty from './addNew/AddNewProperty';
import DeletedProperties from './deleted/DeletedProperties';
import Users from './users/Users';
import styled from 'styled-components';
import { colors } from '../../colors';
import SingleProperty from './addNew/SingleProperty';
import Container from './Container';
import { useSelector } from 'react-redux';
import Archives from './added/Archives';
import EditProperty from './edit/EditProperty';
import EditUser from './account/EditUser';
import ForgotPassword from './logging/ForgotPassword';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';

const AdminAppDiv = styled.div`
  min-height: 100vh;
  padding: 10rem 5rem;
  background: rgb(32, 64, 81);
  background: linear-gradient(
    113deg,
    rgba(32, 64, 81, 1) 0%,
    rgba(77, 145, 180, 1) 100%
  );
  border-radius: 2px;

  & .wrapper {
    display: flex;

    & .dashboard {
      width: 100%;
      min-height: 10rem;
      background-color: rgba(${colors.secondary5});

      padding: 5rem 0;
      & > div {
        width: 90%;
        margin: 0 auto;

        & h5 {
          text-align: center;
          margin-bottom: 5rem;
        }
      }

      & .confirmation {
        padding: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

function AdminApp() {
  const globalState = useSelector((state) => state);
  useFirebaseConnect();
  const userConfirmed = useSelector((state) => state.firebase.profile.status);
  // console.log(userConfirmed);
  return (
    <AdminAppDiv className="admin-panel">
      <div className="wrapper">
        <BrowserRouter>
          <Route
            path="/"
            render={(props) => {
              if (
                props.location.pathname.indexOf('/admin-panel/log-in') === -1 &&
                props.location.pathname.indexOf(
                  '/admin-panel/forgot-password'
                ) === -1
              ) {
                return <Navbar />;
              } else {
                return null;
              }
            }}
          />
          <Switch>
            <Route exact path="/admin-panel/log-in" component={LogInPanel} />
            <Route
              exact
              path="/admin-panel/forgot-password"
              component={ForgotPassword}
            />
            <Container>
              <div className="dashboard">
                <Route
                  exact
                  path="/admin-panel"
                  render={() => <AdminPanel userConfirmed={userConfirmed} />}
                />

                <>
                  {userConfirmed === 'Confirmed' && (
                    <>
                      <Route
                        exact
                        path="/admin-panel/account"
                        component={UserAccount}
                      />
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
                        path="/admin-panel/archives"
                        component={Archives}
                      />

                      <Route
                        exact
                        path="/admin-panel/edit-property"
                        component={EditProperty}
                      />
                      <Route
                        exact
                        path="/admin-panel/edit-user"
                        component={EditUser}
                      />
                      <Route
                        exact
                        path="/admin-panel/users"
                        component={Users}
                      />
                    </>
                  )}
                </>
              </div>
            </Container>
          </Switch>
        </BrowserRouter>
      </div>
    </AdminAppDiv>
  );
}

export default AdminApp;
