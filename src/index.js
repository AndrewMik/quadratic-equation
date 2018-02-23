module.exports = function solveEquation(equation) {
  // your implementation
  var a = 0, b = 0, c = 0,
    x1, x2;

  if (typeof (equation) === "string") {

    equation = equation.replace(/-/g, "+-");
    equation = equation.replace(/ /g, "");

    var partsOfEquationFormula = equation.split(/[+]/);
    partsOfEquationFormula = partsOfEquationFormula.filter(function (n) { return n != "" });

    partsOfEquationFormula.forEach(part => {
      if (part.search(/\*?x\^2\*?|x\*x/) != -1) {
        a += parseInt(part.replace(/\*?x\^2\*?|x\*x/, ""));
      } else if (part.search(/\*?x\*?/) != -1) {
        b += parseInt(part.replace(/\*?x\*?/, ""));
      } else {
        c += parseInt(part);
      }
    });

    // Solving an equation of the form ax^2+bx+c=0 by using the quadratic formula
    var discriminant = (Math.pow(b, 2) - 4 * a * c);
    x1 = Math.round((-1 * b + Math.sqrt(discriminant, 2)) / (2 * a));
    x2 = Math.round((-1 * b - Math.sqrt(discriminant, 2)) / (2 * a));

    var result = [x1, x2];
    result = result.sort(function (a, b) {
      return a - b;
    });

    return result;
  }
}
