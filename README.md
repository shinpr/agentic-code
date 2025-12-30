# Agentic Code

Your AI (LLM), guided by built-in workflows. Describe what you want, and it follows a professional development process.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compliant-blue.svg)](https://agents.md)
[![Version](https://img.shields.io/badge/version-0.6.2-blue.svg)](package.json)

![Demo: Building a Slack bot with Agentic Code](.github/assets/demo.gif)

*AI builds a Slack bot with tests & docs — in 30s*

## What You Get

```
You: "Build a Slack bot with Gemini API"
AI:  ✓ Reads AGENTS.md
     ✓ Analyzes requirements
     ✓ Plans architecture
     ✓ Writes tests first
     ✓ Implements with best practices
     ✓ Verifies everything works
```

**Works out of the box—no configuration or learning curve required.**

> **Using Claude Code with TypeScript?**  
> Check out **[AI Coding Project Boilerplate](https://github.com/shinpr/ai-coding-project-boilerplate)** - a specialized alternative optimized for that specific stack.

## Quick Start (30 seconds)

```bash
npx agentic-code my-project && cd my-project
# Ready to go
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
Pre-built workflows that work without setup.

### 🌐 **Universal Compatibility**
Works with any programming language and any AI tool that reads AGENTS.md.

### ✅ **Test-First by Default**
Generates test skeletons before writing implementation code.

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
└── skills/                  # Quality standards (Codex-compatible)
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
npx agentic-code my-project
```

### For Existing Projects
```bash
# Copy the framework files
cp -r path/to/agentic-code/AGENTS.md .
cp -r path/to/agentic-code/.agents .
```

### Skills

`.agents/skills/` contains reusable skill files in the [Codex Skills format](https://github.com/openai/codex/blob/main/docs/skills.md). Each skill has a `SKILL.md` with instructions that AI agents can discover and apply.

**Codex**: Install skills for Codex CLI:

```bash
# User scope (all projects)
npx agentic-code-install-skills --codex
# Installs to ~/.codex/skills/agentic-code/

# Project scope (current project only)
npx agentic-code-install-skills --codex --project
# Installs to ./.codex/skills/agentic-code/

# Custom path
npx agentic-code-install-skills --path ./custom/skills
# Installs to ./custom/skills/agentic-code/
```

## Common Questions

**Q: Can I use this with other AI coding tools besides Codex?**  
Yes! This framework works with any AGENTS.md-compatible tool like Cursor, Aider, and other LLM-assisted development environments.

**Q: What programming languages are supported?**
The framework is language-agnostic and works with any programming language through general development principles. TypeScript-specific rules are available in `skills/*/references/typescript.md`.

**Q: Do I need to learn a new syntax?**  
No. Describe what you want in plain language; the framework handles the rest.

**Q: What if my AI doesn't support AGENTS.md?**  
Check if your tool is [AGENTS.md compatible](https://agents.md). If so, point it to the AGENTS.md file first.

**Q: Can I customize the workflows?**  
Yes, everything in `.agents/` is customizable. The defaults are production-ready, but you can adapt them to your team's process.

**Q: What about my existing codebase?**  
It works with existing projects. Your AI analyzes the code and follows your established patterns.

## The Technical Stuff

The framework has three pillars:

1. **Tasks** - Define WHAT to build
2. **Workflows** - Define HOW to build it
3. **Skills** - Define quality STANDARDS

<details>
<summary>Advanced features for the curious...</summary>

### Progressive Skill Loading
Skills load based on task analysis:
- Small (1-2 files) → Direct execution with minimal skills
- Medium/Large (3+ files) → Structured workflow with design docs
- Each task definition specifies its required skills

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

## Reviewing Generated Outputs

**Important: Always review AI-generated outputs in a separate session.**

LLMs cannot reliably review their own outputs within the same context. When the AI generates code or documents, it carries the same assumptions and blind spots into any "self-review." This leads to missed issues that a fresh perspective would catch.

### Why Separate Sessions Matter

| Same Session | New Session |
|--------------|-------------|
| Shares context and assumptions | Fresh perspective, no prior bias |
| May overlook own mistakes | Catches issues objectively |
| "Confirmation bias" in review | Applies standards independently |

### How to Use Review Tasks

After completing implementation or documentation, start a **new session** and request a review:

```bash
# For code review
You: "Review the implementation in src/auth/ against docs/design/auth-design.md"
# AI loads code-review task → Validates against Design Doc → Reports findings

# For document review
You: "Review docs/design/payment-design.md as a Design Doc"
# AI loads technical-document-review task → Checks structure and content → Reports gaps

# For test review
You: "Review the integration tests in tests/integration/auth.test.ts"
# AI loads integration-test-review task → Validates test quality → Reports issues
```

### Available Review Tasks

| Task | Target | What It Checks |
|------|--------|----------------|
| `code-review` | Implementation files | Design Doc compliance, code quality, architecture |
| `technical-document-review` | Design Docs, ADRs, PRDs | Structure, content quality, failure scenarios |
| `integration-test-review` | Integration/E2E tests | Skeleton compliance, AAA structure, mock boundaries |

**Pro tip:** Make reviews part of your workflow. After any significant generation, switch sessions and review before merging.

### For Cursor Users: Isolated Context Reviews via MCP

Cursor users can run reviews in isolated contexts without switching sessions using [`sub-agents-mcp`](https://github.com/shinpr/sub-agents-mcp). When review runs as a sub-agent, it executes in a completely separate context—achieving the same "fresh perspective" benefit as switching sessions, but without leaving your workflow.

**Quick Setup:**

Add to your MCP config (`~/.cursor/mcp.json` or `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "sub-agents": {
      "command": "npx",
      "args": ["-y", "sub-agents-mcp"],
      "env": {
        "AGENTS_DIR": "/absolute/path/to/your/project/.agents/tasks",
        "AGENT_TYPE": "cursor"
      }
    }
  }
}
```

After restarting Cursor, task definitions become available as sub-agents:

```bash
You: "Use the code-review agent to review src/auth/ against docs/design/auth-design.md"
```

## Start Building

```bash
npx agentic-code my-awesome-project
cd my-awesome-project
# Tell your AI what to build
```

**Consistent, professional AI-assisted development.**

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

**Ready to code properly with AI?** `npx agentic-code my-project`
