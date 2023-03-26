// eslint-disable-next-line import/no-extraneous-dependencies
import hljs from 'highlight.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'highlight.js/styles/monokai-sublime.css';

// ----------------------------------------------------------------------

declare global {
  interface Window {
    hljs: any;
  }
}

hljs.configure({
  languages: ['javascript', 'jsx', 'sh', 'bash', 'html', 'scss', 'css', 'json'],
});

if (typeof window !== 'undefined') {
  window.hljs = hljs;
}
