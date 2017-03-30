import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Example from '../Example'

describe('Component: Example', function () {
  it('should error if no children are passed', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Example />), Error)
    console.error = originalError
  })

  it('should render expected defaults when no props passed', function () {
    const wrapper = shallow(<Example><svg /></Example>)
    assert.equal(wrapper.prop('className'), 'example')
    assert.equal(wrapper.find('.example__preview').length, 1)
    assert.equal(wrapper.find('.example__preview-item.one-whole svg').length, 1)
    assert.equal(wrapper.find('.example__source').length, 1)
  })

  it('should not render preview when `noPreview` set', function () {
    const wrapper = shallow(<Example noPreview><svg /></Example>)
    assert.equal(wrapper.find('.example__preview').length, 0)
  })

  it('should not render source when `noSource` set', function () {
    const wrapper = shallow(<Example noSource><svg /></Example>)
    assert.equal(wrapper.find('.example__source').length, 0)
  })

  it('should add bespoke width classes to preview items', function () {
    const wrapper = shallow(<Example previewWidth="tablet-one-half desktop-one-quarter"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('tablet-one-half'), true)
    assert.equal(wrapper.find('.example__preview-item').hasClass('desktop-one-quarter'), true)
  })

  it('should add bespoke width classes to preview items when `previewWidth` set', function () {
    const wrapper = shallow(<Example previewWidth="tablet-one-half desktop-one-quarter"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('tablet-one-half'), true)
    assert.equal(wrapper.find('.example__preview-item').hasClass('desktop-one-quarter'), true)
  })

  it('should add pre-determined classe to preview items if `previewWidth` = auto', function () {
    const wrapper = shallow(<Example previewWidth="auto"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('example__preview-item--auto'), true)
  })

  it('should render multiple chilren in separate items', function () {
    const wrapper = shallow(<Example><svg /><p /></Example>)
    assert.equal(wrapper.find('.example__preview-item').length, 2)
  })

  it('should add a source toggle button if prop set', function () {
    const wrapper = shallow(<Example><svg /></Example>)
    assert.equal(wrapper.find('button.example__source-toggle').length, 0)
    wrapper.setProps({ toggleSource: true })
    assert.equal(wrapper.find('button.example__source-toggle').length, 1)
  })

  it('should toggle source view when toggle button clicked', function () {
    const wrapper = shallow(<Example toggleSource><svg /></Example>)
    assert.equal(wrapper.state('isSourceHidden'), true)
    wrapper.find('button.example__source-toggle').simulate('click')
    assert.equal(wrapper.state('isSourceHidden'), false)
  })
})
