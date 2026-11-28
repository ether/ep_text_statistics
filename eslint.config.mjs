import etherpad from 'eslint-config-etherpad/flat/plugin.js';

export default [
  {
    // Third-party code, not linted (formerly .eslintignore).
    ignores: [
      'static/js/textStats.js',
    ],
  },
  ...etherpad,
];
