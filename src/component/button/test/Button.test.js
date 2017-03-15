import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from '../Button'

describe('Component: Button', () => {
  describe('Common functionality', () => {
    it('should output expected default attributes', () => {
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

  describe('as a `<button>`:', () => {
    it('should render as a `<button>` if not passed an `href` prop', () => {
      const wrapper = shallow(<Button>Button Text</Button>)
      assert.equal(wrapper.type(), 'button')
      assert.equal(wrapper.prop('type'), 'button', 'Button `type` attribute should default to `button`')
      assert.equal(wrapper.text(), 'Button Text')
    })

    it('should allow a custom type prop', () => {
      const wrapper = shallow(<Button type="submit">Button Text</Button>)
      assert.equal(wrapper.prop('type'), 'submit')
    })
  })

  describe('as an `<a>`', () => {
    it('should render as an `<a>` if passed an external `href` prop', () => {
      const wrapper = shallow(<Button href="http://example.com">Link Text</Button>)
      assert.equal(wrapper.type(), 'a')
      assert.equal(wrapper.prop('href'), 'http://example.com')
      assert.equal(wrapper.text(), 'Link Text')
    })

    it('should not output a `type` prop if also passed an `href` prop', () => {
      const wrapper = shallow(<Button type="submit" href="http://example.com">Link Text</Button>)
      assert.equal(wrapper.prop('type'), undefined)
    })
  })

  describe('as a `<Link>`', () => {
    it('should render as react-router’s `<Link>` if passed an internal `href` prop', () => {
      const wrapper = mount(<Router><Button href="/internal">Link Text</Button></Router>)
      assert.equal(wrapper.find(Link).length, 1)
      assert.equal(wrapper.find('.button').length, 1)
      assert.equal(wrapper.find(Link).prop('to'), '/internal')
      assert.equal(wrapper.find('.button').prop('href'), '/internal')
      assert.equal(wrapper.find(Link).text(), 'Link Text')
      assert.equal(wrapper.find('.button').text(), 'Link Text')
    })

    it('should not output a `type` prop if also passed an `href` prop', () => {
      const wrapper = mount(<Router><Button type="submit" href="/internal">Link Text</Button></Router>)
      assert.equal(wrapper.find(Link).prop('type'), undefined)
      assert.equal(wrapper.find('.button').prop('type'), undefined)
    })
  })
})
