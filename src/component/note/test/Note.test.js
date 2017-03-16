import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Note from '../Note'

describe('Component: Note', () => {
  it('should not output anything by default', () => {
    const wrapper = shallow(<Note />)
    assert.equal(wrapper.html(), null)
  })

  it('should output prop content if passed', () => {
    const wrapper = shallow(<Note heading="Example Heading" text="Example Text" />)
    assert.equal(wrapper.prop('className'), 'note')
    assert.equal(wrapper.find('.note__heading').text(), 'Example Heading')
    assert.equal(wrapper.find('p').text(), 'Example Text')
  })

  it('should add additional class if `className` prop set', () => {
    const wrapper = shallow(<Note className="optional-class" heading="Example Heading" />)
    assert.equal(wrapper.hasClass('optional-class'), true)
  })

  it('should output children if set', () => {
    const wrapper = shallow(<Note><p>Hi</p></Note>)
    assert.equal(wrapper.find('p').text(), 'Hi')
  })

  it('should add correct class if `state` prop set', () => {
    const states = [ 'error', 'notice', 'success', 'warning' ]
    const wrapper = shallow(<Note heading="Example Heading" />)
    states.map(state => {
      assert.equal(wrapper.hasClass(`note--${state}`), false, 'Should not have “warning” state class by default')
      wrapper.setProps({ state })
      assert.equal(wrapper.hasClass(`note--${state}`), true, `Should have “${state}” state class`)
    })
  })
})
