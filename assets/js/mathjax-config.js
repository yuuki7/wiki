// Use the Euler font.
// https://github.com/mathjax/MathJax/issues/3410#issuecomment-3184108697
window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    packages: ['base', 'ams'],
  },
  loader: {
    dependencies: {
      '[mathjax-euler-extension]/chtml': ['output/chtml'],
    },
    paths: {
      font: 'https://cdn.jsdelivr.net/npm/@mathjax',
      'mathjax-euler-extension': '[font]/mathjax-euler-font-extension',
    },
    load: ['input/tex-base', '[tex]/ams', 'output/chtml', '[mathjax-euler-extension]/chtml'],
  },
};
