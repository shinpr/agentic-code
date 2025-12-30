#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Parse command line arguments
const args = process.argv.slice(2);

// Scope types
const SCOPES = {
  user: 'user',
  project: 'project'
};

// Get target directory based on target and scope
function getTargetDir(targetKey, scope) {
  if (targetKey === 'codex') {
    if (scope === SCOPES.project) {
      return path.join(process.cwd(), '.codex', 'skills');
    }
    // User scope: respect CODEX_HOME environment variable
    const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
    return path.join(codexHome, 'skills');
  }
  return null;
}

// Target configurations
const TARGETS = {
  codex: {
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
  --codex         Install skills to Codex CLI (default)
  --project       Install to project scope instead of user scope
  --path <path>   Install to custom path
  --help          Show this help message

Scopes:
  user (default)  Install to user directory (~/.codex/skills/ or $CODEX_HOME/skills/)
  project         Install to current project (./.codex/skills/)

Examples:
  agentic-code-install-skills                    # Install to ~/.codex/skills/ (user scope)
  agentic-code-install-skills --codex            # Same as above (explicit)
  agentic-code-install-skills --codex --project  # Install to ./.codex/skills/ (project scope)
  agentic-code-install-skills --path ./my-skills # Install to ./my-skills/agentic-code
`);
  process.exit(0);
}

// Parse --path option
function getCustomPath() {
  const pathIndex = args.indexOf('--path');
  if (pathIndex === -1) return null;

  const customPath = args[pathIndex + 1];
  if (!customPath || customPath.startsWith('-')) {
    console.error('Error: --path requires a path argument');
    process.exit(1);
  }
  return path.resolve(customPath);
}

const customPath = getCustomPath();

// Determine target (default: codex)
let targetKey = customPath ? 'custom' : 'codex';
if (args.includes('--codex')) {
  targetKey = customPath ? 'custom' : 'codex';
}

// Determine scope (default: user)
const scope = args.includes('--project') ? SCOPES.project : SCOPES.user;

// Get skills directory
let skillsDir;
let target;

if (customPath) {
  skillsDir = customPath;
  target = {
    name: 'agentic-code',
    description: 'custom path',
    postInstall: null
  };
} else {
  target = TARGETS[targetKey];
  if (!target) {
    console.error(`Error: Unknown target '${targetKey}'`);
    process.exit(1);
  }
  skillsDir = getTargetDir(targetKey, scope);
  if (!skillsDir) {
    console.error(`Error: Cannot determine target directory for '${targetKey}'`);
    process.exit(1);
  }
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

  const targetDir = path.join(skillsDir, target.name);
  const scopeLabel = customPath ? 'custom' : (scope === SCOPES.project ? 'project' : 'user');

  console.log(`Installing Agentic Code skills to ${target.description} (${scopeLabel})...\n`);
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}\n`);

  // Create target parent directory if not exists
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
    console.log(`Created: ${skillsDir}`);
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
