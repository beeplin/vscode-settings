const data = require('./keybindings-default.json')

const keys = [
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
const mods = [
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
  'ctrl+; ctrl',
  'ctrl+; ctrl+shift',
]
const pres = ['', 'workbench', 'editor', 'list', 'quickInput', 'views', 'explorer', 'filesExplorer', 'search', 'scm', 'git', 'debug', 'extension']

function createTable(rowNames, colNames) {
  const table = {}
  for (const rowName of rowNames) {
    table[rowName] = {}
    for (const colName of colNames) {
      table[rowName][colName] = null
    }
  }
  return table
}

function addToTable(table, rowName, colName, content) {
  table[rowName] ??= {}
  table[rowName][colName] ??= []
  table[rowName][colName].push(content)
}

function clearTable(table) {
  for (const [rowName, row] of Object.entries(table)) {
    for (const [colName, cell] of Object.entries(row)) {
      if (!cell) delete row[colName]
    }
    if (Object.keys(row).length === 0) {
      // delete table[rowName]
    }
  }
}

const tableByKey = createTable(keys, mods)
const tableByMod = createTable(mods, keys)
const tableByPre = {}
for (const pre of pres) {
  tableByPre[pre] = createTable(mods, keys)
}

data.forEach((item) => {
  const { command, when } = item
  const array = item.key.split('+')
  const [b, c] = array.pop().split(' ')
  const a = array.join('+')
  const key = c ?? b
  const mod = c ? a + '+' + b : a
  const binding = { command }
  if (when) binding.when = when.length > 100 ? when.substring(0, 100) + '...' : when

  addToTable(tableByKey, key, mod, binding)
  addToTable(tableByMod, mod, key, binding)

  const pre = command.includes('.') ? command.split('.')[0] : ''
  tableByPre[pre] ??= createTable(mods, keys)
  addToTable(tableByPre[pre], mod, key, binding)
})

clearTable(tableByKey)
clearTable(tableByMod)
for (const table of Object.values(tableByPre)) {
  clearTable(table)
}

const fs = require('node:fs')

fs.writeFileSync('./keybindings-by-key.json', JSON.stringify(tableByKey))
fs.writeFileSync('./keybindings-by-mod.json', JSON.stringify(tableByMod))
fs.writeFileSync('./keybindings-by-pre.json', JSON.stringify(tableByPre))

console.dir(tableByKey, { depth: null })
console.dir(tableByMod, { depth: null })
console.dir(tableByPre, { depth: null })

// const csv = Object.keys(table1).reduce((acc, cur) => acc + cur + ',' + Object.values(table1[cur]).join(',') + '\n', ',' + Object.keys(table2).join(',') + '\n')
// require('node:fs').writeFileSync('./keybindings-default.csv', csv)
