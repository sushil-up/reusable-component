'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useMemo } from 'react';
import ToolbarPlugin from './ToolBarPlugin';



const theme = {};

const EditorConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error) {
    throw error;
  },
  nodes: [],
};

function MyLexicalEditor({ value, onChange, placeholder }) {
  const initialConfig = useMemo(() => ({
    ...EditorConfig,
    editorState: value
      ? () => editor => editor.parseEditorState(value)
      : undefined,
  }), [value]);

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border rounded-md overflow-hidden">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="p-2 min-h-[150px] focus:outline-none" />}
          placeholder={<div className="text-gray-400 absolute top-2 left-2 pointer-events-none z-0">{placeholder}</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState) => {
            const json = editorState.toJSON();
            onChange(json);
          }}
        />
      </div>
    </LexicalComposer>
  );
}

export default MyLexicalEditor;
