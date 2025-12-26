if (!(Symbol.for('linkedom') in globalThis))
  globalThis[Symbol.for('linkedom')] = await import('../src/index.js');

const assertFor = Class => {
  console.log('\x1b[1m', Class.padEnd(60, ' '), '\x1b[0m');
  return (expression, expected, message = '') => {
    if (!Object.is(expression, expected)) {
      if (message)
        console.error('', message);
      console.error('', 'Expected:', String(expected));
      console.error('', 'Got instead:', String(expression));
      console.error('');
      process.exit(1);
    }
  };
};

export default { for: assertFor };
