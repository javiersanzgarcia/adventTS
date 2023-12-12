// In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge
// to form a Christmas palindrome.
//
// A palindrome is a word that reads the same forwards and backwards. The elves want to know if it is possible
// to form a palindrome by making, at most, one exchange of letters.
//
// Create a function getIndexsForPalindrome that receives a string and returns:
//
// If it is already a palindrome, an empty array.
// If it is not possible, null.
// If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped
// to create it.
//
// For example:
//
// If the palindrome can be formed with different swaps, always return the first one found.

function getIndexsForPalindrome(word: string): number[] | null {
  const splitChars = [...word]
  const isPalindrome = word === [...splitChars].reverse().join('')

  // +isPalindrome converts boolean to number
  const chars = [splitChars, []][+isPalindrome]
  const otherChars = chars.slice(1)

  let i = 0
  let j = 1
  for (let char of chars) {
    for (let otherChar of otherChars) {
      const letters = [...word]
      letters[i] = otherChar
      letters[j] = char

      const palindrome = letters.join('') == letters.reverse().join('')

      if (palindrome) return [i, j]

      j++
    }
    i++
    j = 1
  }

  const value = [null, []][+isPalindrome]
  return value
}

console.log(getIndexsForPalindrome('anna')) // -> []
console.log(getIndexsForPalindrome('abab')) // -> [0,1]
console.log(getIndexsForPalindrome('abac')) // null
