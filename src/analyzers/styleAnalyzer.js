import { traverseAST } from "./astParser";

function analyzeStyle(ast) {
  let issues = [];
  traverseAST(ast, (node) => {
    if (node.type === "BadStylePattern") {
      issues.push(`Style issue found: ${node.details}`);
    }
  });
  return issues;
}

export default { analyzeStyle };
