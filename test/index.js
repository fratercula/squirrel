const Squirrel = require('../src/index')

const a = {
  't|ui1': 'a',
  b: [
    {
      'a|ui1': 1,
    },
  ],
  'c|ui1': {
    'd|ui1': true,
    's|ui0': [
      {
        'f|ui0': 3,
      },
    ],
  },
  s: 'a',
  'test|ui0': false,
}

const data = new Squirrel(a)

console.log(a)
console.log(data.value)
console.log(data.swap({ ui0: '????' }))
