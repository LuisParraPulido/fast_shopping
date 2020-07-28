import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Thanks from '../containers/Thanks';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/thanks' component={Thanks} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;