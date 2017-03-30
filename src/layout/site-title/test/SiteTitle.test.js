import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import SiteTitle from '../SiteTitle'

describe('Component: SiteTitle', function () {
  it('should render expected defaults when reqired props passed', function () {
    const wrapper = shallow(<SiteTitle />)
    assert.equal(wrapper.name(), 'div')
    assert.equal(wrapper.prop('className'), 'site-title')
    assert.equal(wrapper.prop('href'), undefined)
  })

  it('should render as a Link if href passed', function () {
    const wrapper = shallow(<SiteTitle href="http://example.com" />)
    assert.equal(wrapper.name(), 'Link')
    assert.equal(wrapper.prop('to'), 'http://example.com')
  })

  it('should add a class if `isFeature` prop set', function () {
    const wrapper = shallow(<SiteTitle isFeature />)
    assert.equal(wrapper.prop('className'), 'site-title site-title--feature')
  })
})
