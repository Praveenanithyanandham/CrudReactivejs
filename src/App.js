import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import PageNotFound from './Pages/PageNotFound';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';


function App() {


  return (
  <div>
    <Router>
     
     
  
      <Switch>
      <Route path ="/"exact>
    <Header />
    <Form />
    <Footer />
    

    </Route>
         <Route path ="/home"  component={ Home } /> 
        <Route path = "/about"><Header /><About /></Route>
        <Route path ="/login"><Header/> <Login /> </Route>
        <Route path="*"  component={PageNotFound} />
      </Switch>
    </Router>
    </div>

      
    
     

     


  );
}
export default App;
