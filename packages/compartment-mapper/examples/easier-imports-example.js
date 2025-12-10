#!/usr/bin/env node
/**
 * Example showing how to use the easier imports utilities.
 */

import fs from 'fs';
import { importModule, loadModule, importModuleDev, importModuleRelaxed } from '../index.js';
import { makeReadPowers } from '../src/node-powers.js';

// Example usage of the easier imports utilities
async function main() {
  const readPowers = makeReadPowers(fs);
  
  // Simple import with default settings
  try {
    const module = await importModule(readPowers, './some-module.js');
    console.log('Imported module:', module);
  } catch (error) {
    console.error('Failed to import module:', error.message);
  }
  
  // Load module application for advanced usage
  try {
    const application = await loadModule(readPowers, './some-module.js');
    console.log('Loaded application:', application);
  } catch (error) {
    console.error('Failed to load application:', error.message);
  }
  
  // Import with development settings
  try {
    const devModule = await importModuleDev(readPowers, './some-module.js');
    console.log('Imported dev module:', devModule);
  } catch (error) {
    console.error('Failed to import dev module:', error.message);
  }
  
  // Import with relaxed settings for migration
  try {
    const relaxedModule = await importModuleRelaxed(readPowers, './some-module.js');
    console.log('Imported relaxed module:', relaxedModule);
  } catch (error) {
    console.error('Failed to import relaxed module:', error.message);
  }
}

// Run the example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Example failed:', error);
    process.exit(1);
  });
}

export { main };