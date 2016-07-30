/* Add functions to:
 * Check if a tile has a box in front,
 * given a positionX, positionY and direction angle
 */

function tileInFront (robot, board) {
  const clonedRobot = {...robot}
  switch (clonedRobot.direction) {
    case 0:
      // 0 is backwards along Y axis
      clonedRobot.positionY--
      break
    case 90:
      // 90 is forwards along X axis
      clonedRobot.positionX++
      break
    case 180:
      // 180 is forwards along Y axis
      clonedRobot.positionY++
      break
    case 270:
      // 270 is backwards along X axis
      clonedRobot.positionX--
      break
  }
  return board[clonedRobot.positionY][clonedRobot.positionX]
}

/*
 * Check if a tile has nothing in front of it,
 * given a positionX, positionY and direction angle
 *
 * Use above two functions to check if robot can move forwards,
 * given a Robot
 */

module.exports = tileInFront
