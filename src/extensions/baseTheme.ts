import { EditorView } from "@codemirror/view"

export default EditorView.baseTheme({
  "&": {
    height: '100%',
  },
  ".cm-editor": {
    height: '100%',
    overflow: 'auto'
  },
  ".cm-scroller": {
    flex: '1'
  }
})
