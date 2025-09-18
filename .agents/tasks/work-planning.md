# Work Planning

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [VERIFY ACTIVE] `.agents/rules/core/metacognition.md` - Self-assessment protocols (loaded at session start)
2. [LOAD IF NOT ACTIVE] `.agents/rules/language/rules.md` - Development standards
3. [LOAD IF NOT ACTIVE] `.agents/rules/language/testing.md` - TDD process for implementation tasks
4. [LOAD IF NOT ACTIVE] `.agents/tasks/quality-assurance.md` - Quality verification

**LOADING PROTOCOL:**
- STEP 1: VERIFY metacognition.md is active from initial session setup
- STEP 2: CHECK if language/rules.md is active in working memory
- STEP 3: If language/rules.md NOT active → Execute BLOCKING READ
- STEP 4: CHECK if testing.md is active in working memory
- STEP 5: If testing.md NOT active → Execute BLOCKING READ
- STEP 6: CHECK if quality-assurance.md is active in working memory
- STEP 7: If quality-assurance.md NOT active → Execute BLOCKING READ
- STEP 8: CONFIRM all rules active before proceeding with work planning

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/rules/language/rules.md` (if not active)
   - `.agents/rules/language/testing.md` (if not active)
   - `.agents/tasks/quality-assurance.md` (if not active)
2. Mark each with "[From work-planning.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM work-planning.md]
   Injected to work plan:
   ✓ BLOCKING READ: language/rules.md - development standards
   ✓ BLOCKING READ: language/testing.md - TDD process
   ✓ BLOCKING READ: quality-assurance.md - quality verification
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Rule Status Verification:
✓ metacognition.md - ACTIVE (from session setup)
✓ language/rules.md - ACTIVE (loaded/verified)
✓ language/testing.md - ACTIVE (loaded/verified)
✓ quality-assurance.md - ACTIVE (loaded/verified)
```

## Phase Entry Gate [BLOCKING - SYSTEM HALT IF VIOLATED]

**CHECKPOINT: System CANNOT proceed until ALL boxes checked:**
☐ [VERIFIED] THIS FILE (`work-planning.md`) has been READ and is active
☐ [VERIFIED] Plan Injection completed (from work-planning.md Plan Injection Requirement)
☐ [VERIFIED] All required rules listed above are LOADED and active
☐ [VERIFIED] Work plan contains ALL BLOCKING READs from this file
☐ [VERIFIED] Design document EXISTS at `docs/design/[feature]-design.md`
☐ [VERIFIED] User has APPROVED the design
☐ [VERIFIED] SESSION_BASELINE_DATE established and active

**METACOGNITION GATE [MANDATORY]:**
BEFORE creating work plan, execute metacognition assessment:
- Understand the design intent and goals
- Verify task decomposition strategy aligns with 1-commit principle
- Confirm dependencies are logical and achievable

**GATE ENFORCEMENT:**
IF any box unchecked → HALT → Return to uncompleted step
IF attempting to skip → CRITICAL ERROR

## Purpose

Create work plans with decomposed tasks.

## When to Use

- Medium/Large scale tasks (3+ files)
- When user chooses Agentic Coding workflow
- Refactoring with multiple components

## Completion Conditions [BLOCKING GATES]

☐ [MANDATORY] Work plan document created at `docs/plans/YYYYMMDD-{type}-{description}.md`
☐ [VERIFIED] Tasks follow 1-COMMIT PRINCIPLE (each task = 1 logical commit)
☐ [VERIFIED] Dependencies mapped with explicit order
☐ [VERIFIED] Each task has MEASURABLE completion criteria
☐ [VERIFIED] Each task has CHECKBOX for progress tracking
☐ [VERIFIED] Verification command/method specified for EACH task
☐ [VERIFIED] Risk factors with specific mitigations

**GATE CHECK**: Cannot proceed to implementation until ALL boxes checked

## Execution Guidelines

### 1. Plan Structure

Create work plan with:
- **Overview**: What's being built/changed
- **Phases**: Logical groupings of work
- **Tasks**: Individual implementation units
- **Dependencies**: What must complete before what
- **Risks**: Potential issues and mitigations

