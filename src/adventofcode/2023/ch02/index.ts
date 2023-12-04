import fs from 'fs'

const data = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
const lines = data.split('\n')
lines.pop()

const rules = { red: 12, green: 13, blue: 14 }

function part01(lines: string[]) {
  let accumulator = 0

  for (const [index, game] of lines.entries()) {
    let isValid = true
    const selections = game.split(': ')[1].split('; ')

    for (const selection of selections) {
      const cubes = selection.split(', ')
      for (const cube of cubes) {
        const [count, color] = cube.split(' ')
        if (count > rules[color]) {
          isValid = false
          break
        }
      }
    }
    if (isValid) {
      accumulator += index + 1
    }
  }
  return accumulator
}

function part02(lines: string[]) {
  let accumulator = 0

  for (const game of lines) {
    const selections = game.split(': ')[1].split('; ')
    const bag = { red: 0, green: 0, blue: 0 }

    for (const selection of selections) {
      const cubes = selection.split(', ')
      for (const cube of cubes) {
        const [count, color] = cube.split(' ')
        if (bag[color] < count) {
          bag[color] = Number(count)
        }
      }
    }
    accumulator += Object.values(bag).reduce((acc, c) => acc * c, 1)
  }
  return accumulator
}

console.log(part01(lines))
console.log(part02(lines))
