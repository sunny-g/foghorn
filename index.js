import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

function onChange(editorText) {
  console.log('change event: \n', editorText);
}

console.log('AceEditor:', AceEditor, document.getElementById('editor'));

render(
  <AceEditor
    mode="javascript"
    theme="github"
    onChange={onChange}
    name="editor1"
    editorProps={{$blockScrolling: true}}
  />,
  document.getElementById('editor')
);
