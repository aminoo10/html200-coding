const a = 5;
const b = 20;
const c = 8;
const d = 47;

console.log(a + a);
//should be 10

console.log(a - b);
//should be -15

console.log(a * c);
//should be 40

console.log(d / a);
//should be 9 (or 9.4)

console.log(d % a);
//should have a remainder of 2 (5 can go into 47 until it has a remainder of 2)

console.log(b + d - a * c);
//a * c = 40, b+d = 67, 67-40 = 27

console.log(b + a + c + d);
//5 + 20 + 8 + 47 = 80

console.log(b / a + (d%c));
//d modulo c is 7, b/a is 4, 4 + 7 = 11

console.log((c**c) - (c**a) + ((b * d) % c));
/* c to the power of c (8^8 = 16777216) minus c to the power of a (8^5 = 32768), adding 
b times d (20 * 47 = 940) and remainder of 940 / c( 940 % 8 = 4)
(16777216 - 32768) + (4) = 16744452
*/
