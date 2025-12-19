#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Parse command line arguments
const args = process.argv.slice(2);

// Target configurations
const TARGETS = {
  codex: {
    dir: path.join(os.homedir(), '.codex', 'skills'),
    name: 'agentic-code',
    description: 'OpenAI Codex CLI',
    postInstall: 'Restart Codex to load the skills.\nNote: Enable skills with --enable skills flag or in config.toml'
  }
  // Future targets can be added here
};

// Show help
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: agentic-code-install-skills [options]

Options:
  --codex    Install skills to ~/.codex/skills/.agentic-code (default)
  --help     Show this help message

Examples:
  agentic-code-install-skills           # Install to Codex (default)
  agentic-code-install-skills --codex   # Install to Codex (explicit)
`);
  process.exit(0);
}

// Determine target (default: codex)
let targetKey = 'codex';
if (args.includes('--codex')) {
  targetKey = 'codex';
}

const target = TARGETS[targetKey];
if (!target) {
  console.error(`Error: Unknown target '${targetKey}'`);
  process.exit(1);
}

// Get source directory (from installed package or local)
function getSourceSkillsDir() {
  // When run from npx or installed globally
  const packageSkillsDir = path.join(__dirname, '..', '.agents', 'skills');
  if (fs.existsSync(packageSkillsDir)) {
    return packageSkillsDir;
  }

  // When run from project directory
  const localSkillsDir = path.join(process.cwd(), '.agents', 'skills');
  if (fs.existsSync(localSkillsDir)) {
    return localSkillsDir;
  }

  return null;
}

// Copy directory recursively
function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main
function main() {
  const sourceDir = getSourceSkillsDir();

  if (!sourceDir) {
    console.error('Error: .agents/skills directory not found.');
    process.exit(1);
  }

  const targetDir = path.join(target.dir, target.name);

  console.log(`Installing Agentic Code skills to ${target.description}...\n`);
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}\n`);

  // Create target parent directory if not exists
  if (!fs.existsSync(target.dir)) {
    fs.mkdirSync(target.dir, { recursive: true });
    console.log(`Created: ${target.dir}`);
  }

  // Remove existing target directory
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
    console.log(`Removed existing: ${targetDir}`);
  }

  // Copy skills
  copyDirectory(sourceDir, targetDir);

  // List installed skills
  const skills = fs.readdirSync(targetDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  console.log(`\nInstalled ${skills.length} skills:`);
  skills.forEach(skill => console.log(`  - ${skill}`));

  console.log('\nDone.');
  if (target.postInstall) {
    console.log(target.postInstall);
  }
}

main();
