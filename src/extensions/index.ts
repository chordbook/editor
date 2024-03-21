import { EditorState } from '@codemirror/state'
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap, completionStatus, acceptCompletion } from '@codemirror/autocomplete'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/language'
import { lintKeymap } from '@codemirror/lint'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
import { drawSelection, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers } from '@codemirror/view'
import { ChordPro } from '@chordbook/codemirror-lang-chordpro'
import { oneDark } from '@codemirror/theme-one-dark'
import baseTheme from './baseTheme'

export default [
  baseTheme,
  oneDark,
  ChordPro(),
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  drawSelection(),
  autocompletion(),
  EditorState.allowMultipleSelections.of(true),
  bracketMatching(),
  closeBrackets(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...completionKeymap,
    ...lintKeymap,
    // Accept completion on Tab
    {
      key: 'Tab',
      preventDefault: true,
      run: e => {
        if (completionStatus(e.state)) return acceptCompletion(e);
        return false
      },
    },

  ])
]
