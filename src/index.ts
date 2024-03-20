import { EditorState, EditorStateConfig } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import extensions from "./extensions"
import { EventCallbacks, eventsToExtensions } from "./events"

export type { EventCallbacks }
export { extensions, eventsToExtensions }

export function createState(state: EditorStateConfig = {}, events: EventCallbacks = {}) {

  return EditorState.create({
    extensions: [
      ...extensions,
      ...eventsToExtensions(events)
    ],
    ...state,
  })
}

export function createEditor (element: HTMLElement, state: EditorStateConfig = {}, events: EventCallbacks = {}) {
  return new EditorView({
    parent: element,
    state: createState(state, events),
  })
}
