const f = () => {
  const a = 1;
  const b = 2;
  const c = 3;
  const sum = (seed: number) => [a, b, c].reduce((total, n) => total + n, seed);

  return sum(0);
};

/* To stop TS complaining about block-
 * scope redeclarations, as it defaults
 * to assuming files are scripts that
 * run within the same global scope. */
export default {};
