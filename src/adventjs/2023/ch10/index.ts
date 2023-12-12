// What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a
// matter of seconds.
//
// To create it, we are given a string to form the tree and a number that indicates its height.
//
// Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the
// indicated height. At least, they will always pass us one.
//
// We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a
// final line with the trunk formed by the character | in the center and, finally, a newline \n.
//
// For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:
//
//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |
// If we receive the string *@o and the number 3, the tree we should return is:
//
//   *
//  @ o
// * @ o
//   |
// Note:
//
// The tree should always be centered, for that reason add blank spaces to the left of each line.
// Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.
// The ornaments have a white space between them for separation.
//

function createChristmasTree(ornaments: string, height: number): string {
  const totalChars = (height * (height + 1)) / 2
  const repeatQuote = totalChars / ornaments.length
  const allChars = [...ornaments.repeat(repeatQuote + 1)].join(' ')
  let totalRow = ''
  let i = 0
  const spaces = ' '.repeat(height - 1)

  for (const j of Array.from({ length: height }).keys()) {
    const ornsPerRow = allChars.substring(i, i + 2 * j + 1)
    const row = `${spaces.substring(j)}${ornsPerRow}\n`
    i += 2 * (j + 1)
    totalRow += row
  }

  return `${totalRow}${' '.repeat(height - 1)}|\n`
}

console.log(createChristmasTree('123', 4))
console.log(createChristmasTree('*@o', 3))
console.log(createChristmasTree('xo', 4))

// Points 190
