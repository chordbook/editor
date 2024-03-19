import { createEditor } from "./src/"

const el = document.querySelector('#editor')!
const doc = el.textContent!
el.textContent = ""

createEditor(el, { doc })
