const data = require('./keybindings-default.json')

const keyList = [
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
const modList = [
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
const commandHeadList = ['', 'workbench', 'editor', 'list', 'quickInput', 'views', 'explorer', 'filesExplorer', 'search', 'scm', 'git', 'debug', 'extension']
const whenHeadList = ['', 'editorTextFocus', 'editorFocus', 'listFocus']

function createTable(aList, bList = [], cList = [], dList = []) {
  const table = {}
  for (const a of aList) {
    table[a] = {}
    for (const b of bList) {
      table[a][b] = {}
      for (const c of cList) {
        table[a][b][c] = {}
        for (const d of dList) {
          table[a][b][c][d] = []
        }
      }
    }
  }
  return table
}

function addToTable(table, a, b, c, d, content) {
  table[a] ??= {}
  table[a][b] ??= {}
  table[a][b][c] ??= {}
  table[a][b][c][d] ??= []
  table[a][b][c][d].push(content)
}

function clearTable(table) {
  for (const a of Object.keys(table)) {
    for (const b of Object.keys(table[a])) {
      for (const c of Object.keys(table[a][b])) {
        for (const d of Object.keys(table[a][b][c])) {
          const cell = table[a][b][c][d]
          if (!cell || (Array.isArray(cell) && cell.length === 0) || Object.keys(cell).length === 0) {
            delete table[a][b][c][d]
          }
        }
        if (Object.keys(table[a][b][c]).length === 0) {
          delete table[a][b][c]
        }
      }
      if (Object.keys(table[a][b]).length === 0) {
        delete table[a][b]
      }
    }
    if (Object.keys(table[a]).length === 0) {
      delete table[a]
    }
  }
}

const tableByKey = createTable([''], [''], keyList, modList)
const tableByMod = createTable([''], [''], modList, keyList)
const tableByCmd = createTable([''], commandHeadList, modList, keyList)
const tableByAll = createTable(commandHeadList, whenHeadList, modList, keyList)

data.forEach((item) => {
  const { command, when } = item
  const array = item.key.split('+')
  const [b, c] = array.pop().split(' ')
  const a = array.join('+')
  const key = c ?? b
  const mod = c ? a + '+' + b : a
  const binding = { command }
  if (when) binding.when = when.length > 100 ? when.substring(0, 100) + '...' : when
  const commandHead = command.includes('.') ? command.split('.')[0] : ''
  const whenHead = when?.split(' ')[0] ?? ''
  addToTable(tableByKey, '', '', key, mod, binding)
  addToTable(tableByMod, '', '', mod, key, binding)
  addToTable(tableByCmd, '', commandHead, mod, key, binding)
  addToTable(tableByAll, commandHead, whenHead, mod, key, binding)
})

clearTable(tableByKey)
clearTable(tableByMod)
clearTable(tableByCmd)
clearTable(tableByAll)

const fs = require('node:fs')

fs.writeFileSync('./keybindings-by-key.json', JSON.stringify(tableByKey))
fs.writeFileSync('./keybindings-by-mod.json', JSON.stringify(tableByMod))
fs.writeFileSync('./keybindings-by-cmd.json', JSON.stringify(tableByCmd))
fs.writeFileSync('./keybindings-by-all.json', JSON.stringify(tableByAll))

console.dir(tableByKey, { depth: null })
console.dir(tableByMod, { depth: null })
console.dir(tableByCmd, { depth: null })
console.dir(tableByAll, { depth: null })
