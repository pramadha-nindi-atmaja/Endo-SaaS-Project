import test from 'ava';
import fs from 'fs';
import path from 'path';
import url from 'url';
import { importModule, loadModule, importModuleDev, importModuleRelaxed } from '../src/easier-imports.js';
import { makeReadPowers } from '../src/node-powers.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

test('importModule - basic functionality', async t => {
  const readPowers = makeReadPowers(fs);
  const modulePath = path.join(dirname, '_test-module.js');
  
  // Create a temporary test module
  const testModuleContent = `
    export const value = 42;
    export const getMessage = () => 'Hello from test module';
  `;
  
  try {
    await fs.promises.writeFile(modulePath, testModuleContent);
    
    const module = await importModule(readPowers, modulePath);
    
    t.is(module.value, 42);
    t.is(typeof module.getMessage, 'function');
    t.is(module.getMessage(), 'Hello from test module');
  } finally {
    // Clean up
    try {
      await fs.promises.unlink(modulePath);
    } catch (ignore) {
      // Ignore cleanup errors
    }
  }
});

test('loadModule - returns application object', async t => {
  const readPowers = makeReadPowers(fs);
  const modulePath = path.join(dirname, '_test-module2.js');
  
  // Create a temporary test module
  const testModuleContent = `
    export const testData = 'test';
  `;
  
  try {
    await fs.promises.writeFile(modulePath, testModuleContent);
    
    const application = await loadModule(readPowers, modulePath);
    
    t.truthy(application);
    t.truthy(typeof application.import === 'function');
  } finally {
    // Clean up
    try {
      await fs.promises.unlink(modulePath);
    } catch (ignore) {
      // Ignore cleanup errors
    }
  }
});

test('importModuleDev - includes dev options', async t => {
  const readPowers = makeReadPowers(fs);
  const modulePath = path.join(dirname, '_test-module3.js');
  
  // Create a temporary test module
  const testModuleContent = `
    export const devValue = 'dev';
  `;
  
  try {
    await fs.promises.writeFile(modulePath, testModuleContent);
    
    const module = await importModuleDev(readPowers, modulePath);
    
    t.is(module.devValue, 'dev');
  } finally {
    // Clean up
    try {
      await fs.promises.unlink(modulePath);
    } catch (ignore) {
      // Ignore cleanup errors
    }
  }
});

test('importModuleRelaxed - uses relaxed settings', async t => {
  const readPowers = makeReadPowers(fs);
  const modulePath = path.join(dirname, '_test-module4.js');
  
  // Create a temporary test module
  const testModuleContent = `
    export const relaxedValue = 'relaxed';
  `;
  
  try {
    await fs.promises.writeFile(modulePath, testModuleContent);
    
    const module = await importModuleRelaxed(readPowers, modulePath);
    
    t.is(module.relaxedValue, 'relaxed');
  } finally {
    // Clean up
    try {
      await fs.promises.unlink(modulePath);
    } catch (ignore) {
      // Ignore cleanup errors
    }
  }
});