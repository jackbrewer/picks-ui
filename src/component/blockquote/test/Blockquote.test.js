import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Blockquote from '../Blockquote'

describe('Component: Notification', () => {
  it('should output nothing if no quote or children are passed', () => {
    const wrapper = shallow(<Blockquote />)
    assert.equal(wrapper.html(), null)
  })

  it('should quote and citation if passed', () => {
    const wrapper = shallow(<Blockquote quote="Example Quote" citation="Firstname Lastname" />)
    assert.equal(wrapper.type(), 'blockquote')
    assert.equal(wrapper.find('p').text(), 'Example Quote')
    assert.equal(wrapper.find('cite.blockquote__citation').text(), 'Firstname Lastname')
    assert.equal(wrapper.find('cite.blockquote__citation a').length, 0, 'Citation should not contain a link by default')
  })

  it('should wrap citation in a link if URL passed', () => {
    const wrapper = shallow(<Blockquote quote="Example Quote" citation="Firstname Lastname" citationUrl="http://example.com" />)
    assert.equal(wrapper.find('cite.blockquote__citation a').prop('href'), 'http://example.com')
    assert.equal(wrapper.find('cite.blockquote__citation').text(), 'Firstname Lastname')
  })

  it('should wrap citation in a link if URL passed', () => {
    const wrapper = shallow(<Blockquote><strong>Custom markup</strong></Blockquote>)
    assert.equal(wrapper.find('strong').text(), 'Custom markup')
  })
})
