    import React from 'react';
    import './App.css';
    import Header from './Components/Header/Header';
    import Shop from './Components/Shop/Shop';
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
    import Order from './Components/Order/Order';
    import Manage from './Components/Manage/Manage';
    import PageNotFound from './Components/PageNotFound/PageNotFound';
    import ProductDetail from './Components/ProductDetail.js/ProductDetail';

    function App() {
      return (
      <div>
        <Header></Header>
        <Router>
        <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/manage">
          <Manage></Manage>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path = "/product/:key">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>   
        </Switch>
        </Router>
        
      </div>
      );
    }

    export default App;
