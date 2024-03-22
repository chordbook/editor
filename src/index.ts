import { Extension } from '@codemirror/state'
import { EditorView, EditorViewConfig } from '@codemirror/view'
import extensions from "./extensions"
import { eventsToExtensions } from "./events"

export const basicSetup: Extension[] = [
  ...extensions,
  ...eventsToExtensions()
]

export function createEditor(config: EditorViewConfig = {}) {
  return new EditorView({
    ...config,
    extensions: [
      ...basicSetup,
      ...(config.extensions ? [config.extensions] : [])
    ].flat()
  })
}
