const assert = (await import('../assert.js')).default.for('Facades');

const {Attr, parseHTML} = globalThis[Symbol.for('linkedom')];

const {Attr: $Attr, document} = parseHTML('');

assert(Attr, $Attr, 'same classes');
