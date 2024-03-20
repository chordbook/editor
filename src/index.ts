import { EditorState, EditorStateConfig } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import extensions from "./extensions"

export { extensions }

export function createState (state: EditorStateConfig = {}) {
  return EditorState.create({
    extensions,
    ...state,
  })
}

export function createEditor (element: HTMLElement, state: EditorStateConfig = {}) {
  return new EditorView({
    parent: element,
    state: createState(state),
  })
}
