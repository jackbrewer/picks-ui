import React from 'react'
import ReactDOM from 'react-dom'
import assert from 'assert'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import DocumentHead from '../DocumentHead'

describe('Component: DocumentHead', function () {
  let headElement
  const container = document.createElement('div')
  beforeEach(() => {
    headElement = headElement || document.head || document.querySelector('head')
    // resets DOM after each run
    headElement.innerHTML = ''
  })
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('should output expected elements', function (done) {
    ReactDOM.render(
      <Router>
        <DocumentHead />
      </Router>,
      container
    )
    setImmediate(() => {
      assert.equal(document.title, 'Picks UI')
      assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), 'https://picks.tech/')
      done()
    })
  })

  it('should allow child child components to extend title using the template', function (done) {
    ReactDOM.render(
      <Router>
        <div>
          <DocumentHead />
          <Route><Helmet title="Example" /></Route>
        </div>
      </Router>,
      container
    )
    setImmediate(() => {
      assert.equal(document.title, 'Example | Picks UI')
      done()
    })
  })
})
