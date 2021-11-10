# Private Routes

When developing a React application with authentication, we might require public and private routes.

## Public Routes

Public routes are any routes that can be accessed before login into the application such as login, sign up, forgot password.

Create `src/routes/PublicRoute.jsx` to handle public route conditions.

```javascript
import {Route, Redirect} from 'react-router-dom'

function PublicRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) => (
          if(!isAuthenticated){
            children
          } else {
            <Redirect to {{pathname: '/home', state: {from: location}}}/>
          }

        )
      }
    />
  )
};

export default PublicRoute

```

If the user is authenticated, they will be redirected to the Home screen and can only access the public routes if they are not authenticated.

## Private Routes

Private routes are similar to the public route, the only change is that redirect URL and authenticate condition.

If the user is not authenticated they will be redirected to the login page and the user can only access the authenticated routes if they are authenticated

Create `src/routes/PrivateRoute.jsx`

```javascript
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) => (
          if(isAuthenticated){
            children
          } else {
            <Redirect to={{pathname: '/login', state: {from: location}}}/>
          }
        )
      }
    />
  )
}

export default PrivateRoute
```

## Protected Routes

The protected route component is used to map all the authenticated routes as below.

```javascript
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import { Loader } from "components";

const ProtectedRoutes = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path} exact={exact}>
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;
```

## Routes

The authenticated routes are defined as below in `src/routes/index.jsx`

```javascript

import {lazy} from 'react'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const routes = [
  {
    path: 'home',
    component: lazy(()=> import('components/Home'))
    exact: true
  },
  {
    path: 'users',
    component: lazy(()=> import('components/Users'))
    exact: true
  },
]

export {routes, PublicRoutes, PrivateRoutes}
```

## Integrating Routes

All of the above is combined in `src/App.jsx`

```javascript
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Loader } from "components";
import { routes, PublicRoutes, PrivateRoutes } from "./routes";

const LoginPage = lazy(() => import("pages/LoginPage"));
const Register = lazy(() => import("pages/Register"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));
const NotFound = lazy(() => import("pages/NotFound"));

const App = () => {
  const isAuthenticated = getToken(); // import from authentication system.

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" isAuthenticated={isAuthenticated}>
            <Register />
          </PublicRoute>
          <PublicRoute
            path="/forgot-password"
            isAuthenticated={isAuthenticated}
          >
            <ForgotPassword />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
```
