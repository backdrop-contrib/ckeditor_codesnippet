CKEditor Code Snippet Plugin
============================

Provides integration with the [CKEditor 4 Code Snippet plugin](https://ckeditor.com/docs/ckeditor4/latest/examples/codesnippet.html).

Code Snippets are useful to provide well-formatted multiline code samples.
While this module bundles highlight.js for use by CKEditor, it is recommended
that you also install either the HighlightJS or PrismJS modules to provide
syntax highlighting on the front-end of your site as well:

* https://backdropcms.org/project/highlightjs
* https://backdropcms.org/project/prism

Installation
------------

1. Install this module using the official Backdrop CMS instructions at
   <https://backdropcms.org/guide/modules>.
2. Login as an administrator. Enable the module at "Administer" >
   "Functionality" (`admin/modules`).
3. Enable the "Code Snippet" button on one of your text formats at
   "Administer" > "Configuration" => "Content Authoring" > "Text editors and
   formats" (`admin/config/content/formats`).
4. Enabling the button will automatically enable the `<pre>` and `<code>` tags
   on your text format if needed. You might also double-check under the
   "Limit allowed HTML tags" that these tags are allowed.
5. Now when creating content, click the "Code Snippet" button to insert code
   blocks.

Current Maintainers
-------------------

- [Nate Lampton](https://github.com/quicksketch)

Credits
-------

- Written for Backdrop CMS by [Nate Lampton](https://github.com/quicksketch).
- Original development paid for by [Exceljet](https://exceljet.net/).

License
-------

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.
