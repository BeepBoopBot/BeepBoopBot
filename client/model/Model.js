import Robot from './Robot'
import Board from './Board'

/* This class can see the board and the model
 * It calls functions on the board to check a movement is valid
 * then calls functions on the robot to update it
 * Note that left() and right() are always valid movements */

export default class Model {
  constructor () {
    this.board = new Board()
    this.robot = new Robot()
  }

  moveForward () {
    // check with board this is okay
    // then call moveForward on robot
  }

  left () {
    this.robot.left()
  }

  right () {
    this.robot.right()
  }
}
