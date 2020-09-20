const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function read() {
  let ans;
  rl.question("", (a) => {
    ans = a;
    rl.close();
  });

  return ans;
}

let w = read();

console.log(w);

/*
if (w === 1 || w === 2) {
  console.log("NO");
} else {
  if (w % 2) console.log("NO");
  else console.log("YES");
}
*/
