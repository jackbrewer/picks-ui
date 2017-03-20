import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

// Layout Components
import A11yNavigation from '../layout/a11y-navigation/A11yNavigation'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'
import Navigation from '../layout/navigation/Navigation'
import Routes from '../../Routes'

import Masthead from '../masthead/Masthead'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="site-container">
          <Helmet
            defaultTitle="Picks UI"
            titleTemplate="%s | Picks UI"
            />
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
                  <Routes />
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
