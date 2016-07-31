import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

class Robot extends Component {

  constructor (props) {
    super(props)
    // Find tile at robot's current position
    var y = this.props.robot.positionY.toString()
    var x = this.props.robot.positionX.toString()
    var bounds = this.props.tileInfo[y + x].getBoundingClientRect()
    console.log('bounds', bounds)
    var centerX = (bounds.right + bounds.left) / 2
    var centerY = (bounds.top + bounds.bottom) / 2
    console.log('XX', centerX, centerY)
    this.state = {
      centerX: centerX,
      centerY: centerY
    }
  }

  render () {
    console.log('robot props', this.props)
    console.log('robot state', this.state)
    return (
      <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(this.state.centerX), y: spring(this.state.centerY)}}>
        {value => <div
          style={{height: 30, width: 30, border: 'solid 1px blue', position: 'absolute', top: value.y, left: value.x, transform: `rotate(${0}deg)`}}
      >HI2</div>}
      </Motion>
    )
  }
}

export default Robot
