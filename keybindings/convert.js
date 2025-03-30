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
  'space',
  'enter',
  'escape',
  'tab',
  'capslock',
  'backspace',
  'insert',
  'delete',
  'home',
  'end',
  'pageup',
  'pagedown',
  'up',
  'down',
  'left',
  'right',
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
  'editor.emmet.action',
  'editor.gotoNextSymbolFromResult',
  'workbench.action',
  'workbench.action.compareEditor',
  'workbench.action.editor',
  'workbench.action.files',
  'workbench.action.quick',
  'workbench.action.remote',
  'workbench.action.tasks',
  'workbench.action.terminal',
  'workbench.banner',
  'workbench.files.action',
  'workbench.statusBar',
  'workbench.view',
  'workbench.panel',
  'workbench.action.output',
  'workbench.actions.view',
  'workbench.debug.viewlet.action',
  'actions',
  'list',
  'list.find',
  'list.stickyScroll',
  'quickInput',
  'explorer',
  'filesExplorer',
  'search.action',
  'search.focus',
  'search.searchEditor.action',
  'workbench.action.search',
  'scm',
  'git',
  'testing',
  'references-view',
  'problems.action',
  'notifications',
  'notification',
  'breadcrumbs',
  'workbench.action.debug',
  'workbench.debug.action',
  'editor.debug.action',
  'debug',
  'extension.node-debug',
  'settings.action',
  'keybindings.editor',
  'markdown',
]
const whenHeadList = [
  '',
  'editorFocus',
  'editorTextFocus',
  'editorTextFocus && !editorReadonly',
  'textInputFocus',
  'textInputFocus && !editorReadonly',
  'textInputFocus && !accessibilityModeEnabled',
  'editorColumnSelection && textInputFocus',
  'editorTextFocus && foldingEnabled',
  'editorTextFocus && !editorReadonly && !editorTabMovesFocus',
]

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

function createObjectFromPropertyList(list) {
  return list.reduce((acc, cur) => ({ ...acc, [cur]: null }), {})
}

function addToTable(table, a, bList, b, cList, c, dList, d, content) {
  table[a] ??= createObjectFromPropertyList(bList)
  table[a][b] ??= createObjectFromPropertyList(cList)
  table[a][b][c] ??= createObjectFromPropertyList(dList)
  table[a][b][c][d] ??= []
  table[a][b][c][d].push(content)
}

function clearTable(table) {
  for (const a of Object.keys(table)) {
    table[a] ??= {}
    for (const b of Object.keys(table[a])) {
      table[a][b] ??= {}
      for (const c of Object.keys(table[a][b])) {
        table[a][b][c] ??= {}
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

const tableByKey = {}
const tableByMod = {}
const tableByCmd = {}
const tableByWhn = {}
const tableByAll = createObjectFromPropertyList(commandHeadList)

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
  addToTable(tableByKey, '', [], '', keyList, key, modList, mod, binding)
  addToTable(tableByMod, '', [], '', modList, mod, keyList, key, binding)
  if (key === 'escape') return
  addToTable(tableByCmd, '', commandHeadList, commandHead, modList, mod, keyList, key, binding)
  addToTable(tableByWhn, '', whenHeadList, whenHead, modList, mod, keyList, key, command)
  addToTable(tableByAll, commandHead, whenHeadList, whenHead, modList, mod, keyList, key, commandTail)
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
fs.writeFileSync('./keybindings-by-whn.json', JSON.stringify(tableByWhn, null, 2))
fs.writeFileSync('./keybindings-by-all.json', JSON.stringify(tableByAll, null, 2))

console.dir(tableByKey, { depth: null })
console.dir(tableByMod, { depth: null })
console.dir(tableByCmd, { depth: null })
console.dir(tableByWhn, { depth: null })
console.dir(tableByAll, { depth: null })
