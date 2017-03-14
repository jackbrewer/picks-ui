import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import Code from '../Code'

describe('Component: Notification', () => {
  it('should error if no children are passed', () => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Code />), Error)
  })

  it('should render expected defaults when no props passed', () => {
    const wrapper = shallow(<Code><svg /></Code>)
    assert.equal(wrapper.prop('className'), 'code')
    assert.equal(wrapper.find('.code__preview').length, 1)
    assert.equal(wrapper.find('.code__preview-item.one-whole svg').length, 1)
    assert.equal(wrapper.find('.code__source Highlight').length, 1)
  })

  it('should not render preview when `noPreview` set', () => {
    const wrapper = shallow(<Code noPreview><svg /></Code>)
    assert.equal(wrapper.find('.code__preview').length, 0)
  })

  it('should not render source when `noSource` set', () => {
    const wrapper = shallow(<Code noSource><svg /></Code>)
    assert.equal(wrapper.find('.code__source').length, 0)
  })

  it('should not render source when `noSource` set', () => {
    const wrapper = shallow(<Code previewWidth="tablet-one-half desktop-one-quarter"><svg /></Code>)
    assert.equal(wrapper.find('.code__preview-item').hasClass('tablet-one-half'), true)
    assert.equal(wrapper.find('.code__preview-item').hasClass('desktop-one-quarter'), true)
  })

  it('should render multiple chilren in separate items', () => {
    const wrapper = shallow(<Code><svg /><p /></Code>)
    assert.equal(wrapper.find('.code__preview-item').length, 2)
  })

  describe('Componnt: Highlight', () => {
    it('should render expected Highlight sub-component as expected', () => {
      const expectedHtml = '<code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">svg</span> /&gt;</span></code>'
      const wrapper = mount(<Code><svg /></Code>)
      assert.equal(wrapper.find('.code__source pre code.html').length, 1)
      assert.equal(wrapper.find('.code__source pre code.html').text(), '<svg />')
      assert.equal(wrapper.find('.code__source pre code.html').html(), expectedHtml)
    })

    it('should add expected syntax language when `language` set', () => {
      const defaultWrapper = mount(<Code><svg /></Code>)
      const customWrapper = mount(<Code language="css"><svg /></Code>)
      assert.equal(defaultWrapper.find('.code__source pre code.html').length, 1)
      assert.equal(customWrapper.find('.code__source pre code.css').length, 1)
    })

    it('should show custom component name when `displayName` set', () => {
      const wrapper = mount(<Code displayName="test"><svg /></Code>)
      assert.equal(wrapper.find('code').text(), '<test />')
    })

    it('should filter key prop by default', () => {
      const wrapper = mount(<Code><svg key="1" /></Code>)
      assert.equal(wrapper.find('code').text(), '<svg />')
    })

    it('should filter additional props when `filterProps` set', () => {
      const wrapper = mount(<Code filterProps={[ 'name', 'defaultValue' ]}><input name="Name" defaultValue="Value" id="Id" /></Code>)
      assert.equal(wrapper.find('code').text(), '<input id="Id" />')
    })
  })
})
