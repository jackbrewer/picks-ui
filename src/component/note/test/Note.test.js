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
    const wrapper = shallow(<Note heading="Example Heading" />)
    assert.equal(wrapper.hasClass('note--error'), false, 'Should not have “error” state class by default')
    assert.equal(wrapper.hasClass('note--notice'), false, 'Should not have “notice” state class by default')
    assert.equal(wrapper.hasClass('note--success'), false, 'Should not have “success” state class by default')
    assert.equal(wrapper.hasClass('note--warning'), false, 'Should not have “warning” state class by default')
    wrapper.setProps({ state: 'error' })
    assert.equal(wrapper.hasClass('note--error'), true, 'Should have “error” state class')
    wrapper.setProps({ state: 'notice' })
    assert.equal(wrapper.hasClass('note--notice'), true, 'Should have “notice state class')
    wrapper.setProps({ state: 'success' })
    assert.equal(wrapper.hasClass('note--success'), true, 'Should have “success state class')
    wrapper.setProps({ state: 'warning' })
    assert.equal(wrapper.hasClass('note--warning'), true, 'Should have “warning state class')
  })
})
