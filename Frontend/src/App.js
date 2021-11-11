import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivatRoute";
import LoginForm from "./pages/Login/LoginForm";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import Dashboard from "./pages/Dashboard/dashboard";
import Module1 from "./pages/module1";
import Module2 from "./pages/module2";
import { useState } from "react";
import Module3 from "./pages/module3";
import Module4 from "./pages/module4";
import UpdateUser from "./pages/updateuser";
import Guidedpath from "./pages/guidedpath";
import Homepage from "./pages/homepage";
function App() {
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <div className="App">
        <div className="d-flex align-items-center flex-column">
          <Route exact path="/register">
            <RegistrationForm showError={updateErrorMessage} />
          </Route>
          <Route exact path="/login">
            <LoginForm showError={updateErrorMessage} />
          </Route>
          <AlertComponent
            errorMessage={errorMessage}
            hideError={updateErrorMessage}
          />
        </div>
      </div>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/module1" component={Module1} />
      <PrivateRoute exact path="/module2" component={Module2} />
      <PrivateRoute exact path="/module3" component={Module3} />
      <PrivateRoute exact path="/module4" component={Module4} />
      <PrivateRoute exact path="/profile" component={UpdateUser} />
      <PrivateRoute exact path="/guidedpath" component={Guidedpath} />
    </Router>
  );
}

export default App;
