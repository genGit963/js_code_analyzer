// Custom ESLint rule to identify unused variables in the code.

export const meta = {
  type: "problem",
  docs: {
    description: "disallow unused variables",
    category: "Best Practices",
  },
};
export function create(context) {
  return {
    VariableDeclarator(node) {
      if (node.init && !node.used) {
        context.report({
          node,
          message: `Unused variable '${node.id.name}' detected.`,
        });
      }
    },
  };
}