### 2. Task Decomposition Principles [1-COMMIT RULE]

**MANDATORY GRANULARITY - 1 TASK = 1 COMMIT**:
- Each task MUST represent ONE atomic change
- Each task MUST be committable independently
- Each task MUST NOT break the build when completed

**File Count Guidelines**:
- IDEAL: 1-2 files per task (one focused change)
- MAXIMUM: 3 files per task (if tightly coupled)
- PROHIBITED: 4+ files (MUST split into smaller tasks)

**Independence Requirements**:
- Independently verifiable (has own test/verification)
- Rollback-safe (can revert without breaking)
- Self-contained (doesn't leave system in partial state)

**Checkbox Update Protocol [MANDATORY]**:
- BEFORE starting task: Verify checkbox exists `- [ ]`
- AFTER completing task: Update checkbox to `- [x]` (standard Markdown)
- ENFORCEMENT: Unchecked completed tasks = Protocol violation

### 3. Task Format [MANDATORY TEMPLATE]

```markdown
## Task N: [Task Name]

### Entry Conditions
- [ ] Previous dependencies complete
- [ ] Understand what to build
- [ ] Ready to follow TDD

### Scope [Max 2 files or split]
- Files affected: [EXACT file paths]
- Components: [SPECIFIC names]

### Implementation Steps (TDD + Commit)
1. RED: Write failing test
2. GREEN: Write code to pass test
3. REFACTOR: Improve the code
4. VERIFY: Run quality checks (0 errors required)
5. COMMIT: Git commit (following 1-COMMIT principle: 1 task = 1 commit)

### Exit Conditions
- [ ] Test passes
- [ ] Quality checks pass with 0 errors (see language/testing.md)
- [ ] Changes committed to git
- [ ] Task checkbox marked [x] in work plan

### Dependencies
- Depends on: Task [X]
- Blocks: Task [Y]
```

### 4. Ordering Strategy

1. **Foundation first**: Core structures before features
2. **Dependencies respected**: Prerequisites before dependents
3. **Testability maintained**: Each step verifiable
4. **Risk front-loaded**: Complex/uncertain parts early

### 5. Common Patterns

**Feature Implementation**
```
Phase 1: Data layer
- Task 1: Define data models
- Task 2: Create repositories

Phase 2: Business logic
- Task 3: Implement services
- Task 4: Add validation

Phase 3: Interface
- Task 5: Create API endpoints
- Task 6: Add error handling

Phase 4: Testing
- Task 7: Unit tests
- Task 8: Integration tests
```

**Refactoring**
```
Phase 1: Preparation
- Task 1: Add tests for current behavior
- Task 2: Create abstraction interfaces

Phase 2: Migration
- Task 3: Implement new structure
- Task 4: Migrate component by component

Phase 3: Cleanup
- Task 5: Remove old code
- Task 6: Update documentation
```

## Deliverables

Work plan document at `docs/plans/YYYYMMDD-{type}-{description}.md` containing:
- Task breakdown following 1-commit principle
- Execution order with dependencies
- Checkboxes for progress tracking (- [ ] format)
- Verification methods for each task
- Risk mitigation strategies

**CRITICAL**: Work plan location MUST be in `docs/plans/` directory

## Quality Criteria

Tasks MUST be:
- **Atomic**: ONE commit worth of changes
- **Trackable**: Has checkbox for progress
- **Measurable**: Clear completion criteria
- **Testable**: Verification method defined
- **Ordered**: Dependencies explicitly stated
- **Right-sized**: 1-2 files (3 max)

**ENFORCEMENT CHECKLIST**:
☐ Each task can be one commit
☐ Each task has - [ ] checkbox
☐ Each task has verification command
☐ No task exceeds 3 files
☐ Dependencies clearly marked

## Anti-Patterns

Avoid:
- Vague tasks ("Improve performance")
- Giant tasks (10+ files)
- Circular dependencies
- Missing verification methods
- Unclear completion criteria