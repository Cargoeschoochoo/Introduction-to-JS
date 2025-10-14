// || operators return the first truthy value
/**
 * Falsy values in JS
 * - false, 0, "", '', ``, null, undefined, NaN
 */
console.log(false || "Bronco" || "CPP"); // bronco
console.log(false || 11 || 12); // 11


//&& operators return the first falsy values
console.log("Cal Poly" && 0); // 0
console.log(1 && "CPP" && -10);

//! not
console.log(!("Bronco")); // False

