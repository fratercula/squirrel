import swapper from '../src/index.js'

const a = {
  't|ui1': 'a',
  b: [
    {
      'a|ui1': 1,
    },
  ],
  'c|ui1': {
    'd|ui1': true,
  },
  s: 'a',
}

console.log(swapper(a, 'ui1'))
console.log(swapper(a, 'ui1', 'sss'))
