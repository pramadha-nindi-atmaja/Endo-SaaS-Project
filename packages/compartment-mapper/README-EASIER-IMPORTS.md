# Easier Imports Utilities

This package provides simplified APIs for importing modules with common configurations. These utilities make it easier to use the compartment mapper with sensible defaults.

## Installation

The easier imports utilities are part of the `@endo/compartment-mapper` package:

```bash
npm install @endo/compartment-mapper
```

## Usage

### Importing Modules

#### Basic Import
```javascript
import { importModule } from '@endo/compartment-mapper';

const module = await importModule(readPowers, './path/to/module.js');
```

#### Load Module Application
```javascript
import { loadModule } from '@endo/compartment-mapper';

const application = await loadModule(readPowers, './path/to/module.js');
// Access advanced features through the application object
```

#### Development Mode Import
```javascript
import { importModuleDev } from '@endo/compartment-mapper';

const module = await importModuleDev(readPowers, './path/to/module.js');
```

#### Relaxed Mode Import
```javascript
import { importModuleRelaxed } from '@endo/compartment-mapper';

const module = await importModuleRelaxed(readPowers, './path/to/module.js');
```

## API

### `importModule(readPowers, moduleLocation, options?)`

Imports a module with common default settings that work for most use cases.

**Parameters:**
- `readPowers`: File reading capabilities
- `moduleLocation`: The URL or path of the module to import
- `options`: Additional options for the import
  - `dev` (boolean, default: false): Include development dependencies
  - `tags` (Array<string>, default: ['browser', 'import']): Conditions for resolving dependencies
  - `strict` (boolean, default: true): Enforce strict mode

**Returns:** Promise<Object> - The imported module's exported names

### `loadModule(readPowers, moduleLocation, options?)`

Loads a module application with common default settings. This gives you access to the application object for more advanced usage.

**Parameters:**
- `readPowers`: File reading capabilities
- `moduleLocation`: The URL or path of the module to load
- `options`: Additional options for the load
  - `dev` (boolean, default: false): Include development dependencies
  - `tags` (Array<string>, default: ['browser', 'import']): Conditions for resolving dependencies
  - `strict` (boolean, default: true): Enforce strict mode

**Returns:** Promise<Application> - The loaded application

### `importModuleDev(readPowers, moduleLocation, options?)`

Imports a module with development settings enabled. This is useful for development environments where you want access to devDependencies.

**Parameters:**
- `readPowers`: File reading capabilities
- `moduleLocation`: The URL or path of the module to import
- `options`: Additional options for the import

**Returns:** Promise<Object> - The imported module's exported names

### `importModuleRelaxed(readPowers, moduleLocation, options?)`

Imports a module with relaxed settings for easier migration. This is useful when migrating existing code that may not follow strict module conventions.

**Parameters:**
- `readPowers`: File reading capabilities
- `moduleLocation`: The URL or path of the module to import
- `options`: Additional options for the import

**Returns:** Promise<Object> - The imported module's exported names

## Examples

See [easier-imports-example.js](./examples/easier-imports-example.js) for a complete example of how to use these utilities.

## Benefits

1. **Simplified API**: Reduces boilerplate code needed for common import scenarios
2. **Sensible Defaults**: Uses proven default settings that work for most use cases
3. **Multiple Modes**: Provides specialized functions for different environments (development, migration)
4. **Backward Compatible**: Works alongside existing APIs without breaking changes