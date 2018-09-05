import Squirrel from '../src/index.js'

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

const data = new Squirrel(a, 'ui1', 'ui0')

console.log(JSON.stringify(a, null, 2))
console.log(JSON.stringify(data.value, null, 2))
console.log(JSON.stringify(data.swap({ ui0: '????' }), null, 2))
