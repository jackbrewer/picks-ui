import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { spy, stub } from 'sinon'
import Swatch from '../Swatch'

describe('Component: Swatch', function () {
  it('should error if required props not passed', function () {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Swatch />), Error)
    console.error.restore()
  })

  it('should output the expected markup when passed expected props', function () {
    const wrapper = shallow(<Swatch name="black" value="#000" />)
    assert.equal(wrapper.prop('className'), 'swatch')
    assert.deepEqual(wrapper.prop('style'), { backgroundColor: '#000' })
  })

  it('should trigger passed onClick function when clicked', function () {
    const mockHandleClick = spy()
    const wrapper = shallow(<Swatch name="black" value="#000"
      onClick={mockHandleClick}
    />)
    assert.equal(mockHandleClick.calledOnce, false)
    wrapper.simulate('click')
    assert.equal(mockHandleClick.calledOnce, true)
  })
})
