import { EditorView } from "@codemirror/view"

export default EditorView.baseTheme({
  "&": {
    height: '100%',
  },
  ".cm-scroller": {
    flex: '1',
    overflow: 'auto',
  }
})
