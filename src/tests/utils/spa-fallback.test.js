import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const originalCwd = process.cwd();
let tempDir = "";

const importBuildHelper = async () => {
  await import(
    `${pathToFileURL(join(originalCwd, "scripts/create-spa-fallback.mjs")).href}?test=${Date.now()}-${Math.random()}`
  );
};

const setupBuildOutput = () => {
  tempDir = mkdtempSync(join(tmpdir(), "spa-fallback-"));
  const distDir = join(tempDir, "dist");

  process.chdir(tempDir);
  mkdirSync(distDir);
  writeFileSync(join(distDir, "index.html"), "<main>app shell</main>");

  return distDir;
};

afterEach(() => {
  process.chdir(originalCwd);

  if (tempDir) {
    rmSync(tempDir, { force: true, recursive: true });
    tempDir = "";
  }
});

describe("SPA fallback build helper", () => {
  it("copies dist index.html to dist 404.html", async () => {
    const distDir = setupBuildOutput();

    await importBuildHelper();

    expect(existsSync(join(distDir, "404.html"))).toBe(true);
    expect(readFileSync(join(distDir, "404.html"), "utf8")).toBe("<main>app shell</main>");
  });

  it("copies GitHub Pages domain marker files when present", async () => {
    const distDir = setupBuildOutput();

    writeFileSync(join(tempDir, "CNAME"), "scarface-666.pw");
    writeFileSync(join(tempDir, ".nojekyll"), "");

    await importBuildHelper();

    expect(readFileSync(join(distDir, "CNAME"), "utf8")).toBe("scarface-666.pw");
    expect(existsSync(join(distDir, ".nojekyll"))).toBe(true);
  });
});
