import "./App.css";
import Toast from "./components/Toast";
import { routeConfig, RouteWithSubRoutes } from "./router/config";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
