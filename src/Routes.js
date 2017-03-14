import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import IndexPage from './component/page/IndexPage'
import NotFoundPage from './component/page/NotFoundPage'

// Component Pages
import ButtonPage from './component/page/ButtonPage'
import CardPage from './component/page/CardPage'
import ControlPage from './component/page/ControlPage'
import FieldPage from './component/page/FieldPage'
import NotificationPage from './component/page/NotificationPage'
import ResponsiveMediaPage from './component/page/ResponsiveMediaPage'
import SwatchPage from './component/page/SwatchPage'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/button" component={ButtonPage} />
        <Route exact path="/card" component={CardPage} />
        <Route exact path="/control" component={ControlPage} />
        <Route exact path="/field" component={FieldPage} />
        <Route exact path="/notification" component={NotificationPage} />
        <Route exact path="/responsive-media" component={ResponsiveMediaPage} />
        <Route exact path="/swatch" component={SwatchPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default Routes
