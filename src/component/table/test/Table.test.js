import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import Table from '../Table'

const defaultProps = Object.freeze({
  data: [
    [ 'One', 'Alpha', 'A' ],
    [ 'Two', 'Bravo', 'B' ],
    [ 'Three', 'Charlie', 'C' ]
  ]
})

describe('Component: Table', function () {
  it('should error if required props not passed', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Table />), Error)
    console.error = originalError
  })

  it('should output the expected markup when passed expected props', function () {
    const wrapper = shallow(<Table {...defaultProps} />)
    assert.equal(wrapper.type(), 'table')
    assert.equal(wrapper.prop('className'), 'table')
    assert.equal(wrapper.find('th').length, 0)
    assert.equal(wrapper.find('td').length, 9)
  })

  it('should output table header if passed `columns` prop', function () {
    const wrapper = shallow(<Table {...defaultProps}
      columns={[ 'Number', 'Phonetic', 'Alpha' ]}
    />)
    assert.equal(wrapper.find('th').length, 3)
    assert.equal(wrapper.find('th').at(0).text(), 'Number')
    assert.equal(wrapper.find('th').at(1).text(), 'Phonetic')
    assert.equal(wrapper.find('th').at(2).text(), 'Alpha')
  })

  it('should add a class if `stickyHeader` prop set', function () {
    const wrapper = shallow(<Table {...defaultProps}
      stickyHeader
    />)
    assert.equal(wrapper.prop('className'), 'table has-sticky-header')
  })
})
