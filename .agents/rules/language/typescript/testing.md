# TypeScript Testing Rules

## Test Framework
- **Vitest**: This project uses Vitest
- Test imports: `import { describe, it, expect, beforeEach, vi } from 'vitest'`
- Mock creation: Use `vi.mock()`

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

2. **Integration Tests**
   - Verify coordination between multiple components
   - Use actual dependencies (DB, API, etc.)

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
1. Execute ALL quality check commands below
2. Fix any errors until ALL commands pass with 0 errors
3. Confirm no regressions
4. ENFORCEMENT: Cannot proceed with ANY errors or warnings

**Exceptions (no TDD required):**
- Pure configuration files
- Documentation only
- Emergency fixes (but add tests immediately after)

## Test Design Principles

### Test Case Structure
- Tests consist of three stages: "Arrange," "Act," "Assert"
- Clear naming that shows purpose of each test
- One test case verifies only one behavior

### Test Data Management
- Manage test data in dedicated directories
- Define test-specific environment variable values
- Always mock sensitive information
- Keep test data minimal, using only data directly related to test case verification purposes

### Mock and Stub Usage Policy

✅ **Recommended: Mock external dependencies in unit tests**
- Merit: Ensures test independence and reproducibility
- Practice: Mock DB, API, file system, and other external dependencies

❌ **Avoid: Actual external connections in unit tests**
- Reason: Slows test speed and causes environment-dependent problems

### Test Failure Response Decision Criteria

**Fix tests**: Wrong expected values, references to non-existent features, dependence on implementation details, implementation only for tests
**Fix implementation**: Valid specifications, business logic, important edge cases
**When in doubt**: Confirm with user

## Test Helper Utilization Rules

### Basic Principles
Test helpers are utilized to reduce duplication in test code and improve maintainability.

### Decision Criteria
| Mock Characteristics | Response Policy |
|---------------------|-----------------|
| **Simple and stable** | Consolidate in common helpers |
| **Complex or frequently changing** | Individual implementation |
| **Duplicated in 3+ places** | Consider consolidation |
| **Test-specific logic** | Individual implementation |

### Test Helper Usage Examples
```typescript
// ✅ Recommended: Utilize builder pattern
const testData = new TestDataBuilder()
  .withDefaults()
  .withName('Test User')
  .build()

// ✅ Recommended: Custom assertions
function assertValidUser(user: unknown): asserts user is User {
  // Validation logic
}

// ❌ Avoid: Individual implementation of duplicate complex mocks
```

## Test Implementation Conventions

### Directory Structure
**File structure:**
- src/application/services/service.ts: Main service file
- src/application/services/__tests__/service.test.ts: Unit tests
- src/application/services/__tests__/service.int.test.ts: Integration tests

### Naming Conventions
- Test files: `{target-file-name}.test.ts`
- Integration test files: `{target-file-name}.int.test.ts`
- Test suites: Names describing target features or situations
- Test cases: Names describing expected behavior


### Test Code Quality Rules

✅ **Recommended: Keep all tests always active**
- Merit: Guarantees test suite completeness
- Practice: Fix problematic tests and activate them

❌ **Avoid: test.skip() or commenting out**
- Reason: Creates test gaps and incomplete quality checks
- Solution: Completely delete unnecessary tests

## Test Granularity Principles

### Core Principle: Observable Behavior Only
**MUST Test**: Public APIs, return values, exceptions, external calls, persisted state
**MUST NOT Test**: Private methods, internal state, algorithm implementation details

```typescript
// ✅ Test observable behavior
expect(calculatePrice(100, 0.1)).toBe(110)

// ❌ Test implementation details
expect((calculator as any).taxRate).toBe(0.1)
```

## Mock Type Safety Enforcement

### Minimal Type Definition Requirements
```typescript
// ✅ Only required parts
type TestRepo = Pick<Repository, 'find' | 'save'>
const mock: TestRepo = { find: vi.fn(), save: vi.fn() }

// Only when absolutely necessary, with clear justification
const sdkMock = {
  call: vi.fn()
} as unknown as ExternalSDK // Complex external SDK type structure
```

## Basic Vitest Example

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock setup example
vi.mock('./userService', () => ({
  getUserById: vi.fn(),
  updateUser: vi.fn()
}))

describe('ComponentName', () => {
  it('should follow AAA pattern', () => {
    // Arrange
    const input = 'test'

    // Act
    const result = someFunction(input)

    // Assert
    expect(result).toBe('expected')
  })
})
```

## Quality Check Commands [MANDATORY for VERIFY phase]

**ALL TypeScript/JavaScript commands MUST pass with 0 errors before task completion:**

```bash
npm test              # MUST pass all tests
npm run build        # MUST build successfully
npm run lint         # MUST have 0 lint errors
npm run type-check   # MUST have 0 type errors
```

**ENFORCEMENT:**
- Run ALL applicable commands listed above
- Fix ANY errors or warnings before marking task complete
- If command doesn't exist in package.json, skip that specific command
- Document which commands were run in task completion