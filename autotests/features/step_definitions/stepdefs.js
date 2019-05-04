const assert = require('assert')
const { Given, When, Then } = require('cucumber')

function isItFriday () {
  return 'Nope'
}

Given('today is Sunday', async () => {
  this.today = 'Sunday'
})

When('I ask whether it is Friday yet', async () => {
  this.actualAnswer = isItFriday(this.today)
})

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer)
})
