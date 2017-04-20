import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import ResponsiveMedia from '../ResponsiveMedia'

describe('Component: ResponsiveMedia', function () {
  it('should not output anything but children by default', function () {
    const wrapper = shallow(<ResponsiveMedia><img src="https://img.clock.co.uk/10" /></ResponsiveMedia>)
    assert.equal(wrapper.html(), '<img src="https://img.clock.co.uk/10"/>')
  })

  it('should output the expected markup when passed a ratio prop', function () {
    const wrapper = shallow(<ResponsiveMedia ratio="16:9"><img src="https://img.clock.co.uk/16x9" /></ResponsiveMedia>)
    assert.equal(wrapper.hasClass('responsive-media'), true)
    assert.equal(wrapper.prop('style').paddingBottom, '56.25%')
  })

  it('should handle a variety of ratio types', function () {
    const wrapper = shallow(<ResponsiveMedia ratio="1:1"><img src="https://img.clock.co.uk/16x9" /></ResponsiveMedia>)
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

  it('should round ratio percentage to 4 decimal places', function () {
    const wrapper = shallow(<ResponsiveMedia ratio="111:321"><img src="https://img.clock.co.uk/16x9" /></ResponsiveMedia>)
    assert.equal(wrapper.prop('style').paddingBottom, '289.1892%')
  })

  it('should error if passed an invalid ratio', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<ResponsiveMedia ratio="1"><p /></ResponsiveMedia>), Error)
    console.error = originalError
  })
})
