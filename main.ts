// Alien Field Notes: The Two Day Earth Review
// Writes exactly one original line — an alien tourist's review of planet
// Earth — to /output/entry.txt. Node 22, stdlib only, no network, no clock,
// no randomness: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "Earth: 5/5 stars. The locals grow food in dirt, cook it with fire, then photograph it before eating — in case it tries to escape.";

// Safeguard: the gate only accepts UTF-8 text of 1 to 200 characters that is
// not only whitespace, and the entry must stand alone as a single line.
// Refuse to write anything that would fail those checks.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be non-blank and on a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
