const fs = require('fs');
const path = require('path');

/**
 * Get files in
 * Returns a list of file paths of specified types from a directory
 * Usage: getFilesIn('/dir', ["js"])
 */

const getFilesIn = (folderPath, matchFiletypes = [], checkSubDirectories = false) => {
  // Exit early if the folder doesn't exist
  if (!fs.existsSync(folderPath)) return []

  const entryPaths = fs
    .readdirSync(folderPath)
    .filter(entry => !entry.startsWith(".")) // remove .DS_Store, .env etc
    .map(entry => path.join(folderPath, entry));
  const fileTypeArray = Array.isArray(matchFiletypes)
    ? matchFiletypes
    : [matchFiletypes];
  const entryPathFiles = entryPaths.filter(entry => {
    return fileTypeArray.includes(
      entry
        .slice()
        .split('.')
        .pop()
    );
  });
  const filePaths = entryPathFiles.filter(entryPath =>
    fs.statSync(entryPath).isFile()
  );
  if (checkSubDirectories) {
    const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath));
    const dirFiles = dirPaths
      .filter(path => !path.split('/').pop().startsWith('_')) // Don't include files in folders prefixed with _
      .reduce((prev, curr) => prev.concat(getFilesIn(curr, fileTypeArray, true)), []);
    return [...filePaths, ...dirFiles];
  }
  return filePaths;
};

module.exports = getFilesIn;
