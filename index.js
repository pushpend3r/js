const prompt = require("prompt-sync")();

let w = prompt();

if (w === 1 || w === 2) {
  console.log("NO");
} else {
  if (w % 2) console.log("NO");
  else console.log("YES");
}
