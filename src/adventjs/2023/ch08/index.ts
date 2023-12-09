// The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.
//
// The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z.
// For example, '66a11b' means 66 a gifts and 11 b gifts.
//
// The elves have a special system for organizing the gifts:
//
// Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are
// packed in two boxes like this: {a}{a}.
// Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets
// in this way: [a][a]
// Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example,
// 4 b gifts are placed in a bag like this (bbbb)
// The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same
// order as the input string.
//
// Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a
// string representing the warehouse.

import { copyFile } from 'fs'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

function organizeGifts(gifts: string): string {
  const countGifts = gifts.match(/\d+/g)
  const nameGifts = gifts.match(/[^0-9]/g)

  const giftsObj = countGifts.reduce((acc, curr, index) => {
    acc[nameGifts[index]] = +curr
    return acc
  }, {})

  let result = ''

  for (const key in giftsObj) {
    const pallets = Math.trunc(giftsObj[key] / 50)
    const boxes = Math.trunc((giftsObj[key] - 50 * pallets) / 10)
    const bags = giftsObj[key] - 50 * pallets - 10 * boxes

    const palletsStr = pallets ? `[${key}]`.repeat(pallets) : ''
    const boxesStr = boxes ? `{${key}}`.repeat(boxes) : ''
    // delete intermediate parentheses
    const bagsStr = bags ? `(${key})`.repeat(bags).replace(/\)\(/g, '') : ''

    result += palletsStr + boxesStr + bagsStr
  }

  return result
}

console.log(organizeGifts('66a11b'))
console.log(organizeGifts('76a11b'))

// 200 points
