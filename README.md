# 🤖 Agentic Code

> Task-oriented context engineering framework for LLM coding agents - [AGENTS.md standard](https://agents.md) compliant

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compliant-blue.svg)](https://agents.md)

Transform chaotic AI coding sessions into systematic, reliable workflows with structured task definitions, progressive rule loading, and built-in quality gates (mandatory checkpoints).

**What is AGENTS.md?** An open standard developed by OpenAI, Google, Cursor, and industry leaders - think "README for AI agents" that ensures compatibility across all major AI coding tools.

**Examples of problems this solves:** LLMs ignoring tests, inconsistent code quality, skipping important steps, or failing at complex multi-file tasks.

## 🚀 Quick Start

**Get started in 3 simple steps**:

```bash
# 1. Create project
npx github:shinpr/agentic-code my-project                    # General (works with any language)
npx github:shinpr/agentic-code my-project --lang=typescript  # TypeScript-specific rules

# 2. Enter directory
cd my-project

# 3. Launch your AI coding agent
codex  # OpenAI Codex CLI (recommended)
# Or: cursor, aider, github copilot, etc.
```

**First time?** → Your AI agent can read `AGENTS.md` for framework guidance.

## Table of Contents

### 📋 **Basics**
- [Why Agentic Code?](#-why-agentic-code) - Problem & solution overview
- [Who Should Use This?](#-who-should-use-this) - Target audiences
- [Supported LLM Coding Agents](#-supported-llm-coding-agents) - Compatible tools

### 🛠 **Implementation**
- [Core Principles](#-core-principles) - Framework foundations
- [Quick Implementation Guide](#-quick-implementation-guide) - Step-by-step usage
- [Project Structure](#-project-structure) - Directory organization

### 🏗 **Advanced**
- [Architecture & Design](#-architecture--design) - Technical details
- [Development Workflow](#-development-workflow) - Commands & processes
- [FAQ](#-faq) - Common questions
- [Contributing](#-contributing) - How to help
- [License](#-license) - Legal info

## 💡 Why Agentic Code?

**The Problem**: LLM coding agents often produce inconsistent results, skip important steps, or fail to maintain quality standards across different tasks and scales.

**Our Solution**: A systematic framework that transforms ad-hoc AI interactions into reliable, structured workflows.

## 👥 Who Should Use This?

**Perfect for:**
- **Individual Developers** - Improve AI coding consistency and reduce debugging time
- **Startup Teams** - Establish systematic development practices from day one

**Especially valuable if you:**
- Use AI coding tools regularly (Codex, Cursor, GitHub Copilot, etc.)
- Want predictable, high-quality AI coding sessions
- Need systematic task management for complex features
- Appreciate structured development methodologies like TDD

### Unique Advantages

🎯 **Task-Oriented Design** - Every action starts with proper task analysis and clear definitions
🔄 **Progressive Rule Loading** - Load only relevant rules based on task type and scale (not all at once)
🚪 **Built-in Quality Gates** - Mandatory checkpoints that help ensure consistent output quality
📈 **Scalable Workflows** - Seamlessly handle single-file changes to multi-component features
🧠 **Metacognitive Framework** - Built-in self-assessment and error recovery mechanisms

## 🤖 Supported LLM Coding Agents

This framework is designed to work with **any [AGENTS.md standard](https://agents.md) compliant** coding agent.

## 🔧 Core Principles

### Universal Entry Point
Every request starts with **task-analysis.md** to determine the appropriate path:

- **Small Scale (1-2 files)**: Direct task execution
- **Medium/Large Scale (3+ files)**: Structured workflow with approval gates

### Progressive Context Management
- Load rules progressively, not all at once
- Task definitions specify required rules
- Unload task-specific rules after completion

### Quality-First Approach
- All tests must pass before task completion
- Strict error-free requirement before task completion
- Built-in TDD process for code changes

## 📋 Quick Implementation Guide

### 1. Start Any Task
```bash
# Always begin here
open .agents/tasks/task-analysis.md
```

### 2. Follow the Analysis Results
```yaml
# Small Task Example
Task Type: Single Feature Implementation
Scale: 1-2 files
Path: Direct → .agents/tasks/implementation.md

# Complex Task Example
Task Type: Multi-Component Feature
Scale: 5+ files
Path: Workflow → .agents/workflows/agentic-coding.md
```

### 3. Apply Rules Progressively
```bash
# Core rules (always loaded)
.agents/rules/core/metacognition.md

# Language-specific (based on project)
.agents/rules/language/rules.md

# Contextual (based on task type)
.agents/rules/contextual/architecture/implementation-approach.md
```

## 📁 Project Structure

```
.agents/
├── tasks/                    # Task definitions (WHAT to build)
│   ├── task-analysis.md     # 🚀 Universal entry point
│   ├── implementation.md    # Code implementation guidelines
│   ├── technical-design.md  # Design documentation
│   └── quality-assurance.md # Quality standards
├── workflows/               # Multi-step processes
│   └── agentic-coding.md    # Medium/Large scale workflow
├── rules/                   # Progressive rule system
│   ├── core/               # Always-active rules
│   ├── language/           # Language-specific rules
│   └── contextual/         # Task-specific rules
└── context-maps/           # Rule selection guidance
    └── task-rule-matrix.yaml
```

## 🏗 Architecture & Design

### Task Definition System
- **Task definitions define WHAT to build** - never skip them
- Entry and exit conditions for every task
- Built-in approval points for significant milestones

### Rule Application Framework
- Rules are loaded based on task analysis results
- Contextual rules activate only when needed
- Clear unloading mechanism prevents context bloat

### Quality Assurance Pipeline
- TDD process integration
- Automated quality checks
- Mandatory testing standards

## 🛠 Development Workflow

### Core Commands
```bash
npm run setup         # Initialize existing project (use CLI for new projects)
```

### Quality Checks
```bash
# Framework recommends running these when applicable:
# - All test suites
# - Type checking
# - Linting
# - Format verification
```

### Workflow Process
1. **Task Analysis** → Determine approach and scale
2. **Rule Loading** → Progressive rule application
3. **Implementation** → Follow task definitions
4. **Quality Gates** → Verify all conditions met
5. **Completion** → Clean up and document

## ❓ FAQ

### Q: Can I use this with any LLM coding tool?
**A**: Yes! This framework works with any AGENTS.md-compatible tool like Cursor, GitHub Copilot, or other LLM-assisted development environments.

### Q: What if my task doesn't fit the predefined categories?
**A**: The task analysis framework is designed to handle edge cases. Start with task-analysis.md - it will guide you to the appropriate approach.

### Q: How do I customize rules for my specific tech stack?
**A**: Choose your language during project creation (`--lang=general` or `--lang=typescript`), and add contextual rules in `.agents/rules/contextual/` as needed.

### Q: What languages are supported?
**A**: The framework supports any language through general development principles (default), plus enhanced TypeScript-specific rules when you use `--lang=typescript`.

### Q: What is the AGENTS.md standard?
**A**: AGENTS.md is an open standard for guiding AI coding agents, developed by OpenAI, Google, Cursor, and other industry leaders. It's like a README for agents - a standardized way to provide context and instructions. Learn more at [agents.md](https://agents.md).

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

**🐛 Found a Bug?** [Open an issue](https://github.com/shinpr/agentic-code/issues) with details about the problem

**💡 Have an Idea?** [Start a discussion](https://github.com/shinpr/agentic-code/discussions) to share your thoughts

**🔧 Want to Code?** [Submit a pull request](https://github.com/shinpr/agentic-code/pulls) - all skill levels welcome

**🌍 Need Language Support?** Help us expand beyond TypeScript by contributing language-specific rules

**📚 Improve Documentation?** Better examples, clearer explanations, and typo fixes are always appreciated

Before contributing, please check our [existing issues](https://github.com/shinpr/agentic-code/issues) to avoid duplicates.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🎯 About This Project

Agentic Code was born from the need to make AI-assisted development more systematic and reliable. Instead of hoping for good results, we built a framework that aims to ensure them.

Built on the **[AGENTS.md standard](https://agents.md)** - an open format for guiding coding agents developed collaboratively by OpenAI, Google, Cursor, Factory, and other industry leaders. This ensures compatibility across the entire ecosystem of AI coding tools.

**Vision**: Every AI coding session should be predictable, high-quality, and aligned with best practices.

**Mission**: Provide the systematic foundation that transforms experimental AI coding into production-ready development workflows.

---

**Ready to transform your AI coding experience?** Start with `npx github:shinpr/agentic-code my-project` and open `AGENTS.md` for your complete guide.