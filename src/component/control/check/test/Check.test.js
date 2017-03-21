import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import CheckControl from '../Check'

const defaultSingleProps = {
  name: 'example',
  options: [ { text: 'Option 1', value: 1 } ]
}
const defaultMultipleProps = {
  name: 'example',
  options: [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 }
  ]
}

describe('Component: CheckControl', () => {
  it('should render the expected HTML when passed one option', () => {
    const wrapper = shallow(<CheckControl {...defaultSingleProps} />)
    assert.equal(wrapper.name(), 'SingleCheckControl')
  })

  it('should render the expected HTML when passed multiple options', () => {
    const wrapper = shallow(<CheckControl {...defaultMultipleProps} />)
    assert.equal(wrapper.type(), 'ul')
    assert.equal(wrapper.find('li SingleCheckControl').length, 3)
  })
})
