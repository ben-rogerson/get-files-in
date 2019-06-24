/**
 * Get files in
 * Returns a list of file paths of specified types from a directory
 * Usage: getFilesIn('/dir', ["js"])
 */

const getFilesIn = (folderPath, matchFiletypes = []) => {
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
  return filePaths;
};

export default getFilesIn;
