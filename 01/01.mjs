import fs from 'fs'
import lodash from 'lodash'

const content = fs.readFileSync('./01/01.txt', 'utf-8')

const elfCalories = content.split("\n\n")

const sumOfCalories = []

for (const calories of elfCalories) {
    const theSum = lodash.sum(calories.split('\n').map(Number))
    sumOfCalories.push(theSum)
}

console.log('part 1', lodash.max(sumOfCalories))

const sortedList = sumOfCalories.sort((a, b) => b - a)
console.log('part 2', sortedList[0] + sortedList[1] + sortedList[2] )

