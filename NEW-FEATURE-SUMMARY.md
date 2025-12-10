# New Feature: Easier Imports Utilities

## Summary

This update adds a new utility module to the `@endo/compartment-mapper` package that provides simplified APIs for importing modules with common configurations. These utilities make it easier to use the compartment mapper with sensible defaults.

## Files Added

1. **`packages/compartment-mapper/src/easier-imports.js`** - Main utility functions
2. **`packages/compartment-mapper/examples/easier-imports-example.js`** - Example usage
3. **`packages/compartment-mapper/README-EASIER-IMPORTS.md`** - Documentation
4. **`packages/compartment-mapper/test/easier-imports.test.js`** - Comprehensive tests
5. **`packages/compartment-mapper/test/easier-imports-smoke.test.js`** - Basic import tests

## Changes Made

1. **Updated `packages/compartment-mapper/index.js`** - Exported the new utilities
2. **Updated `packages/compartment-mapper/package.json`** - Added exports and files entries

## New Utility Functions

### `importModule(readPowers, moduleLocation, options?)`

Imports a module with common default settings that work for most use cases.

### `loadModule(readPowers, moduleLocation, options?)`

Loads a module application with common default settings.

### `importModuleDev(readPowers, moduleLocation, options?)`

Imports a module with development settings enabled.

### `importModuleRelaxed(readPowers, moduleLocation, options?)`

Imports a module with relaxed settings for easier migration.

## Benefits

1. **Simplified API**: Reduces boilerplate code needed for common import scenarios
2. **Sensible Defaults**: Uses proven default settings that work for most use cases
3. **Multiple Modes**: Provides specialized functions for different environments (development, migration)
4. **Backward Compatible**: Works alongside existing APIs without breaking changes

## Commit Message

Add easier imports utilities for simplified module importing with sensible defaults