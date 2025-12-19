# TypeScript/Vitest Testing Rules

## Test Framework
- **Vitest**: This project uses Vitest
- Test imports: `import { describe, it, expect, beforeEach, vi } from 'vitest'`
- Mock creation: Use `vi.mock()`

## Directory Structure

**File structure:**
- src/application/services/service.ts: Main service file
- src/application/services/__tests__/service.test.ts: Unit tests
- src/application/services/__tests__/service.int.test.ts: Integration tests

**Naming Conventions:**
- Test files: `{target-file-name}.test.ts`
- Integration test files: `{target-file-name}.int.test.ts`

## Cross-functional E2E Test Patterns

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
```

**Note**: LLM outputs naturally vary - test behavior, not exact matches

## Test Helper Usage Examples

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

## Test Granularity Examples

```typescript
// ✅ Test observable behavior
expect(calculatePrice(100, 0.1)).toBe(110)

// ❌ Test implementation details (as any access)
expect((calculator as any).taxRate).toBe(0.1)
expect((service as any).validate(input)).toBe(true)
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
