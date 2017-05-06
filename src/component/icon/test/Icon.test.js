import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Icon from '../Icon'

const defaultProps = Object.freeze({
  type: 'pick'
})

describe('Component: Icon', function () {
  it('should error without required props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Icon />), Error)
    console.error = originalError
  })

  it('should render expected defaults when no props passed', function () {
    const wrapper = shallow(<Icon {...defaultProps} />)
    assert.equal(wrapper.name(), 'i')
    assert.equal(wrapper.prop('className'), 'icon')
    assert.equal(wrapper.prop('aria-hidden'), 'true')
    assert.equal(wrapper.find('span.is-vhidden').length, 0)
    assert.equal(wrapper.find('Svg').length, 1)
  })

  it('should add accessibility text if `a11yText` prop set', () => {
    const wrapper = shallow(<Icon {...defaultProps}
      a11yText="Accessibility Text"
    />)
    assert.equal(wrapper.find('span.is-vhidden').length, 1)
    assert.equal(wrapper.find('span.is-vhidden').text(), 'Accessibility Text')
  })

  it('should add additional class if `className` prop set', () => {
    const wrapper = shallow(<Icon {...defaultProps}
      className="optional-class"
    />)
    assert.equal(wrapper.hasClass('optional-class'), true)
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<Icon {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'icon icon--one icon--two')
  })

  it('should add a class and inline width if `width` prop set', () => {
    const wrapper = shallow(<Icon {...defaultProps}
      width={30}
    />)
    assert.equal(wrapper.hasClass('icon--custom-size'), true)
    assert.equal(wrapper.prop('style').width, '30px')
  })

  it('should add a class and inline height if `height` prop set', () => {
    const wrapper = shallow(<Icon {...defaultProps}
      height={40}
    />)
    assert.equal(wrapper.hasClass('icon--custom-size'), true)
    assert.equal(wrapper.prop('style').height, '40px')
    assert.equal(wrapper.prop('style').lineHeight, '40px')
  })
})
