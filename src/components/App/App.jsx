import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FormatPage from '../FormatPage/FormatPage'
import DeckListPage from '../DeckListPage/DeckListPage';
import DecksPage from '../DecksPage/DecksPage';
import DeckManipulatePage from '../DeckManipulatePage/DeckManipulatePage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import CardDetailsPage from '../CardDetailsPage/CardDetailsPage'

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (


    <Router>
      <div >
        <Header />
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            <ProtectedRoute
              exact
              path="/details/:id"
            >
              <CardDetailsPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path='/results/:searchTerm'
            >
              <SearchResultsPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/results/:id/:searchTerm"
            >
              <SearchResultsPage />

            </ProtectedRoute>

            <ProtectedRoute
              exact
              path='/decks/:format'
            >
              <DecksPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/decklist/:id"
            >
              <DeckListPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path='/create/:format'
            >
              <DeckManipulatePage />
            </ProtectedRoute>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

            <ProtectedRoute
              exact
              path="/format"
            >
              <FormatPage />
            </ProtectedRoute>


            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/format" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/format" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/format" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
          <Nav />
        </div>
      </div>
    </Router>

  );
}

export default App;
