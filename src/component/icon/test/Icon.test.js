import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'

import Icon from '../Icon'

describe('Component: Icon', function () {
  it('should error if no children are passed', function () {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Icon />), Error)
    console.error.restore()
  })

  it('should render expected defaults when no props passed', function () {
    const wrapper = shallow(<Icon><svg /></Icon>)
    assert.equal(wrapper.type(), 'i')
    assert.equal(wrapper.prop('className'), 'icon')
    assert.equal(wrapper.prop('aria-hidden'), 'true')
    assert.equal(wrapper.find('span.is-vhidden').length, 0)
    assert.equal(wrapper.find('svg').length, 1)
  })

  it('should add additional class if `className` prop set', function () {
    const wrapper = shallow(<Icon className="optional-class"><svg /></Icon>)
    assert.equal(wrapper.hasClass('optional-class'), true)
  })

  it('should add accessibility text if `a11yText` prop set', function () {
    const wrapper = shallow(<Icon a11yText="Accessibility Text"><svg /></Icon>)
    assert.equal(wrapper.find('span.is-vhidden').length, 1)
    assert.equal(wrapper.find('span.is-vhidden').text(), 'Accessibility Text')
  })

  it('should add a class and inline width if `width` prop set', function () {
    const wrapper = shallow(<Icon width={30}><svg /></Icon>)
    assert.equal(wrapper.hasClass('icon--custom-width'), true)
    assert.equal(wrapper.prop('style').width, '30')
  })
})
