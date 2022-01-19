import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/HomePage/Home/Home';
import Products from './pages/Others/Products/Products';
import Book from './pages/Others/Book/Book';


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route> 

          <Route path='/home'>
            <Home></Home>
          </Route> 

          <Route path='/about'>
            <Home></Home>
          </Route> 
          <Route path='/products'>
            <Products></Products>
          </Route> 
          <Route path='/book/:productId'>
            <Book></Book>
          </Route> 
           
        </Switch>  
      </Router> 
    </>
  );
}

export default App;
