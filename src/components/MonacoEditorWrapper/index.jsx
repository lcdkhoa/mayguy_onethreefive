import MonacoEditor from '@monaco-editor/react';
import PropTypes from 'prop-types';

const defaultOptions = {
  automaticLayout: true,
  autoIndent: 'full',
  formatOnPaste: true,
  formatOnType: true,
  minimap: { enabled: false },
  wordWrap: 'off',
  quickSuggestions: true,
};

const MonacoEditorWrapper = ({
  height = '60vh',
  theme = 'vs-light',
  language = 'json',
  value,
  onChange,
  options = {},
  ...props
}) => {
  return (
    <MonacoEditor
      height={height}
      theme={theme}
      defaultLanguage={language}
      value={value}
      onChange={onChange}
      options={{ ...defaultOptions, ...options }}
      {...props}
    />
  );
};

MonacoEditorWrapper.propTypes = {
  height: PropTypes.string,
  theme: PropTypes.string,
  language: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default MonacoEditorWrapper; 