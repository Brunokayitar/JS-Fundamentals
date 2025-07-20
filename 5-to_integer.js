const num = process.argv[2];
const parsed = parseInt(num);

if (isNaN(parsed)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${parsed}`);
}