// Smoke test to verify that the easier imports utilities can be imported
import test from 'ava';
import { importModule, loadModule, importModuleDev, importModuleRelaxed } from '../src/easier-imports.js';

test('importModule can be imported', t => {
  t.truthy(importModule);
  t.is(typeof importModule, 'function');
});

test('loadModule can be imported', t => {
  t.truthy(loadModule);
  t.is(typeof loadModule, 'function');
});

test('importModuleDev can be imported', t => {
  t.truthy(importModuleDev);
  t.is(typeof importModuleDev, 'function');
});

test('importModuleRelaxed can be imported', t => {
  t.truthy(importModuleRelaxed);
  t.is(typeof importModuleRelaxed, 'function');
});