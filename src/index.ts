import { EditorState, EditorStateConfig } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import extensions from "./extensions"

export { extensions }

export function createEditor (element: HTMLElement, state: EditorStateConfig = {}) {
  return new EditorView({
    parent: element,
    state: EditorState.create({
      extensions,
      ...state,
    }),
  })
}
