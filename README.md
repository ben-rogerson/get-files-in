# Get files in

A Node.js script that synchronously returns a list of file paths of specified types from a directory.

## Install

```bash
npm install -D get-files-in
```

## Usage

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
getFilesIn(path.resolve(__dirname, source.scripts), [
    "js",
    "mjs",
    "vue",
]
// [
//  '/Users/hotstuff/project/src/scripts/main.js',
//  '/Users/hotstuff/project/src/scripts/hello.mjs',
// ]
```