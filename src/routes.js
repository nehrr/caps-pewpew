import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Upload from './components/Upload';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

const MyRoute = () => (
  <Router>

    <Layout name='layout'>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/upload" component={Upload}/>
        <Route path='/profile' component={Profile} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>

  </Router>

)

export default MyRoute;
