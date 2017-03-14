import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

import Notification from '../Notification'

describe('Component: Notification', () => {
  it('should not output anything by default', () => {
    const wrapper = shallow(<Notification />)
    assert.equal(wrapper.html(), null)
  })

  it('should output prop content if passed', () => {
    const wrapper = shallow(<Notification heading="Example Heading" text="Example Text" />)
    assert.equal(wrapper.prop('className'), 'notification')
    assert.equal(wrapper.find('.notification__heading').text(), 'Example Heading')
    assert.equal(wrapper.find('p').text(), 'Example Text')
  })

  it('should add additional class if `className` prop set', () => {
    const wrapper = shallow(<Notification className="optional-class" heading="Example Heading" />)
    assert.equal(wrapper.hasClass('optional-class'), true)
  })

  it('should add correct class if `state` prop set', () => {
    const wrapper = shallow(<Notification heading="Example Heading" />)
    assert.equal(wrapper.hasClass('notification--error'), false, 'Should not have “error” state class by default')
    assert.equal(wrapper.hasClass('notification--notice'), false, 'Should not have “notice” state class by default')
    assert.equal(wrapper.hasClass('notification--success'), false, 'Should not have “success” state class by default')
    assert.equal(wrapper.hasClass('notification--warning'), false, 'Should not have “warning” state class by default')
    wrapper.setProps({ state: 'error' })
    assert.equal(wrapper.hasClass('notification--error'), true, 'Should have “error” state class')
    wrapper.setProps({ state: 'notice' })
    assert.equal(wrapper.hasClass('notification--notice'), true, 'Should have “notice state class')
    wrapper.setProps({ state: 'success' })
    assert.equal(wrapper.hasClass('notification--success'), true, 'Should have “success state class')
    wrapper.setProps({ state: 'warning' })
    assert.equal(wrapper.hasClass('notification--warning'), true, 'Should have “warning state class')
  })

  it('should not be dismissable by default', () => {
    const wrapper = shallow(<Notification className="optional-class" heading="Example Heading" />)
    assert.equal(wrapper.find('.notification__action').length, 0)
  })

  it('should not be only be dismissable if passed a handleDismiss function', () => {
    const mockHandleDismiss = spy()
    const wrapper = shallow(<Notification handleDismiss={mockHandleDismiss} heading="Example Heading" />)
    const button = wrapper.find('.notification__action')
    assert.equal(button.length, 1)
    button.simulate('click')
    assert.equal(mockHandleDismiss.calledOnce, true)
  })
})
