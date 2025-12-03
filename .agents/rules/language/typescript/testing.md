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

3. **E2E Cross-functional Tests** [MANDATORY for new features]
   - Test existing features remain stable after new feature integration
   - Coverage based on Design Doc's Integration Point Map impact levels
   - Verify performance degradation stays within project-defined limits

### TypeScript/Vitest Pattern Reference

```typescript
describe('Cross-functional E2E Tests', () => {
  // Pattern 1: Baseline → Change → Verify
  it('should maintain existing behavior after new feature', async () => {
    // 1. Capture baseline
    const baseline = await testExistingFeature()

    // 2. Enable new feature
    await enableNewFeature()

    // 3. Verify continuity
    const result = await testExistingFeature()
    expect(result).toEqual(baseline)
    expect(result.responseTime).toBeLessThan(
      baseline.responseTime * 1.2 // Project-specific threshold
    )
  })

  // Pattern 2: Data integrity across features
  it('should preserve data integrity', async () => {
    const data = await createTestData()
    await newFeatureOperation(data.id)

    const retrieved = await existingFeatureGet(data.id)
    expect(retrieved).toEqual(data) // No unexpected mutations
  })
})

**Note**: LLM outputs naturally vary - test behavior, not exact matches

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

**Exceptions (TDD not required):**

The following cases do NOT require test-first approach:

1. **Pure Configuration Files**
   - package.json, tsconfig.json, build configs
   - Environment variable files (.env templates)
   - Linter/formatter configurations
   - Rationale: No business logic to verify

2. **Documentation Only Changes**
   - README updates
   - Code comments additions
   - Markdown documentation
   - Rationale: No executable behavior to test

3. **Emergency Hotfixes**
   - Production incidents requiring immediate fix
   - Security vulnerabilities requiring urgent patch
   - **REQUIREMENT**: Add tests immediately after deploying fix
   - Rationale: Speed prioritized in crisis, but tests must follow

4. **Exploratory Spikes**
   - Time-boxed research (max 2-4 hours)
   - Proof-of-concept for uncertain technology
   - **REQUIREMENT**: Discard spike code or rewrite with tests before merging
   - Rationale: Learning phase, not production code

5. **Build/Deployment Scripts**
   - CI/CD pipeline definitions
   - Deployment automation scripts
   - **NOTE**: Complex scripts with business logic DO require tests
   - Rationale: Verified through actual deployment, not unit tests

**When in Doubt**: Default to TDD. Exceptions are narrow, not broad.

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

## Test Quality Criteria [MANDATORY]

1. **Boundary coverage**: Include empty/zero/max/error cases with happy paths
2. **Literal expectations**: `expect(calc(100)).toBe(10)` — use literals, not `100 * RATE`
3. **Result verification**: Assert return values and state, not call order
4. **Meaningful assertions**: Every test must have at least one `expect()`
5. **Mock external I/O only**: Mock DB/API/filesystem, use real internal utils

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