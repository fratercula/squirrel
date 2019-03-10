# Squirrel

Data Swapper

## Install

```bash
$ npm i @fratercula/squirrel
```

## Usage

```js
import Squirrel from '@fratercula/squirrel'

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

console.log(data.value)
/*
{
  "d": "a",
  "a": "a",
  "e": false,
  "b": [
    {
      "ba": 1
    },
    "bb|ss"
  ],
  "c": {
    "ca": true,
    "cb": [
      {
        "cba": 3
      }
    ]
  },
  "f": {
    "fa": "ss"
  }
}
*/
console.log(data.swap({ ui0: '????', ui2: '----' }))
/*
{
  "d": "a",
  "a": "a",
  "f": "----",
  "e": "????",
  "b": [
    {
      "ba": 1
    },
    "bb|ss"
  ],
  "c": {
    "ca": "----",
    "cb": "????"
  }
}
*/
```

## API

```js
const data = new Squirrel([data], [separator]) // default separator is `|`

data.value // get origin data

data.swap({ key, value }) // swap data
```

## License

MIT

## Relevance

Squirrel
