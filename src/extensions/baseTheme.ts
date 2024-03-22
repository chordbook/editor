import { EditorView } from "@codemirror/view"

export default EditorView.baseTheme({
  "&": {
    minHeight: '100%'
  },
  ".cm-editor": {
    minHeight: '100%'
  },
  ".cm-scroller": {
    flex: '1'
  }
})
