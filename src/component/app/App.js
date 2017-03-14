import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout Components
import A11yNavigation from '../layout/a11y-navigation/A11yNavigation'
import Header from '../layout/header/Header'
import Navigation from '../layout/navigation/Navigation'
import Footer from '../layout/footer/Footer'

import Masthead from '../masthead/Masthead'

// Site Pages
import IndexPage from '../page/IndexPage'
import NotFoundPage from '../page/NotFoundPage'

// Component Pages
import ButtonPage from '../page/ButtonPage'
import CardPage from '../page/CardPage'
import ControlPage from '../page/ControlPage'
import FieldPage from '../page/FieldPage'
import ResponsiveMediaPage from '../page/ResponsiveMediaPage'
import SwatchPage from '../page/SwatchPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="site-container">
          <A11yNavigation />
          <Route path="/:foo" component={Header} />
          <Route exact path="/" component={Masthead} />
          <div className="page-container content-center content-gutter">
            <div className="grid grid--full-height">
              <div className="grid__item tablet-one-quarter">
                <Navigation />
              </div>
              <div className="grid__item tablet-three-quarters">
                <main className="main-content" id="content" role="main">

                  <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/button" component={ButtonPage} />
                    <Route exact path="/card" component={CardPage} />
                    <Route exact path="/control" component={ControlPage} />
                    <Route exact path="/field" component={FieldPage} />
                    <Route exact path="/responsive-media" component={ResponsiveMediaPage} />
                    <Route exact path="/swatch" component={SwatchPage} />
                    <Route component={NotFoundPage} />
                  </Switch>

                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
