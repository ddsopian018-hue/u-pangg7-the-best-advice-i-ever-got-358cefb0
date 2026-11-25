import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The best advice I ever got, as one sentence.
const sentence =
  "My grandfather wiped grease off his hands after fixing neighbour's truck for free and told me, charge for the work, never for the kindness, because trucks break again and people remember kindness.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || join(process.cwd(), "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
