'use client';

import {
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="flex items-center gap-2 border-b bg-white px-2 py-1 text-sm">
      <button type='button' onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}>↶</button>
      <button type='button' onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}>↷</button>

      <button type='button' onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}><b>B</b></button>
      <button type='button' onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}><i>I</i></button>
      <button type='button' onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}><u>U</u></button>
    </div>
  );
}
