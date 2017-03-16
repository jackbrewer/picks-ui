import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'

import Code from '../Code'

describe('Component: Code', () => {
  describe('Component: Highlight', () => {
    it('should render expected Highlight sub-component as expected', () => {
      const wrapper = mount(<Code><svg /></Code>)
      assert.equal(wrapper.find('pre').hasClass('hljs'), true)
      assert.equal(wrapper.find('pre code.code.html').text(), '<svg />')
    })

    it('should add expected syntax language when `language` set', () => {
      const wrapper = mount(<Code><svg /></Code>)
      assert.equal(wrapper.find('code.html').length, 1)
      const languages = [ 'bash', 'css', 'html', 'javascript', 'json', 'stylus' ]
      languages.map(language => {
        wrapper.setProps({ language })
        assert.equal(wrapper.find(`code.${language}`).length, 1)
      })
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
