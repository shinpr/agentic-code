# Implementation

## Purpose

Guide code implementation with focus on quality, maintainability, and correctness.

## When to Use

- Writing new code
- Modifying existing code
- Implementing features from design
- Fixing bugs
- Refactoring

## Completion Conditions

□ Code implements required functionality
□ Build succeeds
□ Linting passes (0 errors)
□ Tests pass (if test-driven)
□ Type/compilation check passes
□ Code follows project conventions
□ Edge cases handled
□ Error handling implemented

## Execution Guidelines

### 1. Before Starting

Check:
- Design decisions (if from design phase)
- Existing patterns in codebase
- Language-specific rules loaded
- Test requirements understood

### 2. Implementation Principles

**Code Quality**
- Functions: 30 lines maximum
- Cyclomatic complexity: 10 maximum
- Single responsibility per function/class
- Clear naming (self-documenting)

**Error Handling**
- Validate inputs
- Handle edge cases explicitly
- Fail fast with clear messages
- Log errors appropriately

**Maintainability**
- Follow existing patterns
- Keep it simple (KISS)
- Avoid premature optimization
- Document non-obvious decisions

### 3. Implementation Process

1. **Understand the task**
   - Read requirements/design
   - Identify affected components
   - Plan approach

2. **Write tests first (if TDD)**
   - Define expected behavior
   - Write failing tests
   - Implement to pass tests

3. **Implement incrementally**
   - Start with core functionality
   - Add edge cases
   - Refactor for clarity
   - Add error handling

4. **Verify continuously**
   - Run builds after changes
   - Execute tests frequently
   - Check linting/formatting

### 4. Common Patterns

**New Feature**
```
1. Create interfaces/contracts
2. Implement core logic
3. Add validation
4. Handle errors
5. Write tests
6. Document usage
```

**Bug Fix**
```
1. Write test to reproduce bug
2. Implement minimal fix
3. Verify fix doesn't break other tests
4. Consider edge cases
5. Document why fix works
```

**Refactoring**
```
1. Ensure tests exist
2. Make incremental changes
3. Run tests after each change
4. Keep functionality identical
5. Improve structure/readability
```

### 5. Language-Agnostic Standards

Regardless of language:
- Clear variable names
- Consistent formatting
- Proper indentation
- Logical file organization
- Separation of concerns

### 6. Testing Approach

When implementing:
- Unit test individual functions
- Integration test workflows
- Test happy path first
- Add edge case tests
- Test error conditions

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

## Quality Checklist

Before considering implementation complete:

□ Code is readable and self-documenting
□ No commented-out code remains
□ No debug statements left
□ All TODOs addressed or documented
□ Consistent style throughout
□ No obvious performance issues
□ Security considerations addressed
□ Tests cover main scenarios

## Notes

- Follow language-specific rules in `.agents/rules/language/`
- Refer to existing code for patterns
- Ask for clarification when requirements unclear
- Document decisions for future reference
- Commit logical units of work