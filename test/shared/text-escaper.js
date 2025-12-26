const BODY = '<body>Foo&#160;&quot;&#160;&quot;&#160;Bar</body>';
const REBODY = BODY.replace(/&quot;/g, '"');
const HTML = `<html id="html" class="live">${BODY}</html>`;
const REHTML = `<html id="html" class="live">${REBODY}</html>`;

const assert = (await import('../assert.js')).default.for('Text Escaper');

const {parseHTML} = globalThis[Symbol.for('linkedom')];

const {document} = parseHTML('<!DOCTYPE html>' + HTML);

assert(document.documentElement.toString(), REHTML);

document.documentElement.innerHTML = BODY;

assert(document.documentElement.toString(), REHTML);

document.documentElement.innerHTML = '<body>&amp;amp;</body>';
assert(document.documentElement.toString(), `<html id="html" class="live"><body>&amp;amp;</body></html>`);

