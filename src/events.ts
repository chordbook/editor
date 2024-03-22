import { EditorView, ViewUpdate } from "@codemirror/view"
import { Extension } from "@codemirror/state"

export interface EventCallbacks {
  onChange?(doc: string, viewUpdate: ViewUpdate): void
  onChangeInterval?: number
  onUpdate?(viewUpdate: ViewUpdate): void
  onFocus?(viewUpdate: ViewUpdate): void
  onBlur?(viewUpdate: ViewUpdate): void
  onPaste?(event: ClipboardEvent, view: EditorView): void
}

export function eventsToExtensions ({ onChange, onFocus, onBlur, onPaste, onChangeInterval = 300 }: EventCallbacks = { }): Extension[]  {
  // Debounce onChange event since extracting the document content is expensive
  let debouncedOnChange: ((viewUpdate: ViewUpdate) => void) | undefined
  if (onChange) {
    debouncedOnChange = debounce((v: ViewUpdate) => { onChange!(v.state.doc.toString(), v) }, onChangeInterval)
  }

  return [
    // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
    EditorView.updateListener.of(v => {
      if (v.docChanged) debouncedOnChange?.(v)
      if (v.focusChanged) v.view.hasFocus ? onFocus?.(v) : onBlur?.(v)
    }),
    EditorView.domEventHandlers({ paste: onPaste })
  ]
}

export function debounce<T extends Function>(callback: T, wait = 300) {
  let timeout = 0;
  let callable = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
  return <T>(<any>callable);
}
