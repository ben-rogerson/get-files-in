# Get files in

A simple script that synchronously returns a list of file paths of specified types from a directory.

## Install

```bash
npm install get-files-in
```

## Usage

```js
getFilesIn(path.resolve(__dirname, source.styles), [
    "scss",
    "sass",
    "less",
]
```

```js
getFilesIn(path.resolve(__dirname, source.scripts), [
    "js",
    "mjs",
    "vue",
]
```