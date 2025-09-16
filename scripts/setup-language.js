#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const languages = {
  typescript: {
    name: 'TypeScript',
    rulesExist: true,
    testingExist: true
  }
};

const args = process.argv.slice(2);
const selectedLang = args[0] || 'typescript';

if (!languages[selectedLang]) {
  console.error(`Language '${selectedLang}' is not supported.`);
  console.log('Supported languages:', Object.keys(languages).join(', '));
  process.exit(1);
}

const langConfig = languages[selectedLang];
const langPath = path.join(__dirname, '..', '.agents', 'rules', 'language');
const sourcePath = path.join(langPath, selectedLang);
const targetRulesPath = path.join(langPath, 'rules.md');
const targetTestingPath = path.join(langPath, 'testing.md');

console.log(`Setting up ${langConfig.name} as the project language...`);

// Check if source language directory exists
if (!fs.existsSync(sourcePath)) {
  if (langConfig.placeholder) {
    console.log(`Note: ${langConfig.name} rules are not yet implemented.`);
    console.log('Creating placeholder files...');

    // Create placeholder rules
    const placeholderRules = `# ${langConfig.name} Development Rules

This is a placeholder file. ${langConfig.name}-specific rules will be added in future updates.

## Basic Principles

Follow general programming best practices:
- Clear naming conventions
- Proper error handling
- Comprehensive testing
- Code documentation

Refer to .agents/rules/core/ for language-agnostic guidelines.
`;

    const placeholderTesting = `# ${langConfig.name} Testing Guidelines

This is a placeholder file. ${langConfig.name}-specific testing guidelines will be added in future updates.

## Testing Standards

- Write comprehensive tests
- Achieve adequate coverage
- Test edge cases
- Mock external dependencies

Refer to .agents/tasks/quality-assurance.md for general quality guidelines.
`;

    // Ensure source directory exists
    if (!fs.existsSync(sourcePath)) {
      fs.mkdirSync(sourcePath, { recursive: true });
    }

    // Write placeholder files
    fs.writeFileSync(path.join(sourcePath, 'rules.md'), placeholderRules);
    fs.writeFileSync(path.join(sourcePath, 'testing.md'), placeholderTesting);
  } else {
    console.error(`Language directory '${sourcePath}' not found.`);
    process.exit(1);
  }
}

// Copy or link files
try {
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

  console.log(`✓ ${langConfig.name} has been set as the active language.`);
  console.log('  - .agents/rules/language/rules.md → ' + selectedLang + '/rules.md');
  console.log('  - .agents/rules/language/testing.md → ' + selectedLang + '/testing.md');
} catch (error) {
  console.error('Error setting up language:', error.message);
  process.exit(1);
}