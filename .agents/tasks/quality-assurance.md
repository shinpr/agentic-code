# Quality Assurance

## Purpose

Ensure code quality through systematic verification and testing.

## When to Use

- After implementation complete
- Before marking task done
- When quality issues suspected
- During code review
- Before deployment

## Completion Conditions

□ Build process succeeds
□ All tests pass
□ Linting reports 0 errors
□ Code formatting verified
□ Type checking passes (if applicable)
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

*Note: Build commands are language-specific. Check language/testing.md*

### 2. Test Execution

**Test Categories**
- Unit tests: Individual functions
- Integration tests: Component interactions
- End-to-end tests: Full workflows
- Performance tests: Speed and resources
- Security tests: Vulnerability checks

**Test Coverage**
- Minimum: 70% code coverage
- Critical paths: 100% coverage
- Edge cases: Documented and tested

### 3. Code Quality Checks

**Static Analysis**
- Linting: 0 errors required
- Code formatting: Consistent style
- Type checking: No type errors
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
| Type errors | Wrong types | Fix type definitions |
| Slow tests | No mocking | Add test doubles |
| Security warning | Old dependency | Update packages |

## Tools by Language

Reference `.agents/rules/language/testing.md` for:
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

## Notes

- Quality is not negotiable
- Automate everything possible
- Fix issues immediately
- Test early and often
- Document quality decisions
- Learn from quality failures