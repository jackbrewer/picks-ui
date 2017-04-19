import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './layout/scroll-to-top/ScrollToTop'

// Site Pages
import IndexPage from './page/IndexPage'
import NotFoundPage from './page/NotFoundPage'

// Component Pages
import UiPage from './page/ui/UiPage'
import BlockquotePage from './page/ui/BlockquotePage'
import ButtonPage from './page/ui/ButtonPage'
import CardPage from './page/ui/CardPage'
import CodePage from './page/ui/CodePage'
import ControlPage from './page/ui/ControlPage'
import ControlCheckPage from './page/ui/ControlCheckPage'
import ControlDatePage from './page/ui/ControlDatePage'
import ControlFilePage from './page/ui/ControlFilePage'
import ControlInputPage from './page/ui/ControlInputPage'
import ControlSelectPage from './page/ui/ControlSelectPage'
import ControlTextareaPage from './page/ui/ControlTextareaPage'
import FieldPage from './page/ui/FieldPage'
import FormPage from './page/ui/FormPage'
import IconPage from './page/ui/IconPage'
import NotificationPage from './page/ui/NotificationPage'
import NotePage from './page/ui/NotePage'
import ResponsiveMediaPage from './page/ui/ResponsiveMediaPage'
import SwatchPage from './page/ui/SwatchPage'
import TablePage from './page/ui/TablePage'
import TypographyPage from './page/ui/TypographyPage'

class Routes extends Component {
  render () {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/ui" component={UiPage} />
          <Route exact path="/ui/blockquote" component={BlockquotePage} />
          <Route exact path="/ui/button" component={ButtonPage} />
          <Route exact path="/ui/card" component={CardPage} />
          <Route exact path="/ui/code" component={CodePage} />
          <Route exact path="/ui/control" component={ControlPage} />
          <Route exact path="/ui/control/check" component={ControlCheckPage} />
          <Route exact path="/ui/control/date" component={ControlDatePage} />
          <Route exact path="/ui/control/file" component={ControlFilePage} />
          <Route exact path="/ui/control/input" component={ControlInputPage} />
          <Route exact path="/ui/control/select" component={ControlSelectPage} />
          <Route exact path="/ui/control/textarea" component={ControlTextareaPage} />
          <Route exact path="/ui/field" component={FieldPage} />
          <Route exact path="/ui/form" component={FormPage} />
          <Route exact path="/ui/icon" component={IconPage} />
          <Route exact path="/ui/note" component={NotePage} />
          <Route exact path="/ui/notification" component={NotificationPage} />
          <Route exact path="/ui/responsive-media" component={ResponsiveMediaPage} />
          <Route exact path="/ui/swatch" component={SwatchPage} />
          <Route exact path="/ui/table" component={TablePage} />
          <Route exact path="/ui/typography" component={TypographyPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    )
  }
}

export default Routes
