const parser = require("@babel/parser");

function parseCodeToAST(code) {
  return parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
}

function traverseAST(ast, visitor) {
  const traverse = require("@babel/traverse").default;
  traverse(ast, visitor);
}

// const result = parseCodeToAST(``);
// console.log(result);

module.exports = { parseCodeToAST, traverseAST };
