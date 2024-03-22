import { EditorView } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { linter, Diagnostic } from "@codemirror/lint";

// A basic syntax linter that will highlight syntax errors in the editor.
// Unfortuantely, codemirror/lezer does not provide a way to get the error message,
// so we just return a generic "Syntax Error" message for now.
// See: https://discuss.codemirror.net/t/how-should-i-get-the-error-message/6327
function lintSyntax(view: EditorView): readonly Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  syntaxTree(view.state).iterate({
    enter(node) {
      if (node.type.isError) {
        diagnostics.push({
          from: node.from,
          to: node.to,
          severity: "error",
          message: "Syntax Error",
        });
      }
    },
  });

  return diagnostics;
}

export default linter(lintSyntax)
