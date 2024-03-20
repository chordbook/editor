import { createEditor } from "./src/"

const doc = `# Welcome to the new ChordBook.app Editor! 🎸
# This editor is optimized for the ChordPro format (https://www.chordpro.org).
# This interactive demo will give you an overview of the features.

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
`

createEditor(document.querySelector('#editor')!, { doc }, {
  onChange: (doc, viewUpdate) => console.log("onChange", doc, viewUpdate),
  onChangeInterval: 500, // onChange events are debounced by default (300ms)
  onFocus: viewUpdate => console.log("onFocus", viewUpdate),
  onBlur: viewUpdate => console.log("onBlur", viewUpdate),
  onPaste: (event, view) => console.log("onPaste", event, view),
})
