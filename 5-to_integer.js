const num = process.argv[2];
const parsed = parseInt(num);
console.log(isNaN(parsed) ? "Not a number" : \`My number: \${parsed}\`);

