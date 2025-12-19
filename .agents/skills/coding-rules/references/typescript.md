# TypeScript-Specific Rules

## Type Safety

**Principle**: Use `unknown` + type guards instead of `any` for full type safety.

**any Type Alternatives (Priority Order)**
1. **unknown Type + Type Guards**
2. **Generics**
3. **Union Types・Intersection Types**
4. **Type Assertions (Last Resort)**: Only when type is certain

**Type Guard Implementation Pattern**
```typescript
// Safely validate external input
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null &&
    'id' in value && 'name' in value
}
// Usage: if (isUser(data)) { /* data is typed as User */ }
```

**Modern Type Features**
- **satisfies Operator**: Type check while preserving type inference
  ```typescript
  const config = { port: 3000 } satisfies Config  // ✅ Preserves inference
  const config: Config = { port: 3000 }           // ❌ Loses inference
  ```
- **const Assertion**: Ensure immutability with literal types
  ```typescript
  const ROUTES = { HOME: '/' } as const satisfies Routes  // ✅ Immutable and type-safe
  ```
- **Branded Types**: Distinguish meaning for same primitive types
  ```typescript
  type UserId = string & { __brand: 'UserId' }
  type OrderId = string & { __brand: 'OrderId' }
  // UserId and OrderId are incompatible - prevents mixing
  ```
- **Template Literal Types**: Express string patterns with types
  ```typescript
  type Route = `/${string}`
  type HttpMethod = 'GET' | 'POST'
  type Endpoint = `${HttpMethod} ${Route}`
  ```

**Type Safety in Implementation**
- API Communication: Always receive responses as `unknown`, validate with type guards
- Form Input: External input as `unknown`, type determined after validation
- Legacy Integration: Stepwise assertion like `window as unknown as LegacyWindow`
- Test Code: Always define types for mocks, utilize `Partial<T>` and `vi.fn<[Args], Return>()`

**Type Safety in Data Flow**
Input Layer (`unknown`) → Type Guard → Business Layer (Type Guaranteed) → Output Layer (Serialization)

**Type Complexity Management**
- Field Count: Up to 20 (split by responsibility if exceeded, external API types are exceptions)
- Optional Ratio: Up to 30% (separate required/optional if exceeded)
- Nesting Depth: Up to 3 levels (flatten if exceeded)
- Type Assertions: Review design if used 3+ times
- **External API Types**: Relax constraints and define according to reality (convert appropriately internally)

## Coding Conventions

**Class Usage Criteria**
- **Recommended: Implementation with Functions and Interfaces**
  - Rationale: Improves testability and flexibility of function composition
- **Classes Allowed**:
  - Framework requirements (NestJS Controller/Service, TypeORM Entity, etc.)
  - Custom error class definitions
  - When state and business logic are tightly coupled (e.g., ShoppingCart, Session, StateMachine)
- **Decision Criterion**: If "Does this data have behavior?" is Yes, consider using a class
  ```typescript
  // ✅ Functions and interfaces
  interface UserService { create(data: UserData): User }
  const userService: UserService = { create: (data) => {...} }
  // ❌ Unnecessary class
  class UserService { create(data: UserData) {...} }
  ```

**Function Design**
```typescript
// ✅ Object parameter
function createUser({ name, email, role }: CreateUserParams) {}
// ❌ Multiple parameters
function createUser(name: string, email: string, role: string) {}
```

**Dependency Injection**
```typescript
// ✅ Receive dependency as parameter
function createService(repository: Repository) { return {...} }
// ❌ Direct import dependency
import { userRepository } from './infrastructure/repository'
```

**Asynchronous Processing**
- Promise Handling: Always use `async/await`
- Error Handling: Always handle with `try-catch`
- Type Definition: Explicitly define return value types (e.g., `Promise<Result>`)

**Format Rules**
- Semicolon omission (follow Biome settings)
- Types in `PascalCase`, variables/functions in `camelCase`
- Imports use absolute paths (`src/`)

## Error Handling

**Result Type Pattern**: Express errors with types for explicit handling
```typescript
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }

// Example: Express error possibility with types
function parseUser(data: unknown): Result<User, ValidationError> {
  if (!isValid(data)) return { ok: false, error: new ValidationError() }
  return { ok: true, value: data as User }
}
```

**Custom Error Classes**
```typescript
export class AppError extends Error {
  constructor(message: string, public readonly code: string, public readonly statusCode = 500) {
    super(message)
    this.name = this.constructor.name
  }
}
// Purpose-specific: ValidationError(400), BusinessRuleError(400), DatabaseError(500), ExternalServiceError(502)
```

**Asynchronous Error Handling**
- Global handler setup mandatory: `unhandledRejection`, `uncaughtException`
- Use try-catch with all async/await
- Always log and re-throw errors

## Refactoring Priority

Duplicate Code Removal > Large Function Division > Complex Conditional Branch Simplification > **Type Safety Improvement**

## Performance Optimization

- Streaming Processing: Process large datasets with streams
- Memory Leak Prevention: Explicitly release unnecessary objects
