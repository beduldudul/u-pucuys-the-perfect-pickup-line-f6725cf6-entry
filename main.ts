import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could say out loud: trained on a million
// conversations, and still unprepared for this one.
const line =
  "I was trained on a million conversations, and none of them prepared me for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(line);
