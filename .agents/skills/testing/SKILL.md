---
name: testing
description: "Applies TDD process, test quality criteria, and mock guidelines. Use when: writing unit tests, using mocks, or reviewing test quality."
---

# Testing Rules

## Language-Specific References

For language-specific rules, also read:
- **TypeScript/Vitest**: [references/typescript.md](references/typescript.md)

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
- Exploratory spikes (discard or rewrite with tests before merging)
- Build/deployment scripts (unless they contain business logic)

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
   - Verify behavior of individual units (functions, modules, or components)
   - Mock all external dependencies
   - Fast execution (milliseconds)

2. **Integration Tests**
   - Verify coordination between multiple components
   - Use actual dependencies when appropriate
   - Test real system interactions

3. **E2E Tests (End-to-End Tests)**
   - Verify complete user workflows across entire system
   - Test real-world scenarios with all components integrated
   - Validate system behavior from user perspective
   - Ensure business requirements are met end-to-end

4. **Cross-functional Verification in E2E Tests** [MANDATORY for feature modifications]

   **Purpose**: Prevent regression and ensure existing features remain stable when introducing new features or modifications.

   **When Required**:
   - Adding new features that interact with existing components
   - Modifying core business logic or workflows
   - Changing shared resources or data structures
   - Updating APIs or integration points

   **Integration Point Analysis**:
   - **High Impact**: Changes to core process flows, breaking changes, or workflow modifications
     - Mandatory comprehensive E2E test coverage
     - Full regression test suite required
     - Performance benchmarking before/after

   - **Medium Impact**: Data usage modifications, shared state changes, or new dependencies
     - Integration tests minimum requirement
     - Targeted E2E tests for affected workflows
     - Edge case coverage mandatory

   - **Low Impact**: Read-only operations, logging additions, or monitoring hooks
     - Unit test coverage sufficient
     - Smoke tests for integration points

   **Success Criteria**:
   - Zero breaking changes in existing workflows
   - Performance degradation within project-defined acceptable limits
   - No new errors in previously stable features
   - All integration points maintain expected contracts
   - Backward compatibility preserved where required

## Test Design Principles

### Test Case Structure
- Tests consist of three stages: **Setup, Execute, Verify** (also known as Arrange-Act-Assert or Given-When-Then)
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
- Public APIs and contracts
- Return values and outputs
- Exceptions and error conditions
- External calls and side effects
- Persisted state changes

**MUST NOT Test**:
- Internal implementation details not exposed publicly
- Internal state that's not observable from outside
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

## Test Quality Criteria [MANDATORY]

1. **Boundary coverage**: Include empty/zero/max/error cases with happy paths
2. **Literal expectations**: Use literal values in assertions, not computed expressions
   - Expected value ≠ mock return value (implementation processes data)
3. **Result verification**: Assert return values and state, not call order
4. **Meaningful assertions**: Every test must have at least one assertion
5. **Mock external I/O only**: Mock DB/API/filesystem, use real internal utilities

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

### ENFORCEMENT
- Cannot proceed with task completion if ANY quality check fails
- Must fix all errors and warnings before marking task complete
- If your project lacks certain quality tools, establish them or document the gap
