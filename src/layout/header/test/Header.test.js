import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('Component: Header', function () {
  it('should render expected defaults', function () {
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(), 'header')
    assert.equal(wrapper.prop('className'), 'header')
    assert.equal(wrapper.find('SiteTitle').length, 1)
    assert.equal(wrapper.find('SiteSwitch').length, 1)
  })
})
