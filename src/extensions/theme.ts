import { EditorView } from "@codemirror/view"

export default () => {
  return EditorView.theme({
    "&": {
      color: "#c1c1c1",
      backgroundColor: "#2b2b2b"
    },
    ".cm-content": {
      caretColor: "#aeafad"
    },
    ".cm-activeLine": {
      backgroundColor: "#323232"
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#ff6663"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#224e7a"
    },
    ".cm-gutters": {
      backgroundColor: "#2b2b2b",
      color: "#8a8c8d",
      border: "none"
    }
  }, { dark: true })
}
