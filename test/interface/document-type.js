const assert = (await import('../assert.js')).default.for('DocumentType');

const {parseHTML} = globalThis[Symbol.for('linkedom')];

const {document} = parseHTML('<!doctype html>');

assert(document.childNodes[0].nodeType, 10);
assert(JSON.stringify(document.childNodes[0].cloneNode()), '[10,"html"]');

