import { copyFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const staticFiles = ["CNAME", ".nojekyll"];

await copyFile(join(distDir, "index.html"), join(distDir, "404.html"));

await Promise.all(
  staticFiles.map(async (fileName) => {
    try {
      await copyFile(join(process.cwd(), fileName), join(distDir, fileName));
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  })
);
