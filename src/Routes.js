import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import IndexPage from './page/IndexPage'
import NotFoundPage from './page/NotFoundPage'

// Component Pages
import BlockquotePage from './page/BlockquotePage'
import ButtonPage from './page/ButtonPage'
import CardPage from './page/CardPage'
import CodePage from './page/CodePage'
import ControlPage from './page/ControlPage'
import FieldPage from './page/FieldPage'
import IconPage from './page/IconPage'
import NotificationPage from './page/NotificationPage'
import NotePage from './page/NotePage'
import ResponsiveMediaPage from './page/ResponsiveMediaPage'
import SwatchPage from './page/SwatchPage'
import TypographyPage from './page/TypographyPage'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/blockquote" component={BlockquotePage} />
        <Route exact path="/button" component={ButtonPage} />
        <Route exact path="/card" component={CardPage} />
        <Route exact path="/code" component={CodePage} />
        <Route exact path="/control" component={ControlPage} />
        <Route exact path="/field" component={FieldPage} />
        <Route exact path="/icon" component={IconPage} />
        <Route exact path="/note" component={NotePage} />
        <Route exact path="/notification" component={NotificationPage} />
        <Route exact path="/responsive-media" component={ResponsiveMediaPage} />
        <Route exact path="/swatch" component={SwatchPage} />
        <Route exact path="/typography" component={TypographyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default Routes
