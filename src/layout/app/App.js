import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Layout Components
import DocumentHead from '../document-head/DocumentHead'
import A11yNavigation from '../a11y-navigation/A11yNavigation'
import Footer from '../footer/Footer'
import PreHeader from '../pre-header/PreHeader'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import Routes from '../../Routes'

import Masthead from '../masthead/Masthead'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="site-container">
          <DocumentHead />
          <A11yNavigation />
          <PreHeader />
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
