import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {getProducts} from './redux/actions/dataAction';
import {connect} from 'react-redux';
// Components
import Header from './components/header/header';
import Sidenav from './components/side-nav/sideNav';
import Subheader from './components/header/subHeader';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Mkpayment from './components/payments/mkPayment';

function App(props) {
  useEffect(() => {
    props.getProducts()
  })
  return (
    <Router>
      <div>
        <Header />
        <Sidenav />
        <Subheader />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/payment" component={Mkpayment} />
        </Switch>
      </div>
    </Router>


  );
}

const mapDispatchToProps = {
  getProducts
}

export default connect(null, mapDispatchToProps)(App)
