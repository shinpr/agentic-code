# General Testing Rules

## TDD Process [MANDATORY for all code changes]

**Execute this process for every code change:**

### RED Phase
1. Write test that defines expected behavior
2. Run test
3. Confirm test FAILS (if it passes, the test is wrong)

### GREEN Phase
1. Write MINIMAL code to make test pass
2. Run test
3. Confirm test PASSES

### REFACTOR Phase
1. Improve code quality
2. Run test
3. Confirm test STILL PASSES

### VERIFY Phase [MANDATORY - 0 ERRORS REQUIRED]
1. Execute ALL quality check commands for your language/project
2. Fix any errors until ALL commands pass with 0 errors
3. Confirm no regressions
4. ENFORCEMENT: Cannot proceed with ANY errors or warnings

**Exceptions (no TDD required):**
- Pure configuration files
- Documentation only
- Emergency fixes (but add tests immediately after)

## Basic Testing Policy

### Quality Requirements
- **Coverage**: Unit test coverage must be 80% or higher
- **Independence**: Each test can run independently
- **Reproducibility**: Tests are environment-independent

### Coverage Requirements
**Mandatory**: Unit test coverage must be 80% or higher
**Metrics**: Statements, Branches, Functions, Lines

### Test Types and Scope
1. **Unit Tests**
   - Verify behavior of individual functions or classes
   - Mock all external dependencies
   - Fast execution (milliseconds)

2. **Integration Tests**
   - Verify coordination between multiple components
   - Use actual dependencies when appropriate
   - Test real system interactions

## Test Design Principles

### Test Case Structure
- Tests consist of three stages: **"Arrange," "Act," "Assert"** (AAA Pattern)
- Clear naming that shows purpose of each test
- One test case verifies only one behavior
- Test names should describe expected behavior, not implementation

### Test Data Management
- Manage test data in dedicated directories
- Define test-specific configuration values
- Always mock sensitive information (passwords, tokens, API keys)
- Keep test data minimal, using only data directly related to test case verification

### Test Independence
- Each test should be able to run in isolation
- Tests should not depend on execution order
- Clean up test state after each test
- Avoid shared mutable state between tests

## Mock and Stub Usage Policy

✅ **Recommended: Mock external dependencies in unit tests**
- Merit: Ensures test independence and reproducibility
- Practice: Mock databases, APIs, file systems, and other external dependencies
- Use framework-appropriate mocking tools

❌ **Avoid: Actual external connections in unit tests**
- Reason: Slows test speed and causes environment-dependent problems
- Exception: Integration tests that specifically test external integration

### Mock Decision Criteria
| Mock Characteristics | Response Policy |
|---------------------|-----------------|
| **Simple and stable** | Consolidate in common helpers |
| **Complex or frequently changing** | Individual implementation |
| **Duplicated in 3+ places** | Consider consolidation |
| **Test-specific logic** | Individual implementation |

## Test Granularity Principles

### Core Principle: Observable Behavior Only
**MUST Test**:
- Public APIs and interfaces
- Return values and outputs
- Exceptions and error conditions
- External calls and side effects
- Persisted state changes

**MUST NOT Test**:
- Private methods and internal implementation
- Internal state that's not observable
- Algorithm implementation details
- Framework/library internals

### Test Failure Response Decision Criteria

**Fix tests when:**
- Expected values are wrong
- Tests reference non-existent features
- Tests depend on implementation details
- Tests were written only for coverage

**Fix implementation when:**
- Tests represent valid specifications
- Business logic requirements have changed
- Important edge cases are failing

**When in doubt**: Confirm with stakeholders or domain experts

## Test Implementation Best Practices

### Naming Conventions
- Test files: Follow your language/framework conventions
- Test suites: Names describing target features or situations
- Test cases: Names describing expected behavior (not implementation)

### Test Code Quality Rules

✅ **Recommended: Keep all tests always active**
- Merit: Guarantees test suite completeness
- Practice: Fix problematic tests and activate them

❌ **Avoid: Skipping or commenting out tests**
- Reason: Creates test gaps and incomplete quality checks
- Solution: Either fix the test or completely delete if truly unnecessary

### Test Helper Guidelines

**Basic Principles**
Test helpers should reduce duplication and improve maintainability.

**Usage Examples**
- Builder patterns for test data creation
- Custom assertions for domain-specific validation
- Shared setup/teardown utilities
- Common mock configurations

## Quality Check Commands [MANDATORY for VERIFY phase]

**Execute quality checks appropriate for your language and project setup:**

### Required Quality Checks
Your project MUST have mechanisms to verify:

1. **All Tests Pass**
   - Unit tests execute successfully
   - Integration tests (if applicable) pass
   - No test failures or errors

2. **Code Builds Successfully**
   - Compilation succeeds (for compiled languages)
   - No build errors or warnings

3. **Code Style Compliance**
   - Linting rules are satisfied
   - Formatting standards are met
   - Style guide adherence verified

4. **Type Safety** (for typed languages)
   - Type checking passes
   - No type errors or warnings

### Implementation Guidelines
- **Identify Your Tools**: Use your project's existing quality tools (test runners, linters, formatters, type checkers)
- **Zero Error Policy**: ALL quality checks must pass with 0 errors before task completion
- **Document Execution**: Note which quality checks were run and their results
- **Project-Specific**: Adapt to your specific language, framework, and tooling setup

### ENFORCEMENT
- Cannot proceed with task completion if ANY quality check fails
- Must fix all errors and warnings before marking task complete
- If your project lacks certain quality tools, establish them or document the gap