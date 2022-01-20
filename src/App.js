import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/HomePage/Home/Home";
import Products from "./pages/Others/Products/Products";
import Book from "./pages/Others/Book/Book";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/book/:productId">
              <Book></Book>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
