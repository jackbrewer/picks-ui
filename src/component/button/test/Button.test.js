import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'

import { BrowserRouter as Router } from 'react-router-dom'
import Button from '../Button'

describe('Component: Button', () => {
  describe('Common functionality', () => {
    it('should be a button with expected base attributes', () => {
      const wrapper = shallow(<Button>Default Text</Button>)
      assert.equal(wrapper.type(), 'button', 'Button element type should default to `button`')
      assert.equal(wrapper.prop('type'), 'button', 'Button `type` attribute should default to `button`')
      assert.equal(wrapper.hasClass('button'), true, 'Button should have a `button` clas by default')
      assert.equal(wrapper.text(), 'Default Text')
    })

    it('should add custom classes if passed', () => {
      const wrapper = shallow(<Button className="button--primary button--small">Default Text</Button>)
      assert.equal(wrapper.find('.button').hasClass('button--primary'), true)
      assert.equal(wrapper.find('.button').hasClass('button--small'), true)
    })

    it('should add a `disabled` prop if passed', () => {
      const wrapper = mount(<Button disabled>Default Text</Button>)
      assert.equal(wrapper.find('.button').prop('disabled'), true)
    })

    it('should add onClick function if passed', () => {
      const mockOnClick = spy()
      const wrapper = mount(<Button onClick={mockOnClick}>Default Text</Button>)
      wrapper.simulate('click')
      assert.equal(mockOnClick.calledOnce, true)
    })
  })

  describe('as an `<a>` (using the Link component):', () => {
    it('should render as an `<a>` if passed an `href` prop', () => {
      const wrapper = mount(<Router><Button href="http://example.com">Link Text</Button></Router>)
      assert.equal(wrapper.find('.button').type(), 'a')
      assert.equal(wrapper.find('.button').prop('href'), 'http://example.com')
      assert.equal(wrapper.find('.button').text(), 'Link Text')
    })

    it('should not output a `type` prop if passed an `href` prop', () => {
      const wrapper = mount(<Router><Button type="submit" href="http://example.com">Link Text</Button></Router>)
      assert.equal(wrapper.prop('type'), undefined)
    })
  })

  describe('as a `<button>`:', () => {
    it('should render as a `<button>` if not passed an `href` prop', () => {
      const wrapper = shallow(<Button>Button Text</Button>)
      assert.equal(wrapper.type(), 'button')
      assert.equal(wrapper.prop('type'), 'button', 'Button `type` attribute should default to `button`')
      assert.equal(wrapper.text(), 'Button Text')
    })
  })
})
