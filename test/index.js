const Squirrel = require('../src')

const a = {
  'a|ui1': 'a',
  b: [
    {
      'ba|ui1': 1,
    },
    'bb|ss',
  ],
  'c|ui1': {
    'ca|ui2': true,
    'cb|ui0': [
      {
        'cba|ui0': 3,
      },
    ],
  },
  d: 'a',
  'e|ui0': false,
  'f|ui2': {
    'fa|ui2': 'ss',
  },
}

const data = new Squirrel(a)

console.log(JSON.stringify(data.value, null, 2))
console.log(JSON.stringify(data.swap({ ui0: '????', ui2: '----' }), null, 2))
