import benchmark from './index.js';
import { DOMParser } from '../../src/cached.js';

const dp = new DOMParser;

benchmark('linkedom cached', html => dp.parseFromString(html, 'text/html'));
