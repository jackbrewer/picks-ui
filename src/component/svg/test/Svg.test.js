import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Svg from '../Svg'

describe('Component: Svg', function () {
  it('should error without required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Svg />), Error)
    console.error = originalError
  })

  it('should render expected defaults when no props passed', function () {
    const wrapper = shallow(<Svg type="pick" />)
    assert.equal(wrapper.name(), 'PickSvg')
  })
})
