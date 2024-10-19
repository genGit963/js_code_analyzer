import { parseCodeToAST } from "./analyzers/astParser";
import { analyzePerformance } from "./analyzers/performanceAnalyzer";
import { analyzeStyle } from "./analyzers/styleAnalyzer";

function analyzeCode(code) {
  const ast = parseCodeToAST(code);
  const performanceIssues = analyzePerformance(ast);
  const styleIssues = analyzeStyle(ast);

  performanceIssues.forEach((issue) => console.log(issue));
  styleIssues.forEach((issue) => console.log(issue));
}

export default { analyzeCode };
