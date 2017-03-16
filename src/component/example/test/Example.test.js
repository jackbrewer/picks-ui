import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Example from '../Example'

describe('Component: Example', () => {
  it('should error if no children are passed', () => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Example />), Error)
  })

  it('should render expected defaults when no props passed', () => {
    const wrapper = shallow(<Example><svg /></Example>)
    assert.equal(wrapper.prop('className'), 'example')
    assert.equal(wrapper.find('.example__preview').length, 1)
    assert.equal(wrapper.find('.example__preview-item.one-whole svg').length, 1)
    assert.equal(wrapper.find('.example__source').length, 1)
  })

  it('should not render preview when `noPreview` set', () => {
    const wrapper = shallow(<Example noPreview><svg /></Example>)
    assert.equal(wrapper.find('.example__preview').length, 0)
  })

  it('should not render source when `noSource` set', () => {
    const wrapper = shallow(<Example noSource><svg /></Example>)
    assert.equal(wrapper.find('.example__source').length, 0)
  })

  it('should add bespoke width classes to preview items', () => {
    const wrapper = shallow(<Example previewWidth="tablet-one-half desktop-one-quarter"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('tablet-one-half'), true)
    assert.equal(wrapper.find('.example__preview-item').hasClass('desktop-one-quarter'), true)
  })

  it('should add bespoke width classes to preview items when `previewWidth` set', () => {
    const wrapper = shallow(<Example previewWidth="tablet-one-half desktop-one-quarter"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('tablet-one-half'), true)
    assert.equal(wrapper.find('.example__preview-item').hasClass('desktop-one-quarter'), true)
  })

  it('should add pre-determined classe to preview items if `previewWidth` = auto', () => {
    const wrapper = shallow(<Example previewWidth="auto"><svg /></Example>)
    assert.equal(wrapper.find('.example__preview-item').hasClass('example__preview-item--auto'), true)
  })

  it('should render multiple chilren in separate items', () => {
    const wrapper = shallow(<Example><svg /><p /></Example>)
    assert.equal(wrapper.find('.example__preview-item').length, 2)
  })
})
