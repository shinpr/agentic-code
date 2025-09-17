#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// TypeScript only for now
const selectedLang = 'typescript';

console.log('🚀 Setting up Agentic Code framework...\n');

// Check if we're in a Git repository
function isGitRepo() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Initialize Git repository if not exists
if (!isGitRepo()) {
  console.log('📁 Initializing Git repository...');
  try {
    execSync('git init', { stdio: 'inherit' });
    console.log('✓ Git repository initialized\n');
  } catch (error) {
    console.error('❌ Failed to initialize Git repository:', error.message);
  }
}

// Set up TypeScript language configuration
console.log('⚙️  Setting up TypeScript language configuration...');
try {
  const langPath = path.join(__dirname, '..', '.agents', 'rules', 'language');
  const sourcePath = path.join(langPath, 'typescript');
  const targetRulesPath = path.join(langPath, 'rules.md');
  const targetTestingPath = path.join(langPath, 'testing.md');

  // Remove existing symlinks if they exist
  if (fs.existsSync(targetRulesPath)) {
    fs.unlinkSync(targetRulesPath);
  }
  if (fs.existsSync(targetTestingPath)) {
    fs.unlinkSync(targetTestingPath);
  }

  // Create new symlinks
  fs.symlinkSync(path.join(sourcePath, 'rules.md'), targetRulesPath);
  fs.symlinkSync(path.join(sourcePath, 'testing.md'), targetTestingPath);

  console.log('✓ TypeScript has been set as the active language.');
  console.log('  - .agents/rules/language/rules.md → typescript/rules.md');
  console.log('  - .agents/rules/language/testing.md → typescript/testing.md\n');
} catch (error) {
  console.error('❌ Failed to setup language configuration:', error.message);
}

// Success message
console.log('🎉 Agentic Code framework is ready to use!');
console.log('\n📚 Quick Start:');
console.log('   1. Read AGENTS.md to understand the framework');
console.log('   2. Start with task analysis: .agents/tasks/task-analysis.md');
console.log('   3. Follow the task-rule-matrix for complex workflows');
console.log('\n💡 Need help? Check the documentation or open an issue on GitHub.');