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
const commandHeadList = [
  '',
  'editor',
  'editor.action',
  'editor.action.accessibleDiffViewer',
  'editor.action.dirtydiff',
  'editor.action.extensioneditor',
  'editor.action.formatDocument',
  'editor.action.inlineSuggest',
  'editor.action.inPlaceReplace',
  'editor.action.marker',
  'editor.action.smartSelect',
  'editor.action.webvieweditor',
  'editor.action.wordHighlight',
  'editor.debug.action',
  'editor.emmet.action',
  'editor.gotoNextSymbolFromResult',
  'workbench.action',
  'workbench.action.chat',
  'workbench.action.compareEditor',
  'workbench.action.debug',
  'workbench.action.editor',
  'workbench.action.editorDictation',
  'workbench.action.edits ',
  'workbench.action.files',
  'workbench.action.interactivePlayground',
  'workbench.action.output',
  'workbench.action.quickchat',
  'workbench.action.remote',
  'workbench.action.search',
  'workbench.action.speech',
  'workbench.action.tasks',
  'workbench.action.terminal',
  'workbench.action.terminal.chat',
  'workbench.action.view',
  'workbench.action.workbench.panel.output',
  'workbench.banner',
  'workbench.debug.action',
  'workbench.debug.viewlet.action',
  'workbench.files.action',
  'workbench.panel',
  'workbench.statusBar',
  'workbench.view',
]
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
const tableByWhn = createTable([''], whenHeadList, modList, keyList)
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
  const lastDotPos = command.lastIndexOf('.')
  const commandHead = command.substring(0, lastDotPos)
  const commandTail = command.substring(lastDotPos + 1)
  const whenHead = when ?? ''
  addToTable(tableByKey, '', '', key, mod, binding)
  addToTable(tableByMod, '', '', mod, key, binding)
  addToTable(tableByCmd, '', commandHead, mod, key, binding)
  addToTable(tableByWhn, '', whenHead, mod, key, command)
  addToTable(tableByAll, commandHead, whenHead, mod, key, commandTail)
})

clearTable(tableByKey)
clearTable(tableByMod)
clearTable(tableByCmd)
clearTable(tableByWhn)
clearTable(tableByAll)

const fs = require('node:fs')

fs.writeFileSync('./keybindings-by-key.json', JSON.stringify(tableByKey))
fs.writeFileSync('./keybindings-by-mod.json', JSON.stringify(tableByMod))
fs.writeFileSync('./keybindings-by-cmd.json', JSON.stringify(tableByCmd))
fs.writeFileSync('./keybindings-by-whn.json', JSON.stringify(tableByWhn))
fs.writeFileSync('./keybindings-by-all.json', JSON.stringify(tableByAll, null, 2))

console.dir(tableByKey, { depth: null })
console.dir(tableByMod, { depth: null })
console.dir(tableByCmd, { depth: null })
console.dir(tableByWhn, { depth: null })
console.dir(tableByAll, { depth: null })
