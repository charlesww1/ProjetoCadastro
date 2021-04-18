import React from 'react'
import { Switch, Route, Sredirect, Redirect } from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/contato' component={Home} />
        <Redirect from='*' to ='/' />
    </Switch>