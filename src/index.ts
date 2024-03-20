import { EditorState, EditorStateConfig } from '@codemirror/state'
import { EditorView, EditorViewConfig } from '@codemirror/view'
import extensions from "./extensions"
import { EventCallbacks, eventsToExtensions } from "./events"

export type { EventCallbacks }
export { extensions, eventsToExtensions }

export interface StateConfig extends EditorStateConfig {
  events?: EventCallbacks
}

export function createState({ events, ...state }: StateConfig = {}) {
  return EditorState.create({
    ...state,
    extensions: [
      ...extensions,
      ...eventsToExtensions(events)
    ],
  })
}

export function createEditor({ state, ...config }: EditorViewConfig = {}) {
  return new EditorView({
    ...config,
    state: createState(state)
  })
}
