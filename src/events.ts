import { EditorView, ViewUpdate } from "@codemirror/view"
import { Extension } from "@codemirror/state"

export interface EventConfig {
  changeInterval?: number
}

function dispatch(viewUpdate: ViewUpdate, type: string, detail: any = {}) {
  const event = new CustomEvent(type, { bubbles: true, detail: { viewUpdate, ...detail } })
  viewUpdate.view.dom.dispatchEvent(event)
}

const onChange = (viewUpdate: ViewUpdate): void => {
  dispatch(viewUpdate, 'change', { doc: viewUpdate.state.doc.toString() })
}
const onFocus = (viewUpdate: ViewUpdate): void => { dispatch(viewUpdate, 'focus') }
const onBlur = (viewUpdate: ViewUpdate): void => { dispatch(viewUpdate, 'blur') }

export function eventsToExtensions ({ changeInterval = 300 }: EventConfig = {}): Extension[]  {
  const debouncedChange = debounce(onChange, changeInterval)
  return [
    // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
    EditorView.updateListener.of(v => {
      if (v.docChanged) debouncedChange(v)
      if (v.focusChanged) v.view.hasFocus ? onFocus(v) : onBlur(v)
    })
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
