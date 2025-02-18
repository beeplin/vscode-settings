const data = require('./keybindings-default.json')

const targets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  ';',
  ',',
  '.',
  '/',
  '`',
  '-',
  '=',
  '[',
  ']',
  '\\',
  "'",
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'escape',
  'tab',
  'capslock',
  'backspace',
  'enter',
  'space',
  'left',
  'right',
  'up',
  'down',
  'pageup',
  'pagedown',
  'home',
  'end',
  'delete',
  'insert',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'f10',
  'f11',
  'f12',
]
const prefixes = [
  '',
  'shift',
  'ctrl',
  'ctrl+shift',
  'alt',
  'shift+alt',
  'ctrl+alt',
  'ctrl+shift+alt',
  'ctrl+k',
  'ctrl+k shift',
  'ctrl+k ctrl',
  'ctrl+k ctrl+shift',
  'ctrl+k alt',
  'ctrl+k shift+alt',
  'ctrl+k ctrl+alt',
  'ctrl+k ctrl+shift+alt',
  'ctrl+;',
  'ctrl+; shift',
  'ctrl+; ctrl',
  'ctrl+; ctrl+shift',
]

const table1 = {}
const table2 = {}

targets.forEach((t) => {
  table1[t] = {}
  prefixes.forEach((p) => {
    table1[t][p] = null
  })
})

prefixes.forEach((p) => {
  table2[p] = {}
  targets.forEach((t) => {
    table2[p][t] = null
  })
})

data.forEach((item) => {
  const { key, command, when } = item
  const array = key.split('+')
  const [b, c] = array.pop().split(' ')
  const a = array.join('+')
  const target = c ?? b
  const prefix = c ? a + '+' + b : a
  const value = { command }
  if (when) value.when = when.length > 100 ? when.substring(0, 100) + '...' : when
  table1[target] ??= {}
  table1[target][prefix] ??= []
  table1[target][prefix].push(value)
  table2[prefix] ??= {}
  table2[prefix][target] ??= []
  table2[prefix][target].push(value)
})

targets.forEach((t) => {
  prefixes.forEach((p) => {
    if (!table1[t][p]) delete table1[t][p]
  })
})

prefixes.forEach((p) => {
  targets.forEach((t) => {
    if (!table2[p][t]) delete table2[p][t]
  })
})

const fs = require('node:fs')

fs.writeFileSync('./keybindings-by-key.json', JSON.stringify(table1))
fs.writeFileSync('./keybindings-by-mod.json', JSON.stringify(table2))

console.dir(table1, { depth: null })
console.dir(table2, { depth: null })

// const csv = Object.keys(table1).reduce((acc, cur) => acc + cur + ',' + Object.values(table1[cur]).join(',') + '\n', ',' + Object.keys(table2).join(',') + '\n')
// require('node:fs').writeFileSync('./keybindings-default.csv', csv)
