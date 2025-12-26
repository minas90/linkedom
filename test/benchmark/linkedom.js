import benchmark from './index.js';
import { DOMParser } from '../../src/index.js';

const dp = new DOMParser;

benchmark('linkedom', html => dp.parseFromString(html, 'text/html'));
