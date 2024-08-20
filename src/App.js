
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './Components/ContextReducer.js';
import MyOrder from './Screens/MyOrder.js';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/creatuser' element={<Signup/>}/>
        <Route exact path='/myOrder' element={<MyOrder/>}/>
      </Routes>
   
    </Router>
    </CartProvider>
  );
}

export default App;
