import { traverseAST } from "./astParser";

function analyzePerformance(ast) {
  // Analyzes the AST for performance issues, like unused variables
  let issues = [];
  traverseAST(ast, (node) => {
    if (node.type === "UnusedVariable") {
      issues.push(`Unused variable found: ${node.name}`);
    }
  });
  return issues;
}

export default { analyzePerformance };
