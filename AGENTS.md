# AGENTS.md

## Core Execution Principle

This framework guides task-based development without sub-agents. All work is executed by the main agent using progressive context loading.

## Task Execution Protocol

### Step 1: Task Analysis (ALWAYS FIRST)

Load `.agents/tasks/task-analysis.md` and determine:
- Task type (implementation/research/design/documentation/debugging)
- Task scale: Small (1-2 files), Medium (3-5 files), Large (6+ files)
- Required rules and resources

### Step 2: Development Approach Decision

#### For Implementation Tasks:

**Small Scale (1-2 files):**
```
→ Direct implementation
→ Load: .agents/rules/language/rules.md
→ Reference: implementation.md for guidelines
```

**Medium/Large Scale (3+ files):**
```
→ Ask: "Recommend Agentic Coding (design-driven development). Proceed? [Y/n]"

If YES:
→ Load: .agents/workflows/agentic-coding.md
→ Follow structured workflow:
  1. Create design document
  2. Create work plan with checklist
  3. Implement step by step
  4. Check off completed items (internally)

If NO:
→ Direct implementation with basic planning
```

### Step 3: Rule Loading Strategy

#### Always Loaded:
- `.agents/rules/core/metacognition.md` (at session start)
- `.agents/rules/language/rules.md` (when developing)

#### Conditionally Loaded:
| Situation | Load File | From |
|-----------|-----------|------|
| Development work | ai-development-guide.md | `.agents/rules/core/` |
| Writing tests | testing.md | `.agents/rules/language/` |
| Design needed | documentation-criteria.md | `.agents/rules/core/` |
| Creating design doc | technical-design.md | `.agents/tasks/` |
| Quality check | quality-assurance.md | `.agents/tasks/` |

### Step 4: Execution Guidelines

For each major task:
1. Load relevant task definition
2. Understand completion conditions (not outputs)
3. Execute following the guidelines
4. Verify completion conditions are met
5. Unload task-specific rules

## Task Definitions Structure

Each task file contains:
- **Purpose**: What to clarify/achieve
- **Completion Conditions**: Checklist of what makes this task complete
- **Guidelines**: Key considerations during execution
- **Deliverables** (if any): Files or documents to create

Example:
```
## Completion Conditions
□ User requirements are clear
□ Task scale determined (small/medium/large)
□ Required resources identified
```

## Quality Standards

Before marking any implementation complete:
1. Build succeeds
2. Linting passes (0 errors)
3. Tests pass (if applicable)
4. Format check passes
5. Type/compilation check passes

Commands are language-specific - check `.agents/rules/language/testing.md`

## Metacognition Checkpoints

Perform self-assessment at these points:
- Task type changes (e.g., from design to implementation)
- Unexpected errors occur
- Completing a meaningful unit of work
- Before starting new implementation

Reference `.agents/rules/core/metacognition.md` for assessment protocol.

## Context Management

**User Responsibility**: Monitor and manage context usage. No automatic cleanup.

**Guidelines**:
- Load rules progressively, not all at once
- Unload task-specific rules after completion
- Keep only frequently-used rules loaded
- If context feels constrained, ask user for cleanup guidance

## Error Recovery

When stuck or failing repeatedly:
1. Re-read current task definition
2. Check if required rules are loaded
3. Look for anti-patterns in ai-development-guide.md
4. Ask user for clarification

After 3 failed attempts: Stop and request user guidance.

## File Organization

```
.agents/
├── tasks/                    # Task definitions
│   ├── task-analysis.md      # Analyze and classify work
│   ├── work-planning.md      # Create work plans
│   ├── technical-design.md   # Design documentation
│   ├── implementation.md     # Implementation guidelines
│   └── quality-assurance.md  # Quality standards
│
├── workflows/
│   └── agentic-coding.md     # Design-driven workflow
│
└── rules/
    ├── core/
    │   ├── metacognition.md           # Self-assessment
    │   ├── ai-development-guide.md    # Anti-patterns, best practices
    │   └── documentation-criteria.md  # When to create docs
    │
    └── language/                      # Language-specific rules
        ├── rules.md
        └── testing.md
```

## Anti-Patterns to Avoid

1. **Loading all rules upfront** → Load progressively
2. **Skipping task analysis** → Always analyze first
3. **Ignoring completion conditions** → Check against task definitions
4. **Working without guidelines** → Load relevant task definitions
5. **Assuming context tracking** → User manages context

## Success Metrics

Track internally:
- Task completion rate
- Rules actually used vs loaded
- Number of error recoveries needed
- Agentic Coding acceptance rate