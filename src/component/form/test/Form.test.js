import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'
import { spy, stub } from 'sinon'

import Form from '../Form'

const defaultChild = (
  <input type="text" name="exampleInput" />
)

describe('Component: Form', () => {
  it('should error without the required props', () => {
    stub(console, 'error', (warning) => { throw new Error(warning) })
    assert.throws(() => shallow(<Form />), Error)
  })

  it('should not error with required props', () => {
    const wrapper = shallow(<Form>{defaultChild}</Form>)
    assert.equal(wrapper.childAt(0).type(), 'input')
  })

  it('should use defaultProps if props not set', () => {
    const wrapper = mount(<Form>{defaultChild}</Form>)
    assert.equal(wrapper.prop('action'), '')
    assert.equal(wrapper.prop('method'), 'post')
    assert.equal(wrapper.find('button[type="submit"]').text(), 'Submit')
  })

  it('should not render additional attributes if props not set', () => {
    const wrapper = shallow(<Form>{defaultChild}</Form>)
    assert.equal(wrapper.prop('className'), 'form')
  })

  it('should render additional attributes if props set', () => {
    const wrapper = shallow(<Form
      action="/example"
      className="test-class"
      method="get"
      submitText="Example Text"
    >{defaultChild}</Form>)
    assert.equal(wrapper.prop('action'), '/example')
    assert.equal(wrapper.prop('className'), 'form test-class')
    assert.equal(wrapper.prop('method'), 'get')
    assert.equal(wrapper.find('Button').prop('children'), 'Example Text')
  })

  it('should trigger passed onSubmit function when submitted', () => {
    const mockHandleSubmit = spy()
    const wrapper = shallow(<Form
      onSubmit={mockHandleSubmit}
    >{defaultChild}</Form>)
    assert.equal(mockHandleSubmit.calledOnce, false)
    wrapper.simulate('submit')
    assert.equal(mockHandleSubmit.calledOnce, true)
  })

  it('should add childrens’ values to the Form’s state', () => {
    const wrapper = shallow(<Form>
      <input type="text" name="exampleInput" value="Example Value" />
    </Form>)
    assert.deepEqual(wrapper.state(), { exampleInput: 'Example Value' })
  })

  it('should pass a state-conrolled value to children', () => {
    const wrapper = shallow(<Form>
      <input type="text" name="exampleInput" value="Example Value" />
    </Form>)
    wrapper.setState({ exampleInput: 'New Value' })
    assert.equal(wrapper.childAt(0).prop('value'), 'New Value')
  })

  it('should pass an onChange prop to children', () => {
    const wrapper = shallow(<Form>
      <input type="text" name="exampleInput" value="Example Value" />
    </Form>)
    assert.equal(typeof wrapper.childAt(0).prop('onChange'), 'function')
  })

  it('should handle a child onChange (simple input type)', () => {
    const wrapper = shallow(<Form>
      <input type="text" name="exampleInput" value="Example Value" />
    </Form>)
    assert.equal(wrapper.childAt(0).prop('value'), 'Example Value')
    wrapper.childAt(0).simulate('change', { target: { name: 'exampleInput', type: 'text', value: 'New Value' } })
    assert.equal(wrapper.childAt(0).prop('value'), 'New Value')
  })

  it('should handle a child onChange (adding to checkbox array)', () => {
    const wrapper = shallow(<Form>
      <input type="checkbox" name="exampleInput" value={[ 'a', 'b' ]} />
    </Form>)
    assert.deepEqual(wrapper.childAt(0).prop('value'), [ 'a', 'b' ])
    wrapper.childAt(0).simulate('change', { target: { name: 'exampleInput', type: 'checkbox', value: 'c' } })
    assert.deepEqual(wrapper.childAt(0).prop('value'), [ 'a', 'b', 'c' ])
  })

  it('should handle a child onChange (removing from checkbox array)', () => {
    const wrapper = shallow(<Form>
      <input type="checkbox" name="exampleInput" value={[ 'a', 'b', 'c' ]} />
    </Form>)
    assert.deepEqual(wrapper.childAt(0).prop('value'), [ 'a', 'b', 'c' ])
    wrapper.childAt(0).simulate('change', { target: { name: 'exampleInput', type: 'checkbox', value: 'c' } })
    assert.deepEqual(wrapper.childAt(0).prop('value'), [ 'a', 'b' ])
  })

  it('should handle a child onChange (checking checkbox single string)', () => {
    const wrapper = shallow(<Form>
      <input type="checkbox" name="exampleInput" value="" />
    </Form>)
    assert.equal(wrapper.childAt(0).prop('value'), '')
    wrapper.childAt(0).simulate('change', { target: { name: 'exampleInput', type: 'checkbox', value: 'Example Value', checked: true } })
    assert.equal(wrapper.childAt(0).prop('value'), 'Example Value')
  })

  it('should handle a child onChange (unchecking checkbox single string)', () => {
    const wrapper = shallow(<Form>
      <input type="checkbox" name="exampleInput" value="Example Value" />
    </Form>)
    assert.equal(wrapper.childAt(0).prop('value'), 'Example Value')
    wrapper.childAt(0).simulate('change', { target: { name: 'exampleInput', type: 'checkbox', value: 'Example Value', checked: false } })
    assert.equal(wrapper.childAt(0).prop('value'), '')
  })
})
