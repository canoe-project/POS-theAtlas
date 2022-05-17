import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil
} from "draft-js";
const { hasCommandModifier } = KeyBindingUtil;

function myKeyBindingFn(e) {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return "myeditor-save";
  }
  if (e.keyCode === 191 /* `/` key */ && hasCommandModifier(e)) {
    return "command";
  }
  return getDefaultKeyBinding(e);
}

function DraftJSEditor() {
  const [state, setState] = useState(EditorState.createEmpty());
  const [editor, setEditor] = useState(null);

  const handleKeyCommand = (command, editorState) => {
    console.log(command);
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (command === "myeditor-save") {
      // Perform a request to save your contents, set
      // a new `editorState`, etc.
      return "handled";
    }
    if (newState) {
      setState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const _onBoldClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "BOLD"));
  };

  const initEditor = editor => {
    setEditor(editor);
  };

  const focusEditor = () => {
    if (editor) {
      editor.focus();
    }
  };

  useEffect(() => {
    focusEditor();
  }, []);
  return (
    <div>
      <button onClick={_onBoldClick}>Bold</button>
      <Editor
        editorState={state}
        onChange={setState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
        ref={setEditor}
      />
    </div>
  );
}

export default DraftJSEditor;
