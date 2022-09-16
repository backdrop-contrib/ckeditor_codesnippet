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
        // Load Prism JS files.
        CKEDITOR.scriptLoader.load(editor.config.backdrop.codeSnippet.prism.js, function() {
          that.Prism = window.Prism;
          ready();
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
