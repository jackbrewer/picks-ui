import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Button from '../../component/button/Button'

class ButtonPage extends React.Component {
  constructor () {
    super()
    this.state = { clickCount: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ clickCount: this.state.clickCount + 1 })
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Button" />
        <h1>Button</h1>
        <p>Buttons can be used for blah blah. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
        <h2>Standard</h2>
        <Example previewWidth="auto">
          <Button href="#">Anchor</Button>
          <Button>Button</Button>
        </Example>
        <Example previewWidth="auto">
          <Button href="#">Anchor<br />with multi-line</Button>
          <Button>Button<br />with multi-line</Button>
        </Example>
        <h2>Button Inverse</h2>
        <Example previewWidth="auto">
          <Button className="button--inverse" href="#">Anchor</Button>
          <Button className="button--inverse">Button</Button>
        </Example>
        <h2>Disabled Buttons</h2>
        <Example previewWidth="auto">
          <Button disabled href="#">Anchor</Button>
          <Button disabled>Button</Button>
        </Example>
        <h2>Buttons with target</h2>
        <Example previewWidth="auto">
          <Button href="https://mathiasbynens.github.io/rel-noopener/" target="_blank">Anchor</Button>
        </Example>
        <h2>onClick</h2>
        <Example previewWidth="auto">
          <Button
            onClick={this.handleClick}
            >
            Clicked {this.state.clickCount} time{this.state.clickCount !== 1 && 's'}
            {this.state.clickCount > 10 && ' - enough already!'}
          </Button>
        </Example>
      </div>
    )
  }
}

export default ButtonPage
