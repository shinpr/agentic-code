#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Parse command line arguments
const args = process.argv.slice(2);
const projectName = args[0];

// Show help if no project name provided
if (!projectName) {
  console.log(`
🤖 Agentic Code - Task-oriented context engineering framework

Usage:
  npx github:shinpr/agentic-code <project-name>

Examples:
  npx github:shinpr/agentic-code my-project

Skills include language-specific references (e.g., .agents/skills/coding-rules/references/typescript.md)
`);
  process.exit(1);
}

// Validate project name
if (!/^[a-zA-Z0-9_-]+$/.test(projectName)) {
  console.error('❌ Project name can only contain letters, numbers, hyphens, and underscores.');
  process.exit(1);
}

// Check if directory already exists
if (fs.existsSync(projectName)) {
  console.error(`❌ Directory '${projectName}' already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating Agentic Code project: ${projectName}\n`);

try {
  // Create project directory
  fs.mkdirSync(projectName, { recursive: true });

  // Get the template directory (current package location)
  const templateDir = path.dirname(__dirname);

  // Copy template files
  console.log('📁 Copying template files...');
  copyDirectory(templateDir, projectName, ['.git', 'node_modules', 'bin']);

  // Navigate to project directory
  process.chdir(projectName);

  // Initialize git repository
  console.log('📦 Initializing Git repository...');
  execSync('git init', { stdio: 'inherit' });

  // Create initial commit
  console.log('💾 Creating initial commit...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "feat: Initialize Agentic Code project"', { stdio: 'inherit' });

  console.log(`\n🎉 Project '${projectName}' created successfully!`);
  console.log('\n📚 Next steps:');
  console.log(`   cd ${projectName}`);
  console.log('   1. Read AGENTS.md to understand the framework');
  console.log('   2. Start with: open .agents/tasks/task-analysis.md');
  console.log('   3. Skills are in .agents/skills/');
  console.log('\n💡 Need help? Check the documentation or open an issue on GitHub.');

} catch (error) {
  console.error('❌ Error creating project:', error.message);

  // Cleanup on error
  if (fs.existsSync(projectName)) {
    try {
      fs.rmSync(projectName, { recursive: true, force: true });
    } catch (cleanupError) {
      console.error('❌ Error during cleanup:', cleanupError.message);
    }
  }

  process.exit(1);
}

// Helper function to copy directory recursively
function copyDirectory(src, dest, excludeDirs = []) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (excludeDirs.includes(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath, excludeDirs);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
