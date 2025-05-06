import { readFileSync } from "node:fs";
import { dirname } from "node:path";
import { parseJsonConfigFileContent, readConfigFile, sys } from "typescript";

let cachedResult: string[] | null = null;

export default function getTsConfigFiles(tsconfig: string) {
  if (cachedResult == null) {
    const configFile = readConfigFile(tsconfig, (filePath: string) =>
      // eslint-disable-next-line n/no-sync
      readFileSync(filePath, "utf-8"),
    );

    if (configFile.error) {
      console.error("Error reading tsconfig:", configFile.error.messageText);
      return undefined;
    }

    const parsedConfig = parseJsonConfigFileContent(
      configFile.config,
      sys,
      dirname(tsconfig),
    );
    cachedResult = parsedConfig.fileNames;
  }
  return cachedResult;
}
