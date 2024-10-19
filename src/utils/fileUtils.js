import { readFileSync, writeFileSync } from "fs";

function readFile(filePath) {
  return readFileSync(filePath, "utf-8");
}

function writeFile(filePath, data) {
  writeFileSync(filePath, data, "utf-8");
}

export default { readFile, writeFile };
