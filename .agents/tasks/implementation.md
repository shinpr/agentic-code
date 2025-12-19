# Implementation

## Required Rules [MANDATORY - MUST BE ACTIVE]

**SKILL AVAILABILITY VERIFICATION:**
1. [VERIFY ACTIVE] `.agents/skills/metacognition/SKILL.md`
2. [LOAD IF NOT ACTIVE] `.agents/skills/coding-rules/SKILL.md`
3. [LOAD IF NOT ACTIVE] `.agents/skills/testing/SKILL.md`

**LOADING PROTOCOL:**
- STEP 1: VERIFY metacognition/SKILL.md is active from initial session setup
- STEP 2: CHECK if coding-rules/SKILL.md is active in working memory
- STEP 3: If coding-rules/SKILL.md NOT active → Execute BLOCKING READ
- STEP 4: CHECK if testing/SKILL.md is active in working memory
- STEP 5: If testing/SKILL.md NOT active → Execute BLOCKING READ
- STEP 6: CONFIRM all skills active before writing ANY code

## Task Tracking Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY add to your internal task management (Task List):**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/skills/coding-rules/SKILL.md` (if not active)
   - `.agents/skills/testing/SKILL.md` (if not active)
2. Mark each with "[From implementation.md]" source tag
3. Show evidence:
   ```
   [TASK TRACKING FROM implementation.md]
   Added to Task List:
   ✓ BLOCKING READ: coding-rules/SKILL.md - development standards
   ✓ BLOCKING READ: testing/SKILL.md - TDD process
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Task Tracking evidence

**EVIDENCE REQUIRED:**
```
Skill Status Verification:
✓ metacognition/SKILL.md - ACTIVE (from session setup)
✓ coding-rules/SKILL.md - ACTIVE (loaded/verified)
✓ testing/SKILL.md - ACTIVE (loaded/verified)
```

## Phase Entry Gate [BLOCKING - SYSTEM HALT IF VIOLATED]

**CHECKPOINT: System CANNOT write ANY CODE until ALL boxes checked:**
☐ [VERIFIED] THIS FILE (`implementation.md`) has been READ and is active
☐ [VERIFIED] Task Tracking completed (from implementation.md Task Tracking Requirement)
☐ [VERIFIED] All required rules listed above are LOADED and active
☐ [VERIFIED] Work Plan document EXISTS with task definitions
☐ [VERIFIED] Task List contains ALL BLOCKING READs from this file
☐ [VERIFIED] Current task identified from Work Plan document
☐ [VERIFIED] TDD process understood (Red-Green-Refactor-Verify)
☐ [VERIFIED] SESSION_BASELINE_DATE established and active

**METACOGNITION GATE [MANDATORY]:**
BEFORE writing first line of code:
- Understand what needs to be built
- Verify approach follows existing patterns
- Confirm TDD cycle will be followed

**GATE ENFORCEMENT:**
IF any box unchecked → HALT → Return to uncompleted step
IF attempting to write code without gates → CRITICAL ERROR

## Purpose

Implement code using TDD process.

## When to Use

- Writing new code
- Modifying existing code
- Implementing features from design
- Fixing bugs
- Refactoring

## Task Exit: Confirm all complete

- Tests written and passing?
- Code implements requirements?
- Quality checks executed with 0 errors?
- Changes committed to git?
- Work plan task checkbox marked [x]?

## TDD Implementation Process

### Every code change follows:

**1. RED Phase - Write failing test first**
   - Define expected behavior in test
   - Run test to confirm it fails
   - No implementation code yet

**2. GREEN Phase - Make test pass**
   - Write minimal code to pass test
   - Focus only on making test green
   - Run test to confirm it passes

**3. REFACTOR Phase - Improve code**
   - Clean up implementation
   - Apply coding standards from coding-rules/SKILL.md
   - Ensure test still passes

**4. VERIFY Phase - Quality checks**
   - Execute ALL commands from testing/SKILL.md Quality Check Commands section
   - Confirm ALL checks pass with 0 errors
   - Ready for commit

**5. COMMIT Phase - Version control [MANDATORY]**
   - Stage changes for current implementation
   - Create commit with descriptive message
   - Commit message format: "feat: [what was implemented]" or follow Work Plan task name if available
   - ENFORCEMENT: Implementation task NOT complete until committed
   - NOTE: Skip if user explicitly says "don't commit"

## Internal Progress Tracking

Track these phases internally:
```
Current Task: [task name]
□ RED Phase: Test written
□ GREEN Phase: Test passing
□ REFACTOR Phase: Code cleaned
□ VERIFY Phase: Quality checks passed (0 errors)
□ COMMIT Phase: Changes committed
```

## Common Patterns with TDD

**New Feature**
1. Write test for new behavior (RED)
2. Implement minimal solution (GREEN)
3. Refactor and add edge cases (REFACTOR)
4. Verify quality (VERIFY)

**Bug Fix**
1. Write test that reproduces bug (RED)
2. Fix the bug (GREEN)
3. Ensure no regression (REFACTOR)
4. Verify quality (VERIFY)

**Refactoring**
1. Ensure tests exist and pass
2. Make small changes
3. Run tests after each change
4. Maintain behavior

### 5. Language-Agnostic Standards

Regardless of language:
- Clear variable names
- Consistent formatting
- Proper indentation
- Logical file organization
- Separation of concerns

### 6. Testing Approach

**REFERENCE `.agents/skills/testing/SKILL.md` for complete testing strategy including:**
- Test types and granularity
- Test-first development process
- Coverage requirements
- Mock and stub usage patterns

### 7. Security Considerations

Always:
- Validate all inputs
- Sanitize user data
- Use parameterized queries
- Avoid hardcoded secrets
- Follow principle of least privilege

## Anti-Patterns to Avoid

1. **God functions**: Doing too much in one function
2. **Magic numbers**: Use named constants
3. **Deep nesting**: Max 3 levels of indentation
4. **Ignoring errors**: Always handle or propagate
5. **Premature optimization**: Make it work, then optimize
6. **Copy-paste coding**: Extract common code
7. **Unclear naming**: Be explicit, not clever

## Final Quality Gate

**REFERENCE `.agents/tasks/quality-assurance.md` for complete quality checklist**

Essential completion requirements:
□ ALL quality standards from quality-assurance.md satisfied
□ ALL language requirements from coding-rules/SKILL.md met
□ ALL testing requirements from testing/SKILL.md completed
□ Work plan task checkbox updated to [✓]
□ Metacognition "After Completion" executed

**FINAL METACOGNITION GATE [BLOCKING]:**
- Cannot mark task complete without metacognition assessment
- Must document what worked/failed for future reference
- Must evaluate if additional rules needed for next task