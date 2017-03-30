import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from '../ScrollToTop'

describe('Component: ScrollToTop', function () {
  it('should output expected children', function () {
    const wrapper = shallow(
      <Router>
        <ScrollToTop>
          <h1>Example</h1>
        </ScrollToTop>
      </Router>)
    assert.equal(wrapper.html(), '<h1>Example</h1>')
  })
})
