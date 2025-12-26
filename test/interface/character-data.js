const assert = (await import('../assert.js')).default.for('CharacterData');

const {parseHTML} = globalThis[Symbol.for('linkedom')];

let {document} = parseHTML('<html><!--comment-->text</html>');

const [comment, text] = document.documentElement.childNodes;

assert(JSON.stringify(comment.cloneNode()), '[8,"comment"]');

assert(JSON.stringify(text.cloneNode()), '[3,"text"]');

assert(text.data, 'text');
assert(text.nodeValue, 'text');
assert(text.textContent, 'text');

text.data = 'data';
assert(text.data, 'data');
assert(text.nodeValue, 'data');
assert(text.textContent, 'data');

text.nodeValue = 'nodeValue';
assert(text.data, 'nodeValue');
assert(text.nodeValue, 'nodeValue');
assert(text.textContent, 'nodeValue');

({document} = parseHTML('<html><!-- a comment with a <div> tag --></html>'));
assert(document.toString(), '<html><!-- a comment with a <div> tag --></html>');


