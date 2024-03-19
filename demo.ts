import { createEditor } from "./src/"

const doc = `{title: Song Title}
{artist: Artist Name}

{start_of_verse}
This is a [C]song with chords
{end_of_verse}

{start_of_chorus}
This is the [G]chorus
{end_of_chorus}
`

createEditor(document.querySelector('#editor')!, { doc })
