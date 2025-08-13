const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
];

const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

console.log("{");
for (const color of colors) {
  console.log(`${color}:[`);
  for (const number of numbers) {
    console.log(`"bg-${color}-${number}",`);
  }
  console.log("],");
}
console.log("}");
