#!/usr/bin/env node

import { analyzeCode } from "../src/index";
import { readFileSync } from "fs";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Please provide a JavaScript file to analyze.");
  process.exit(1);
}

const code = readFileSync(filePath, "utf8");
analyzeCode(code);
