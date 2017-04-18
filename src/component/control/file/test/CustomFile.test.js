import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import CustomFileControl from '../CustomFile'

const defaultProps = Object.freeze({
  name: 'example'
})

describe('Component: CustomFileControl', function () {
  it('should render output the expected HTML by default', function () {
    const wrapper = shallow(<CustomFileControl {...defaultProps} />)
    assert.equal(wrapper.type(), 'span')
    assert.equal(wrapper.prop('className'), 'custom-file')
    assert.equal(wrapper.find('NativeFileControl').length, 1)
    assert.equal(wrapper.find('button').length, 1)
    assert.equal(wrapper.find('span.custom-file__filename').text(), 'No file chosen')
  })

  it('should add classes if passed a `modifiers` prop', function () {
    const wrapper = shallow(<CustomFileControl {...defaultProps}
      modifiers={[ 'one', 'two' ]}
    />)
    assert.equal(wrapper.prop('className'), 'custom-file custom-file--one custom-file--two')
  })

  it('should add an error class if passed an `error` prop', function () {
    const wrapper = shallow(<CustomFileControl {...defaultProps}
      error="Something went wrong"
    />)
    assert.equal(wrapper.prop('className'), 'custom-file custom-file--error')
  })

  it('should trigger passed onChange function when changed', function () {
    const wrapper = shallow(<CustomFileControl {...defaultProps} />)
    wrapper.find('NativeFileControl').simulate('change', { target: { files: [ { name: 'example-file.txt' } ] } })
    assert.equal(wrapper.find('span.custom-file__filename').text(), 'example-file.txt')
    wrapper.find('NativeFileControl').simulate('change', { target: { files: [ { name: 'example-file-1.txt' }, { name: 'example-file-2.txt' } ] } })
    assert.equal(wrapper.find('span.custom-file__filename').text(), '2 files selected')
  })
})
