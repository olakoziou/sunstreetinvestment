import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import Navbar from './navigation/Navbar';
import LogInPanel from './logging/LogInPanel';
import UserAccount from './account/UserAccount';
import AddedProperties from './added/AddedProperties';
import AddNewProperty from './addNew/AddNewProperty';
import DeletedProperties from './deleted/DeletedProperties';
import Guide from './guide/Guide';
import Users from './users/Users';
import styled from 'styled-components';
import { colors } from '../../colors';
import Container from './Container';
import { useSelector, useDispatch } from 'react-redux';
import Archives from './added/Archives';
import EditProperty from './edit/EditProperty';
import EditUser from './account/EditUser';
import ForgotPassword from './logging/ForgotPassword';
import { useFirebaseConnect } from 'react-redux-firebase';
import { mediaQueries } from '../../mixins';
import { useEffect } from 'react';
import { useState } from 'react';
import { LogOut } from '../../store/actions/authActions';

const AdminAppDiv = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background: rgba(${colors.primary});
  background: linear-gradient(
    113deg,
    rgba(${colors.primary}) 0%,
    rgba(${colors.primary5}) 100%
  );
  border-radius: 2px;

  @media ${mediaQueries('tab-port')} {
    padding: 5rem;
  }

  & .wrapper {
    display: flex;
    flex-direction: column;

    @media ${mediaQueries('tab-port')} {
      flex-direction: row;
    }

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

  & .logout {
    margin: 2rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    display: none;

    /* & .postpone {
      border: 1px solid #fff;
      cursor: pointer;
      display: block;
      padding: 0.5rem;
      margin: 0 1rem;
    } */
  }
`;

function AdminApp() {
  useFirebaseConnect();
  const userConfirmed = useSelector((state) => state.firebase.profile.status);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();
  // const [state, setState] = useState({
  //   counter: 0,
  //   remainingTime: 120,
  // });

  // let interval;
  // let interval2;
  // const logOut = document.querySelector('.logout');

  // const handleMouseMove = (e) => {
  //   setState((state) => ({ ...state, counter: 0 }));
  //   clearInterval(interval);
  // };

  // useEffect(() => {
  //   interval =
  //     user &&
  //     setInterval(() => {
  //       setState((state) => ({ ...state, counter: state.counter + 1 }));
  //     }, 1000);

  //   if (state.counter === 600) {
  //     logOut.style.display = 'flex';
  //     interval2 = setInterval(() => {
  //       setState((state) => ({
  //         counter: 0,
  //         remainingTime: state.remainingTime - 1,
  //       }));
  //     }, 1000);
  //     // clearInterval(interval);
  //   } else if (state.remainingTime < 1) {
  //     setState((state) => ({
  //       counter: 0,
  //       remainingTime: 0,
  //     }));
  //     clearInterval(interval2);
  //     logOut.style.display = 'none';
  //     history.push('/admin-panel/log-in');
  //     dispatch(LogOut());
  //   } else {
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [state.remainingTime, state.counter, user]);

  useEffect(() => {
    window.onbeforeunload = () => {
      dispatch(LogOut());
    };
  }, []);

  return (
    <AdminAppDiv className="admin-panel">
      {/* <div className="logout red">
        <span>Zostaniesz wylogowany za {state.remainingTime} sekund.</span>
      </div> */}
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
                      <Route
                        exact
                        path="/admin-panel/guide"
                        component={Guide}
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
