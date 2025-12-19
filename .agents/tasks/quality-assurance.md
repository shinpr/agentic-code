# Quality Assurance

## Required Rules [MANDATORY - MUST BE ACTIVE]

**SKILL AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/skills/coding-rules/SKILL.md`
2. [LOAD IF NOT ACTIVE] `.agents/skills/testing/SKILL.md`

**LOADING PROTOCOL:**
- STEP 1: CHECK if coding-rules/SKILL.md is active in working memory
- STEP 2: If coding-rules/SKILL.md NOT active → Execute BLOCKING READ
- STEP 3: CHECK if testing/SKILL.md is active in working memory
- STEP 4: If testing/SKILL.md NOT active → Execute BLOCKING READ
- STEP 5: CONFIRM all skills active before executing quality gates

**CRITICAL**: Cannot execute quality checks until ALL required rules confirmed active

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/skills/coding-rules/SKILL.md` (if not active)
   - `.agents/skills/testing/SKILL.md` (if not active)
2. Mark each with "[From quality-assurance.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM quality-assurance.md]
   Injected to work plan:
   ✓ BLOCKING READ: coding-rules/SKILL.md - quality standards
   ✓ BLOCKING READ: testing/SKILL.md - testing requirements
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Skill Status Verification:
✓ coding-rules/SKILL.md - ACTIVE (loaded/verified)
✓ testing/SKILL.md - ACTIVE (loaded/verified)
```

## Task Completion Gate [STRICT ENFORCEMENT - NO EXCEPTIONS]

**CANNOT mark task as complete until ALL quality checks pass:**
□ Plan Injection completed (from quality-assurance.md Plan Injection Requirement)
□ Work plan contains ALL BLOCKING READs from this file
□ Build process succeeds
□ Tests pass (or no tests if not applicable)
□ Linting: 0 errors
□ Static analysis passes (if applicable)
□ Manual testing performed (if applicable)
□ Changes committed to git (for implementation tasks)
□ Task tracking updated (work plan checkbox if using workflow)

**If any check fails:**
→ Fix issues before proceeding
→ Do NOT skip or mark task complete
→ Do NOT commit with failing checks

## Purpose

Ensure code quality through systematic verification and testing.

## When to Use [MANDATORY TIMING]

- **After every implementation** (required)
- **Before marking any task done** (mandatory)
- When quality issues suspected
- During code review
- Before deployment

## Completion Conditions

□ Build process succeeds
□ All tests pass
□ Linting reports 0 errors
□ Code formatting verified
□ Static analysis passes (if applicable)
□ Test coverage meets requirements
□ Performance acceptable
□ Security checks pass
□ Documentation updated

## Execution Guidelines

### 1. Build Verification

Run project build:
- Ensure compilation succeeds
- Check for warnings
- Verify output artifacts
- Confirm dependencies resolved

*Note: Build commands are language-specific. Check testing/SKILL.md*

### 2. Test Execution

**Test Categories**
- Unit tests: Individual functions
- Integration tests: Component interactions
- End-to-end tests: Full workflows
- Performance tests: Speed and resources
- Security tests: Vulnerability checks

**Test Coverage**
- Minimum: 80% code coverage
- Critical paths: 100% coverage
- Edge cases: Documented and tested

### 3. Code Quality Checks

**Static Analysis**
- Linting: 0 errors required
- Code formatting: Consistent style
- Language checks: No errors (static typing, style, etc.)
- Complexity: Within limits

**Code Review Criteria**
- Readability: Self-documenting
- Maintainability: Easy to modify
- Efficiency: No obvious issues
- Security: Best practices followed

### 4. Quality Standards

| Aspect | Standard |
|--------|----------|
| Functions | ≤ 30 lines |
| Complexity | ≤ 10 cyclomatic |
| Duplication | < 5% |
| Test time | < 30 seconds total |
| Build time | < 2 minutes |
| Comments | For non-obvious only |

### 5. Security Validation

Check for:
- Input validation present
- SQL injection prevention
- XSS protection
- Authentication properly implemented
- Authorization checks in place
- Sensitive data encrypted
- Secrets not hardcoded

### 6. Performance Validation

Verify:
- Response times acceptable
- Memory usage reasonable
- Database queries optimized
- Caching implemented where needed
- No unnecessary loops
- Async operations proper

### 7. Documentation Check

Ensure:
- README updated if needed
- API documentation current
- Complex logic explained
- Configuration documented
- Setup instructions clear
- Breaking changes noted

## Quality Process

```
1. Run build → Must succeed
2. Run tests → All must pass
3. Check coverage → Meet minimums
4. Run linter → 0 errors
5. Check formatting → Consistent
6. Review security → No issues
7. Test performance → Acceptable
8. Update docs → Current
```

## Common Issues and Fixes

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Build fails | Missing dependency | Install dependencies |
| Tests fail | Logic error | Debug and fix |
| Lint errors | Style violations | Apply formatting |
| Static analysis errors | Language violations | Fix definitions/signatures |
| Slow tests | No mocking | Add test doubles |
| Security warning | Old dependency | Update packages |

## Tools by Language

Reference `.agents/skills/testing/SKILL.md` for:
- Language-specific test commands
- Coverage tools
- Linting configuration
- Build processes
- Security scanners

## Pre-Deployment Checklist

□ All automated tests pass
□ Manual testing complete
□ Code reviewed
□ Documentation updated
□ Performance verified
□ Security validated
□ Rollback plan exists
□ Monitoring configured

## Anti-Patterns

Avoid:
- Skipping tests to save time
- Ignoring warnings
- Accepting "good enough" quality
- Testing only happy path
- Ignoring performance
- Assuming security is fine