# Get files in

A Node.js script that synchronously returns a list of file paths of specified types from a directory or directories.

## Install

```bash
npm install -D get-files-in
```

## Usage

```js
getFilesIn(folderPath, matchFiletypes = [], checkSubDirectories = false)
```

```js
require()
getFilesIn(path.resolve(__dirname, source.styles), [
    "scss",
    "sass",
    "less",
]
// [
//  '/Users/hotstuff/project/src/styles/main.scss',
//  '/Users/hotstuff/project/src/styles/hello.sass',
// ]
```

```js
require()
getFilesIn(path.resolve(__dirname, source.styles), [
    "scss",
    "sass",
    "less",
], true
// [
//  '/Users/hotstuff/project/src/styles/main.scss',
//  '/Users/hotstuff/project/src/styles/hello.sass',
//  '/Users/hotstuff/project/src/styles/subfolders-allowed/index.sass',
// ]
```

## History

This package was created for the [Agency Webpack Mix Config](https://github.com/ben-rogerson/agency-webpack-mix-config).
The package was updated to use [Globby](https://github.com/sindresorhus/globby) because it uses an improved syntax to select files.
