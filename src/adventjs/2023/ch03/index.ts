// In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.
//
// You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.
//
// Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.
//
// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'
//
// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'
//
// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''
// Please, keep in mind:
//
// There will always be one different step or none.
// The modification can occur anywhere in the string.
// The original steps could be empty

function findNaughtyStep(original: string, modified: string): string {
  // if (original.length === 0) {
  //   return modified
  // }
  const [lessChars, mostChars] = [original, modified].sort(
    (a, b) => a.length - b.length
  )

  return (
    [...mostChars].find(
      (charInMostChars, index) => lessChars[index] != charInMostChars
    ) ?? ''
  )
}

console.log(findNaughtyStep('abcd', 'abcde'))
console.log(findNaughtyStep('stepfor', 'stepor'))
console.log(findNaughtyStep('abcde', 'abcde'))

// Points: 370
// with if is 360, and in my head should be the opposite
