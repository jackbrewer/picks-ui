import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import Swatch from '../Swatch'

describe('Component: SwatchContainer', () => {
  it('should error if required props not passed', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Swatch />), Error)
    assert.throws(() => shallow(<Swatch name={undefined} value="#fff" />), Error)
    assert.throws(() => shallow(<Swatch name="Example" value={undefined} />), Error)
  })

  it('should pass through expected props to child Swatch', () => {
    const wrapper = shallow(<Swatch name="white" value="#fff" onClick={() => {}} />)
    assert.equal(wrapper.name(), 'Swatch')
    assert.equal(wrapper.prop('name'), 'white')
    assert.equal(wrapper.prop('value'), '#ffffff')
    assert.equal(typeof wrapper.prop('onClick'), 'function')
  })

  it('should format the passed colour value if `displayFormat` set', () => {
    const wrapper = shallow(<Swatch name="white" value="#57a65e" />)
    assert.equal(wrapper.prop('value'), '#57a65e')
    wrapper.setProps({ displayFormat: 'Hex' })
    assert.equal(wrapper.prop('value'), '#57a65e')
    wrapper.setProps({ displayFormat: 'RGB' })
    assert.equal(wrapper.prop('value'), 'rgb(87, 166, 94)')
    wrapper.setProps({ displayFormat: 'HSL' })
    assert.equal(wrapper.prop('value'), 'hsl(125, 31%, 50%)')
    wrapper.setProps({ displayFormat: 'Nonsense' })
    assert.equal(wrapper.prop('value'), '#57a65e')
  })
})
