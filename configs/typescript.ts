export = {
  plugins: ['import'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsonc/base', 'plugin:jsonc/prettier'],
  rules: {
    /**
     * import/order does not sort members, use sort-imports to sort members
     *
     * @see https://github.com/import-js/eslint-plugin-import/issues/1670#issuecomment-1018833148
     */
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'import/first': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/newline-after-import': ['error'],
  },
  overrides: [
    {
      files: ['tsconfig.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-array-values': [
          'warn',
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
        /**
         * Sort on based the TSConfig Reference
         *
         * @see https://www.typescriptlang.org/tsconfig
         */
        'jsonc/sort-keys': [
          'warn',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'watchOptions',
              'typeAcquisition',
              'files',
              'include',
              'exclude',
              'references',
              {
                order: {
                  type: 'asc',
                },
              },
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [
              // Type Checking
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'useUnknownInCatchVariables',
              // Modules
              'allowUmdGlobalAccess',
              'baseUrl',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'rootDir',
              'rootDirs',
              'typeRoots',
              'types',
              // Emit
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',
              // JavaScript Support
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',
              // Editor Support
              'disableSizeLimit',
              'plugins',
              // Interop Constraints
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              // Backwards Compatibility
              'charset',
              'keyofStringsOnly',
              'noImplicitUseStrict',
              'noStrictGenericChecks',
              'out',
              'suppressExcessPropertyErrors',
              'suppressImplicitAnyIndexErrors',
              // Language and Environment
              'emitDecoratorMetadata',
              'experimentalDecorators',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'target',
              'useDefineForClassFields',
              // Compiler Diagnostics
              'diagnostics',
              'explainFiles',
              'extendedDiagnostics',
              'generateCpuProfile',
              'listEmittedFiles',
              'listFiles',
              'traceResolution',
              // Projects
              'composite',
              'disableReferencedProjectLoad',
              'disableSolutionSearching',
              'disableSourceOfProjectReferenceRedirect',
              'incremental',
              'tsBuildInfoFile',
              // Output Formatting
              'noErrorTruncation',
              'preserveWatchOutput',
              'pretty',
              // Completeness
              'skipDefaultLibCheck',
              'skipLibCheck',
              // Watch Options
              'assumeChangesOnlyAffectDirectDependencies',
            ],
          },
          {
            pathPattern: '^watchOptions$',
            order: [
              'watchFile',
              'watchDirectory',
              'fallbackPolling',
              'synchronousWatchDirectory',
              'excludeDirectories',
              'excludeFiles',
            ],
          },
          {
            pathPattern: '^typeAcquisition$',
            order: ['enable', 'include', 'exclude', 'disableFilenameBasedTypeAcquisition'],
          },
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
  ],
}
