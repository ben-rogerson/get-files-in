const fs = require('fs');

/**
 * Get files in
 * Returns a list of file paths of specified types from a directory
 * Usage: getFilesIn('/dir', ["js"])
 */

const getFilesIn = (folderPath, matchFiletypes = []) => {
  // Exit early if the folder doesn't exist
  if (!fs.existsSync(folderPath)) return []

  const entryPaths = fs
    .readdirSync(folderPath)
    .map(entry => path.join(folderPath, entry));
  const entryPathFiles = entryPaths.filter(entry => {
    const fileTypeArray = Array.isArray(matchFiletypes)
      ? matchFiletypes
      : [matchFiletypes];
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
