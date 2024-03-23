# ChordBook Editor

A web-based editor for editing chord sheets in the [ChordPro](https://chordpro.org) format, built on [CodeMirror](https://codemirror.net).

<h3 align="center">🎸 <a href="https://chordbook.github.io/editor">View Demo</a> 🪕</h3>

[![](https://github.com/chordbook/editor/assets/173/1729ce68-77a6-4103-be26-5741e77006b8)](https://chordbook.github.io/editor)

### Features

* ✅ ChordPro Syntax Highlighting
* ✅ Chord autocomplete - type "[" and you will see autocomplete of previously used chords
* ✅ Snippets - type "title", "start_of…", "tab" or any other ChordPro directive
* ✅ Error checking - Shows syntax errors in the editor

## Installation

```console
npm install @chordbook/editor
```

## Usage

Put an element on the page that will be the container for the editor.

```html
<div id="editor"></div>
```

Then, import the editor and create an instance of it.

```js
import { createEditor } from '@chordbook/editor'

createEditor({
  parent: document.querySelector('#editor'),
  doc: "Initial content"
})
```

## Contributing

Contributions are welcome!

1. Clone this repository: `git clone https://github.com/chordbook/editor.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173/](http://localhost:5173/) in your browser

## Acknowledgements

This editor is built on some [previous work](https://github.com/bettermusic/studio) by @isaiahdahl and @marijnh.

## License

This project is licensed under the [AGPLv3](./LICENSE) license.
