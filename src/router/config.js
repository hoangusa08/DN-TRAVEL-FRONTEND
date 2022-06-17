import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register"
import Home from "../pages/home/Home"
import Tour from "../pages/tour/tour";
import Error from "../pages/error/Error";
import Account from "../pages/Account/Account";
import TourDetail from "../pages/tourDetail/tourDetail";
import TourFuture from "../pages/Account/tourFuture/TourFuture"
import TourHistory from "../pages/Account/tourHistory/TourHistory"
import ChangePass from "../pages/Account/ChangePass/ChangePass"
import RateTour from "../pages/Account/rateTour/RateTour";
import TourWaiting from "../pages/Account/tourWaiting/TourWaiting";


export const routeConfig = [
  {
    path: "/account",
    isPrivate: true,
    exact: true,
    component: Account
  },
  {
    path: "/tourFuture",
    isPrivate: true,
    exact: true,
    component: TourFuture
  },
  {
    path: "/tourHistory",
    isPrivate: true,
    exact: true,
    component: TourHistory
  },
  {
    path: "/tourWaiting",
    isPrivate: true,
    exact: true,
    component: TourWaiting
  },
  {
    path: "/rateTour/:id",
    isPrivate: true,
    exact: true,
    component: RateTour,
  },
  {
    path: "/changePass",
    isPrivate: true,
    exact: true,
    component: ChangePass
  },
  {
    path: "/TourDetail/:id",
    isPrivate: false,
    exact: true,
    component: TourDetail
  },
  {
    path: "/Tour",
    isPrivate: false,
    exact: true,
    component: Tour
  },
  {
    path: "/home",
    isPrivate: false,
    exact: true,
    component: Home
  },
  {
    path: "/register",
    isPrivate: false,
    exact: true,
    component: Register
  },
  {
    path: "/login",
    isPrivate: false,
    exact: true,
    component: Login
  },
  { path: "*", component: Error }
];

const PrivateRoute = (privateProps) => {
  const { user } = useSelector((state) => state.user);

  if (user) return <privateProps.component {...privateProps} />;

  return <Redirect to="/home" />;
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        route.isPrivate ? (
          <PrivateRoute {...route} />
        ) : (
          <route.component {...props} />
        )
      }
    />
  );
};
