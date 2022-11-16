(function (Backdrop, CKEDITOR) {

"use strict";

CKEDITOR.plugins.add('prismHighlighter', {
  afterInit: function(editor) {
    // Create a new instance of the highlighter.
    var prismHighlighter = new CKEDITOR.plugins.codesnippet.highlighter({
      name: 'prismHighlighter',
      init: function(ready) {
        var that = this;
        // Load Prism CSS files.
        editor.config.backdrop.codeSnippet.prism.css.forEach(function(filePath) {
          editor.addContentsCss(filePath);
        });
        // Load Prism JS files in a queue, calling the CKEditor ready() callback
        // when the last script is loaded.
        var readyCallback = function() {
          that.Prism = window.Prism;
          ready();
        };
        editor.config.backdrop.codeSnippet.prism.js.forEach(function(filePath, index, array) {
          if (index === array.length - 1) {
            CKEDITOR.scriptLoader.queue(filePath, readyCallback);
          }
          else {
            CKEDITOR.scriptLoader.queue(filePath);
          }
        });
      },
      highlighter: function(code, language, callback) {
        // Fallback to plain if the language is not known in this Prism install.
        if (!this.Prism.languages[language]) {
          language = 'plain';
        }
        // Normalize the whitespace if present.
        if (this.Prism.plugins.NormalizeWhitespace) {
          code = this.Prism.plugins.NormalizeWhitespace.normalize(code);
        }
        var highlightedCode = this.Prism.highlight(code, this.Prism.languages[language], language);

        callback(highlightedCode);
      }
    });

    // From now on, prismHighlighter will be used as a Code Snippet
    // highlighter, overwriting the default engine.
    editor.plugins.codesnippet.setHighlighter(prismHighlighter);
  }
});

})(Backdrop, CKEDITOR);
