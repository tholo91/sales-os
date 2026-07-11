import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

test("workspace is ignored while templates remain tracked", () => {
  const ignored = fs.readFileSync(path.join(root, ".gitignore"), "utf8").split(/\r?\n/);
  assert.ok(ignored.includes("workspace/"));
  assert.ok(fs.existsSync(path.join(root, "templates", "project.md")));
});

test("all skills forbid automatic external action through root policy", () => {
  const policy = fs.readFileSync(path.join(root, "AGENTS.md"), "utf8");
  assert.match(policy, /Do not send, post, vote, scrape, bulk-enrich/);
  assert.match(policy, /real person, organization, or discussion/);
});

test("unverified imported claims are quarantined", () => {
  const register = fs.readFileSync(path.join(root, "knowledge/evidence/claims-register.md"), "utf8");
  assert.match(register, /unverified/);
  assert.match(register, /unsafe simplification/);
  assert.match(register, /LinkedIn has a safe daily invitation cap/);
});

test("host adapters point to the canonical skills", () => {
  for (const relative of ["CLAUDE.md", "GEMINI.md", ".cursor/rules/sales-os.mdc"]) {
    assert.match(fs.readFileSync(path.join(root, relative), "utf8"), /.agents\/skills/);
  }
});

