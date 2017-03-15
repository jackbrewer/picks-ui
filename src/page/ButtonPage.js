import React from 'react'

import Code from '../component/code/Code'
import Button from '../component/button/Button'

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
        <h1>Button</h1>
        <p>Buttons can be used for blah blah. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
        <h2>Standard</h2>
        <Code previewWidth="auto">
          <Button href="#">Anchor</Button>
          <Button>Button</Button>
        </Code>
        <Code previewWidth="auto">
          <Button href="#">Anchor<br />with multi-line</Button>
          <Button>Button<br />with multi-line</Button>
        </Code>
        <h2>Button Primary</h2>
        <Code previewWidth="auto">
          <Button className="button--primary" href="#">Anchor</Button>
          <Button className="button--primary">Button</Button>
        </Code>
        <h2>Disabled Buttons</h2>
        <Code previewWidth="auto">
          <Button disabled href="#">Anchor</Button>
          <Button disabled>Button</Button>
        </Code>
        <h2>Buttons with target</h2>
        <Code previewWidth="auto">
          <Button href="https://mathiasbynens.github.io/rel-noopener/" target="_blank">Anchor</Button>
        </Code>
        <h2>onClick</h2>
        <Code previewWidth="auto">
          <Button
            onClick={this.handleClick}
            >
            Clicked {this.state.clickCount} time{this.state.clickCount !== 1 && 's'}
            {this.state.clickCount > 10 && ' - enough already!'}
          </Button>
        </Code>
      </div>
    )
  }
}

export default ButtonPage
