import { HighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { tags } from "@lezer/highlight"

export const style = HighlightStyle.define([
  { tag: tags.keyword, color: "#0481aa" },
  { tag: tags.attributeName, color: "#8a8c8d" },
  { tag: tags.attributeValue, color: "#fa7c6c" },
  { tag: tags.heading1, color: "#fa7c6c" },
  { tag: tags.name, color: "#fa7c6c" },
  { tag: tags.heading2, color: "#fa7c6c" },
  { tag: tags.attributeValue, color: "#fa7c6c" },
  { tag: tags.separator, color: "#fa7c6c" },
  { tag: tags.lineComment, color: "#5d6063" },
  { tag: tags.content, color: '#c1c1c1' },
  { tag: tags.brace, color: "#5c5d5e" },
  { tag: tags.squareBracket, color: '#025671' },
])

export default syntaxHighlighting(style, {fallback: false})
