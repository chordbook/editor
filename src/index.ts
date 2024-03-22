import { EditorState, EditorStateConfig } from '@codemirror/state'
import { EditorView, EditorViewConfig } from '@codemirror/view'
import extensions from "./extensions"
import { eventsToExtensions, EventConfig } from "./events"

export type { EventConfig }
export { extensions, eventsToExtensions }

export interface StateConfig extends EditorStateConfig {
  events?: EventConfig
}

export function createState({ events, ...state }: StateConfig = {}) {
  return EditorState.create({
    ...state,
    extensions: [
      ...extensions,
      ...eventsToExtensions(events),
      state.extensions ?? []
    ],
  })
}

export function createEditor({ state, ...config }: EditorViewConfig = {}) {
  return new EditorView({
    ...config,
    state: createState(state)
  })
}
