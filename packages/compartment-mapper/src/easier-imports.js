/**
 * Provides simplified APIs for importing modules with common configurations.
 * This utility makes it easier to use the compartment mapper with sensible defaults.
 *
 * @module
 */

import { importLocation } from './import.js';
import { loadLocation } from './import.js';

/**
 * Imports a module with common default settings that work for most use cases.
 * This is a simplified wrapper around importLocation with sensible defaults.
 *
 * @param {import('./types.js').ReadPowers} readPowers - File reading capabilities
 * @param {string} moduleLocation - The URL or path of the module to import
 * @param {Object} [options={}] - Additional options for the import
 * @param {boolean} [options.dev=false] - Include development dependencies
 * @param {Array<string>} [options.tags=['browser', 'import']] - Conditions for resolving dependencies
 * @param {boolean} [options.strict=true] - Enforce strict mode
 * @returns {Promise<Object>} The imported module's exported names
 */
export const importModule = async (readPowers, moduleLocation, options = {}) => {
  const defaultOptions = {
    dev: false,
    tags: ['browser', 'import'],
    strict: true,
  };

  const finalOptions = { ...defaultOptions, ...options };

  return importLocation(readPowers, moduleLocation, finalOptions);
};

/**
 * Loads a module application with common default settings.
 * This gives you access to the application object for more advanced usage.
 *
 * @param {import('./types.js').ReadPowers} readPowers - File reading capabilities
 * @param {string} moduleLocation - The URL or path of the module to load
 * @param {Object} [options={}] - Additional options for the load
 * @param {boolean} [options.dev=false] - Include development dependencies
 * @param {Array<string>} [options.tags=['browser', 'import']] - Conditions for resolving dependencies
 * @param {boolean} [options.strict=true] - Enforce strict mode
 * @returns {Promise<import('./types.js').Application>} The loaded application
 */
export const loadModule = async (readPowers, moduleLocation, options = {}) => {
  const defaultOptions = {
    dev: false,
    tags: ['browser', 'import'],
    strict: true,
  };

  const finalOptions = { ...defaultOptions, ...options };

  return loadLocation(readPowers, moduleLocation, finalOptions);
};

/**
 * Imports a module with development settings enabled.
 * This is useful for development environments where you want access to devDependencies.
 *
 * @param {import('./types.js').ReadPowers} readPowers - File reading capabilities
 * @param {string} moduleLocation - The URL or path of the module to import
 * @param {Object} [options={}] - Additional options for the import
 * @returns {Promise<Object>} The imported module's exported names
 */
export const importModuleDev = async (readPowers, moduleLocation, options = {}) => {
  const devOptions = {
    dev: true,
    tags: ['browser', 'import', 'development'],
    strict: true,
  };

  const finalOptions = { ...devOptions, ...options };

  return importLocation(readPowers, moduleLocation, finalOptions);
};

/**
 * Imports a module with relaxed settings for easier migration.
 * This is useful when migrating existing code that may not follow strict module conventions.
 *
 * @param {import('./types.js').ReadPowers} readPowers - File reading capabilities
 * @param {string} moduleLocation - The URL or path of the module to import
 * @param {Object} [options={}] - Additional options for the import
 * @returns {Promise<Object>} The imported module's exported names
 */
export const importModuleRelaxed = async (readPowers, moduleLocation, options = {}) => {
  const relaxedOptions = {
    dev: false,
    tags: ['browser', 'import'],
    strict: false,
  };

  const finalOptions = { ...relaxedOptions, ...options };

  return importLocation(readPowers, moduleLocation, finalOptions);
};