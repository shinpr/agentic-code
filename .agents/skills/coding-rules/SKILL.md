---
name: coding-rules
description: "Applies coding standards for clean, maintainable code. Use when: writing functions, handling errors, refactoring, or reviewing code style."
---

# Development Rules

## Language-Specific References

For language-specific rules, also read:
- **TypeScript**: [references/typescript.md](references/typescript.md)

## Basic Principles

✅ **Aggressive Refactoring**
- Continuously improve code structure and readability
- Make code changes in small, safe steps
- Prioritize maintainability over initial implementation speed

❌ **Unused "Just in Case" Code** - YAGNI principle
- Don't write code for hypothetical future requirements
- Delete unused functions, variables, and imports immediately
- Keep codebase lean and focused on current needs

## Comment Writing Rules

- **Function Description Focus**: Describe what the code "does", not how it works
- **No Historical Information**: Do not record development history in comments
- **Timeless**: Write only content that remains valid whenever read
- **Conciseness**: Keep explanations to necessary minimum
- **Explain "Why"**: Comments should explain reasoning, not implementation details

## Function Design

**Parameter Management**
- **0-2 parameters maximum**: Use structured data (object/struct/dict) for 3+ parameters
  ```
  ✅ Good: createUser({name, email, role})
  ❌ Avoid: createUser(name, email, role, department, startDate)
  ```
  *Note: Use your language's idiomatic approach for grouping parameters*

**Dependency Injection**
- **Inject external dependencies explicitly**: Ensure testability and modularity
- Pass dependencies as parameters (functions, constructors, or other language-appropriate mechanisms)
- Avoid global state, direct instantiation, or implicit dependencies
- Prefer interfaces/contracts over concrete implementations where applicable

## Error Handling

**Absolute Rule**: Error suppression prohibited. All errors must have log output and appropriate handling.

**Layer-Specific Error Handling**
- **Presentation Layer**: Convert errors to user-friendly messages, log excluding sensitive information
- **Business Layer**: Detect business rule violations, propagate domain-specific errors
- **Data Layer**: Convert technical errors to domain errors

**Structured Logging and Sensitive Information Protection**
Never include sensitive information in logs:
- Passwords, tokens, API keys, secrets
- Credit card numbers, personal identification numbers
- Any personally identifiable information (PII)

**Asynchronous Error Handling**
- Use appropriate error handling mechanisms for your language
- Always log and appropriately propagate errors
- Set up global error handlers where applicable

## Clean Code Principles

✅ **Recommended Practices**
- Delete unused code immediately
- Remove debug statements and temporary logging
- Use meaningful variable and function names
- Keep functions small and focused on single responsibility

❌ **Avoid These Practices**
- Commented-out code (use version control for history)
- Magic numbers without explanation
- Deep nesting (prefer early returns)
- Functions that do multiple unrelated things

## Refactoring Techniques

**Basic Policy**
- **Small Steps**: Maintain always-working state through gradual improvements
- **Safe Changes**: Minimize the scope of changes at once
- **Behavior Guarantee**: Ensure existing behavior remains unchanged while proceeding

**Implementation Procedure**
1. Understand Current State
2. Make Gradual Changes
3. Verify Behavior
4. Final Validation

**Priority Order**
1. Duplicate Code Removal
2. Large Function Division
3. Complex Conditional Branch Simplification
4. Architecture Improvement

## Performance Considerations

**General Principles**
- Measure before optimizing (avoid premature optimization)
- Focus on algorithmic complexity over micro-optimizations
- Consider memory usage, especially with large datasets
- Use appropriate data structures for the use case

**Resource Management**
- Properly close files, connections, and other resources
- Be mindful of memory leaks in long-running applications
- Use efficient algorithms for data processing

## Code Organization

**File Structure**
- Group related functionality together
- Separate concerns (business logic, data access, presentation)
- Use consistent naming conventions throughout the project
- Keep configuration separate from business logic

**Modularity**
- Write small, focused modules/functions
- Minimize dependencies between modules
- Use clear interfaces between components
- Follow single responsibility principle
