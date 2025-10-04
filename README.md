# Agentic Code

Your AI (LLM), guided by built-in workflows. Just tell it what you want.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compliant-blue.svg)](https://agents.md)
[![Version](https://img.shields.io/badge/version-0.2.1-blue.svg)](package.json)

![Demo: Building a Slack bot with Agentic Code](.github/assets/demo.gif)

*AI builds a Slack bot with tests & docs — in 30s*

## What You Get

```
You: "Build a Slack bot with Gemini API"
AI:  ✓ Reads AGENTS.md
     ✓ Analyzes requirements
     ✓ Plans architecture
     ✓ Writes tests first (NEW in v0.2)
     ✓ Implements with best practices
     ✓ Verifies everything works
```

**No configuration. No learning curve. Just results.**

> **Using Claude Code with TypeScript?**
> Check out **[AI Coding Project Boilerplate](https://github.com/shinpr/ai-coding-project-boilerplate)** - a specialized alternative optimized for that specific stack.

## Quick Start (30 seconds)

```bash
npx github:shinpr/agentic-code my-project && cd my-project
# 🚀 Ready. Just tell it what to build.
```

That's it. Works with **any AI tool** - Codex, Cursor, Aider, or anything [AGENTS.md](https://agents.md) compatible.

## Why This Exists

Every AI coding tool has the same problems:
- Forgets your project structure after 10 messages
- Deletes tests when adding features
- Ignores architectural decisions
- Skips quality checks

**We built the solution into the framework.** AGENTS.md guides your AI through professional workflows automatically.

## What Makes It Different

### 🎯 **Zero Configuration**
Pre-built workflows. No setup needed.

### 🌐 **Universal Compatibility**
Any programming language. Any AI tool that reads AGENTS.md.

### ✅ **Test-First by Default** (NEW in v0.2)
Generates test skeletons before code.

### 📈 **Smart Scaling**
- Simple task → Direct execution
- Complex feature → Full workflow with approvals

## How It Actually Works

1. **AGENTS.md tells your AI the process** - Like a README but for AI agents
2. **Progressive rule loading** - Only loads what's needed, when needed
3. **Quality gates** - Automatic checkpoints ensure consistent output
4. **You stay in control** - Approval points for major decisions

```
.agents/
├── tasks/                   # What to build
│   ├── task-analysis.md     # Entry point - AI starts here
│   └── ...                  # Design, test, implement, QA tasks
├── workflows/               # How to build it
└── rules/                   # Quality standards
```

## Real Examples

### Simple Task
```bash
You: "Add API endpoint for user search"
# AI: Reads existing code → Plans changes → Tests → Implements → Done
```

### Complex Feature
```bash
You: "Build user authentication system"
# AI: Requirements → Design doc → Your approval → Test skeletons →
#     Implementation → Quality checks → Done
```

## Installation Options

### For New Projects
```bash
# Create project
npx github:shinpr/agentic-code my-project

# Optional: Add language-specific rules
npx github:shinpr/agentic-code my-project --lang=typescript
```

### For Existing Projects
```bash
# Copy the framework files
cp -r path/to/agentic-code/AGENTS.md .
cp -r path/to/agentic-code/.agents .

# Set up language rules (choose one)
cd .agents/rules/language
ln -s general/rules.md rules.md
ln -s general/testing.md testing.md
```

## Common Questions

**Q: Can I use this with other AI coding tools besides Codex?**
Yes! This framework works with any AGENTS.md-compatible tool like Cursor, Aider, and other LLM-assisted development environments.

**Q: What programming languages are supported?**
The framework is language-agnostic and works with any programming language through general development principles. For TypeScript projects, you can optionally use `--lang=typescript` to enable enhanced TypeScript-specific rules.

**Q: Do I need to learn a new syntax?**
Nope. Just describe what you want in plain language. The framework handles the rest.

**Q: What if my AI doesn't support AGENTS.md?**
Check if your tool is [AGENTS.md compatible](https://agents.md). If yes, just tell it to read the AGENTS.md file first.

**Q: Can I customize the workflows?**
Absolutely! Everything in `.agents/` is customizable. But honestly, the defaults work great.

**Q: What about my existing codebase?**
Works perfectly. Your AI analyzes the code and follows your existing patterns.

## The Technical Stuff

The framework has three pillars:

1. **Tasks** - Define WHAT to build
2. **Workflows** - Define HOW to build it
3. **Rules** - Define quality STANDARDS

<details>
<summary>Advanced features for the curious...</summary>

### Progressive Rule Loading
Rules load based on task analysis:
- Small (1-2 files) → Direct execution with minimal rules
- Medium/Large (3+ files) → Structured workflow with design docs
- Each task definition specifies its required rules

### Quality Gates
Automatic checkpoints ensure:
- Tests pass before proceeding
- Code meets standards
- Documentation stays updated

### Special Features
- **Metacognition** - AI self-assessment and error recovery
- **Plan Injection** - Enforces all required steps are in work plan
- **Test Generation** - Test skeletons from acceptance criteria
- **1-Commit Principle** - Each task = one atomic commit

</details>

## Start Building

```bash
npx github:shinpr/agentic-code my-awesome-project
cd my-awesome-project
# Tell your AI what to build
```

**No more chaotic AI coding sessions. Just reliable, professional development.**

---

## Contributing

Found a bug? Want to add language-specific rules? PRs welcome!

- 🐛 [Report issues](https://github.com/shinpr/agentic-code/issues)
- 🔧 [Submit PRs](https://github.com/shinpr/agentic-code/pulls)
- 📚 [Improve docs](https://github.com/shinpr/agentic-code/pulls)

## License

MIT - Use it however you want.

---

Built on the [AGENTS.md standard](https://agents.md) — an open community specification for AI coding agents.

**Ready to code properly with AI?** `npx github:shinpr/agentic-code my-project`