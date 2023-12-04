import fs from 'fs'

const data = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
const lines = data.split('\n')
lines.pop()

function part1(lines: string[]) {
  let accumulator = 0

  lines.forEach((line) => {
    let replaced = line.replace(/[^0-9]/g, '')
    const firstdigit = replaced.charAt(0)
    const lastDigit =
      replaced.length === 1 ? firstdigit : replaced.charAt(replaced.length - 1)
    const twodigitString = firstdigit + lastDigit
    const result = parseInt(twodigitString)
    accumulator += result
  })

  return accumulator
}

const numbersToWords = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

function lettersToNumbers(line: string) {
  let lineConverted = line
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  Object.keys(numbersToWords).forEach((key) => {
    lineConverted = lineConverted.replace(key, numbersToWords[key])
  })
  return lineConverted
}

function part2(lines: string[]) {
  let answer = lines
    .map((b) => {
      const matches =
        b.length >= 1
          ? Array.from(
              b.matchAll(
                /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g
              ),
              (match) => match[1]
            )
          : ['0']
      const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
      }
      const firstMatch = isNaN(parseInt(matches[0]))
        ? numbers[matches[0]]
        : matches[0]
      const lastMatch = isNaN(parseInt(matches[matches.length - 1]))
        ? numbers[matches[matches.length - 1]]
        : matches[matches.length - 1]
      const num = `${firstMatch}${lastMatch}`
      return parseInt(num)
    })
    .reduce((sum, val) => sum + val)

  return answer
}

console.log(part1(lines)) // 55108
console.log(part2(lines)) // 56324
