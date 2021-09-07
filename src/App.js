import React from 'react';
import Home from './pages/home';
import Sadds from './components/sadds';
import Footer from './components/footer';
import { BrowserRouter,Switch,Route } from "react-router-dom";


function App() {
  return (
 <>
  <BrowserRouter>
  <Footer />
  <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allshops" component={Sadds} />
  </Switch>
  </BrowserRouter>
 </>
  );
}

export default App;
