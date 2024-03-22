import { createEditor } from "./src/"
import { linter } from "@codemirror/lint"

const doc = `# Welcome to the new ChordBook.app Editor! 🎸
# This editor is optimized for the ChordPro format (https://www.chordpro.org).

{title: Song Title}
{artist: Artist Name}

{start_of_verse}
This is a [C]song with chords
{end_of_verse}

{start_of_chorus}
This is the [G]chorus
{end_of_chorus}

# Features:
# ✅ Syntax Highlighting
# ✅ Chord autocomplete - type "[" and you will see autocomplete of previously used chords
# ✅ Snippets - type "title", "start_of…", "tab" or any other ChordPro directive
# ✅ Error checking - Shows syntax errors in the editor
{
`

const el = document.querySelector('#editor')!

createEditor({
  parent: el,
  doc,
  extensions: [
    linter((view) => {
      return [{ from: 0, to: 46, message: "This is what warnings look like", severity: "warning" }]
    })
  ]
})

el.addEventListener('focus', console.log)
el.addEventListener('blur', console.log)
el.addEventListener('change', console.log)
el.addEventListener('paste', console.log)
