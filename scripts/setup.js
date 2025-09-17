#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Parse command line arguments for language option
const args = process.argv.slice(2);
const langOption = args.find(arg => arg.startsWith('--lang='));
const selectedLang = langOption ? langOption.split('=')[1] : 'general';

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

// Set up language configuration
const languageNames = {
  general: 'General (language-agnostic)',
  typescript: 'TypeScript'
};

const languageName = languageNames[selectedLang] || selectedLang;
console.log(`⚙️  Setting up ${languageName} configuration...`);

try {
  const langPath = path.join(__dirname, '..', '.agents', 'rules', 'language');
  const sourcePath = path.join(langPath, selectedLang);
  const targetRulesPath = path.join(langPath, 'rules.md');
  const targetTestingPath = path.join(langPath, 'testing.md');

  // Check if source directory exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Language '${selectedLang}' is not supported.`);
    console.log('Available languages: general, typescript');
    process.exit(1);
  }

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

  console.log(`✓ ${languageName} has been set as the active language.`);
  console.log(`  - .agents/rules/language/rules.md → ${selectedLang}/rules.md`);
  console.log(`  - .agents/rules/language/testing.md → ${selectedLang}/testing.md\n`);
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