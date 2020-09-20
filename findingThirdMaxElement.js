let arr = [1, 2, 5, 8, 8, 7, 6];

let first, second, third;
first = second = third = -Infinity;

for (let i of arr) {
  if (i === first || i === second || i === third) continue;

  if (i > first) [first, second, third] = [i, first, second];
  else if (i > second) [second, third] = [i, second];
  else if (i > third) third = i;
}

if (third !== -Infinity) console.log(third);
else console.log("sorry there is not third maximum");
