export default function (robot, board) {
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
  console.log('Do i get here?')
  console.log('cloned robot', clonedRobot)
  console.log(board[0][0])
  // return board[clonedRobot.positionY][clonedRobot.positionX]
  return 2
}
