function strict() {
  // SyntaxError: Octal literals are not allowed in strict mode.
  return 023;
}

export default strict;
