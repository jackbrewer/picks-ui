import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

import Notification from '../Notification'

describe('Component: Notification', function () {
  it('should not output anything by default', function () {
    const wrapper = shallow(<Notification />)
    assert.equal(wrapper.html(), null)
  })

  it('should output prop content if passed', function () {
    const wrapper = shallow(<Notification heading="Example Heading" text="Example Text" />)
    assert.equal(wrapper.prop('className'), 'notification')
    assert.equal(wrapper.find('.notification__heading').text(), 'Example Heading')
    assert.equal(wrapper.find('p').text(), 'Example Text')
  })

  it('should add additional class if `className` prop set', function () {
    const wrapper = shallow(<Notification className="optional-class" heading="Example Heading" />)
    assert.equal(wrapper.hasClass('optional-class'), true)
  })

  it('should output children if set', function () {
    const wrapper = shallow(<Notification><p>Hi</p></Notification>)
    assert.equal(wrapper.find('p').text(), 'Hi')
  })

  it('should add correct class if `state` prop set', function () {
    const states = [ 'error', 'notice', 'success', 'warning' ]
    const wrapper = shallow(<Notification heading="Example Heading" />)
    states.map(state => {
      assert.equal(wrapper.hasClass(`notification--${state}`), false, 'Should not have “warning” state class by default')
      wrapper.setProps({ state })
      assert.equal(wrapper.hasClass(`notification--${state}`), true, `Should have “${state}” state class`)
    })
  })

  it('should not be dismissable by default', function () {
    const wrapper = shallow(<Notification className="optional-class" heading="Example Heading" />)
    assert.equal(wrapper.find('.notification__action').length, 0)
  })

  it('should not be only be dismissable if passed a handleDismiss function', function () {
    const mockHandleDismiss = spy()
    const wrapper = shallow(<Notification handleDismiss={mockHandleDismiss} heading="Example Heading" />)
    const button = wrapper.find('.notification__action')
    assert.equal(button.length, 1)
    button.simulate('click')
    assert.equal(mockHandleDismiss.calledOnce, true)
  })
})
