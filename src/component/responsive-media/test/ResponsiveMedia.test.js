import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import ResponsiveMedia from '../ResponsiveMedia'

describe('Component: ResponsiveMedia', () => {
  it('should not output anything but children by default', () => {
    const wrapper = shallow(<ResponsiveMedia><img src="http://img.clock.co.uk/10" /></ResponsiveMedia>)
    assert.equal(wrapper.html(), '<img src="http://img.clock.co.uk/10"/>')
  })

  it('should output the expected markup when passed a ratio prop', () => {
    const wrapper = shallow(<ResponsiveMedia ratio="16:9"><img src="http://img.clock.co.uk/16x9" /></ResponsiveMedia>)
    assert.equal(wrapper.hasClass('responsive-media'), true)
    assert.equal(wrapper.prop('style').paddingBottom, '56.25%')
  })

  it('should handle a variety of ratio types', () => {
    const wrapper = shallow(<ResponsiveMedia ratio="1:1"><img src="http://img.clock.co.uk/16x9" /></ResponsiveMedia>)
    assert.equal(wrapper.prop('style').paddingBottom, '100%')
    wrapper.setProps({ ratio: '2:1' })
    assert.equal(wrapper.prop('style').paddingBottom, '50%')
    wrapper.setProps({ ratio: '1:2' })
    assert.equal(wrapper.prop('style').paddingBottom, '200%')
    wrapper.setProps({ ratio: '100:1' })
    assert.equal(wrapper.prop('style').paddingBottom, '1%')
    wrapper.setProps({ ratio: '1:100' })
    assert.equal(wrapper.prop('style').paddingBottom, '10000%')
  })

  it('should error if passed an invalid ratio', () => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<ResponsiveMedia ratio="1"><p /></ResponsiveMedia>), Error)
  })
})
