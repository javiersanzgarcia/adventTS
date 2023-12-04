import fs from 'fs'

const data = fs.readFileSync(__dirname + '/input.txt', 'utf-8')
const lines = data.split('\n')
lines.pop()

function parseCard(card: string) {
  const cleaned = card.replace(/ +/g, ' ').replace('Card ', '')
  const [cardNumber, input] = cleaned.split(': ')
  const [winning, yours] = input.split(' | ')

  return {
    cardNumber: parseInt(cardNumber),
    winning: winning.split(' ').map((n) => parseInt(n)),
    yours: yours.split(' ').map((n) => parseInt(n))
  }
}

const cards = lines.map(parseCard)

const matchesPerCard: number[] = cards.map((card) => {
  const matches = card.yours.filter((n) => card.winning.includes(n))
  return matches.length
})

function part01() {
  return (
    matchesPerCard
      // When 1 match is only 1 point (2^0), 2 matches are 2 points (2^1), 3 matches are 4 points (2^2), etc.
      .map((count) => (count === 0 ? 0 : Math.pow(2, count - 1)))
      // Sum all the points
      .reduce((acc, pow) => acc + pow, 0)
  )
}

function part02() {
  // Create a map of card number (fill with 1s now) to number of matchesPerCard
  const cardCollection: Map<number, number> = new Map(
    new Array(matchesPerCard.length).fill(1).map((_, i) => [i, 1])
  )

  // Fill cardCollection with extra cards calulated from matchesPerCard
  for (const [i, matchCount] of matchesPerCard.entries()) {
    if (matchCount === 0) continue
    const existingCards = cardCollection.get(i)!
    // If matchCount is 1, we already have 1 card, so we need to add extra cards for 2, 3, 4, etc. matches
    for (let j = 1; j <= matchCount; j++) {
      cardCollection.set(i + j, cardCollection.get(i + j)! + existingCards)
    }
  }

  // Calculate the total number of cards
  return Array.from(cardCollection.values()).reduce(
    (acc, count) => acc + count,
    0
  )
}

console.log('Part 1: ', part01())
console.log('Part 2: ', part02())
