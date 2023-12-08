// Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.
//
// Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using
// ASCII characters.
//
// The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:
//
// drawGift(4, '+')
//
// /*
//    ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// */
//
// drawGift(5, '*')
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */
//
// drawGift(1, '^')
// /*
// #
// */
// Important: We have been told that there is always to leave a newline at the end of the drawing.

function drawGift(size: number, symbol: string): string {
  let gSize = size - 2

  gSize += +!(gSize + 1)

  let tCenter = ''
  let bCenter = ''

  const rbyNumber = (char: string, length: number): string => {
    return char.repeat(length)
  }

  for (const element of [...Array.from({ length: gSize }).keys()]) {
    const lineG =
      '#' + rbyNumber(symbol, gSize) + '#' + rbyNumber(symbol, element) + '#'
    bCenter = lineG + '\n' + bCenter
    tCenter += ' '.repeat(gSize - element) + lineG + '\n'
  }

  const prefix = ' '.repeat(size - 1) + '#'.repeat(size) + '\n'

  return (
    prefix +
    (
      tCenter +
      '#'.repeat(size) +
      symbol.repeat(gSize) +
      '#' +
      '\n' +
      bCenter +
      '#'.repeat(size) +
      '\n'
    ).repeat(+!!(size - 1))
  )
}

console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))

// 190 points
