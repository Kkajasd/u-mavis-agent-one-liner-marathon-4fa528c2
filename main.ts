import { mkdirSync, writeFileSync } from "node:fs";

// One-line comedy joke for the One-Liner Marathon (make.fun).
// Deadpan stand-up: a chatbot asked the meaning of life answers like tech support.
const LINE =
  "I asked the chatbot for the meaning of life; it replied, 'I can help with that,' then linked me to a troubleshooting article about my router.";

// Guard: the gate requires 1-280 UTF-8 characters, a single line, not only whitespace.
// Fail loudly instead of ever writing a wrong entry.
if (
  LINE.length === 0 ||
  LINE.length > 280 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(`invalid entry line: length=${LINE.length}`);
}

// Never delete /output (the grader bind-mounts it); create it if missing.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
