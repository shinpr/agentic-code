# Agentic Code

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compatible-blue.svg)](https://agents.md)
[![Version](https://img.shields.io/badge/version-0.7.3-blue.svg)](package.json)

Agentic Code is a set of instruction files for coding agents that read `AGENTS.md`, such as Cursor, Codex CLI, and Gemini CLI. You add the files to a repository, describe a change in plain words, and the agent works through it with a process sized to that change. A small fix goes straight to implementation. A change that crosses several parts of the system gets a design and a plan first.

The files shape how the agent works inside your repository. They do not generate an application.

## What you get

Current coding agents can carry most changes to the end on their own. The trouble is usually the process around them: they build more than you asked for, stop to ask about details you don't care about, or call a task done without showing it works. Agentic Code is tuned against those failures.

Scope stays where you put it. The agent records what you want and what you ruled out, then keeps to both. When existing code already covers most of a request, it tells you before building the rest, and "nothing needs to change" is an acceptable answer.

You are asked about what you want, not how it gets built. Questions are reserved for your requirements, permissions only you can give, and actions that can't be undone. Once you let implementation start, the agent carries it through without asking again for each technical detail.

Done means shown to work. Before finishing, the agent runs your repository's own tests and checks. Each changed behavior is proven by one test at the place where you would notice it, so the suite doesn't fill up with duplicates.

Review feedback is weighed before it becomes work. Required fixes are applied, optional extras are declined with a reason, and anything that would change what you asked for comes back to you.

## Quick start

Requires Node.js 22 or later.

```bash
npx agentic-code my-project
cd my-project
```

This creates `my-project` with `AGENTS.md` and the `.agents/` directory, initializes Git, and makes a first commit. Open the directory with your coding agent and describe the change:

```text
Add an API endpoint for user search without changing the existing response contract.
```

Saying what must stay the same, like the response contract here, helps the agent as much as saying what to build.

## Add it to an existing repository

Copy the two entries into the repository root:

```bash
cp /path/to/agentic-code/AGENTS.md .
cp -R /path/to/agentic-code/.agents .
```

Then skim the defaults against how your project builds and tests. Where they differ, your repository's own commands and conventions win.

## How a request is handled

The agent reads the relevant code first and judges the size of the change by what it has to decide, not by how many files it touches.

- **Small**: one change that follows existing patterns. The agent implements and verifies it directly.
- **Medium**: one change that crosses parts of the system or needs a design decision later work will live with. The agent writes a design doc, checks with you that it matches what you want, then writes a work plan. You give the go-ahead once, and implementation runs to the end.
- **Large**: several outcomes that are each useful on their own. A product requirements document comes before the design.

Every route ends with your repository's checks and a review of the change.

## Asking for a review

You can also ask for a review by itself:

```text
Review src/auth/ against docs/design/auth-design.md.
Review docs/design/payment-design.md as a Design Doc.
Review the integration tests in tests/integration/auth.test.ts.
```

For important changes, run the review in a new session so it isn't colored by the conversation that produced the code. Point it at the requirements or design doc, the changed files, and the test results.

## Install only the skills

The `skills` command copies the coding, testing, and documentation guidance in `.agents/skills/` into your tool's skill directory, without the `AGENTS.md` workflow.

```bash
npx agentic-code skills --codex             # Codex, user scope
npx agentic-code skills --codex --project   # Codex, current project
npx agentic-code skills --cursor            # Cursor, user scope
npx agentic-code skills --cursor --project  # Cursor, current project
npx agentic-code skills --path ./custom/skills
```

Run `npx agentic-code skills --help` for the target paths and other options.

## Compatible tools

Agentic Code works with tools that read a repository-level `AGENTS.md`. Cursor, Codex CLI, and Gemini CLI are common examples. How each tool discovers instructions and skills depends on its version.

If you primarily use Codex and want a Codex-native setup with custom agents and isolated review contexts, see [codex-workflows](https://github.com/shinpr/codex-workflows).

## When to skip it

The files add process and context to every session. For a well-scoped fix, a throwaway experiment, or a one-off script, a plain agent session is usually cheaper. Agentic Code pays off when a change crosses parts of the system or leaves a decision that later work has to understand.

The guidance is language-agnostic, with extra references for TypeScript. Other languages rely on the commands and conventions already in your repository.

## Contributing

Issues and pull requests are welcome:

- [Report an issue](https://github.com/shinpr/agentic-code/issues)
- [Submit a pull request](https://github.com/shinpr/agentic-code/pulls)

## License

MIT. See [LICENSE](LICENSE).

Built on the [AGENTS.md specification](https://agents.md).
