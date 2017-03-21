import React from 'react'
import assert from 'assert'
import { shallow, mount } from 'enzyme'

import Card from '../Card'

describe('Component: Card', () => {
  it('should output the expected container element', () => {
    const wrapper = shallow(<Card />)
    assert.equal(wrapper.type(), 'div')
    assert.equal(wrapper.prop('className'), 'card')
  })

  it('should add a class if `centered` prop set', () => {
    const wrapper = shallow(<Card centered />)
    assert.equal(wrapper.prop('className'), 'card card--centered')
  })

  it('should allow custom class names to be passed', () => {
    const wrapper = shallow(<Card className="additional-class foo" />)
    assert.equal(wrapper.prop('className'), 'card additional-class foo')
  })

  describe('Image:', () => {
    it('should display a default image if `imgSrc` prop set', () => {
      const wrapper = mount(<Card
        imgSrc="http://img.example.com/10"
      />)
      assert.equal(wrapper.find('.card__hero img').prop('src'), 'http://img.example.com/10')
      assert.equal(wrapper.find('.card__hero img').prop('alt'), '')
      assert.equal(wrapper.find('.card__hero .responsive-media').length, 0)
    })
    it('should display an alt attribute if `imgAlt` prop set', () => {
      const wrapper = shallow(<Card
        imgSrc="http://img.example.com/10"
        imgAlt="Example description"
      />)
      assert.equal(wrapper.find('.card__hero img').prop('alt'), 'Example description')
    })
    it('should be wrapped in ResponsiveMedia if `imgRatio` prop set', () => {
      const wrapper = mount(<Card
        imgSrc="http://img.example.com/10"
        imgRatio="16:9"
      />)
      assert.equal(wrapper.find('.card__hero .responsive-media').length, 1)
    })
  })

  describe('Content:', () => {
    it('should display a heading and text if set', () => {
      const wrapper = shallow(<Card
        heading="Example Heading"
        text="Example Text"
      />)
      assert.equal(wrapper.find('.card__content h2').text(), 'Example Heading')
      assert.equal(wrapper.find('.card__content p').text(), 'Example Text')
    })

    it('should display children if set', () => {
      const wrapper = shallow(<Card><strong>Hello</strong></Card>)
      assert.equal(wrapper.find('.card__content').childAt(0).html(), '<strong>Hello</strong>')
    })

    it('should display action button with optional text if set', () => {
      const wrapper = shallow(<Card
        actionUrl="http://example.com"
      />)
      assert.equal(wrapper.find('.card__content Button').prop('href'), 'http://example.com')
      assert.equal(wrapper.find('.card__content Button').prop('children'), 'http://example.com')
      wrapper.setProps({ actionText: 'Example Text' })
      assert.equal(wrapper.find('.card__content Button').prop('children'), 'Example Text')
    })
  })
})
