# TypeScript-Specific Rules

Use these rules after inspecting the repository's TypeScript configuration, formatter, linter, framework conventions, and representative code. Repository contracts take precedence over generic preferences.

## Type Safety

- Receive untrusted external input as `unknown` and narrow it at the boundary.
- Prefer inference, generics, unions, and discriminated unions over broad assertions.
- Use `satisfies` when it verifies a shape while preserving useful inference.
- Use assertions only when runtime or repository evidence establishes the type more strongly than TypeScript can express.
- Model external API shapes as they exist, then convert them into internal domain shapes where responsibilities differ.

Add branded types, template-literal types, deep generic helpers, or custom validation only when they protect a current contract or remove demonstrated ambiguity. Type complexity is judged by readability, ownership, and change cost rather than fixed field, optional-property, or nesting counts.

## Functions and Data Shapes

- Follow repository conventions for functions, classes, interfaces, and object parameters.
- Group parameters when they form one coherent concept or when call-site clarity improves.
- Use classes when a framework requires them or when identity, state, and behavior form one responsibility.
- Keep dependencies visible at the boundary appropriate to the repository architecture.

## Async and Errors

- Await or explicitly return promises so ownership of async work is clear.
- Catch an error only where the code can recover, add useful context, or translate the receiving contract.
- Preserve the original cause when wrapping errors.
- Use a `Result`-style value only when it fits the repository's established error contract.
- Central process-level handlers are application concerns, not a requirement for every TypeScript module.

## Imports and Formatting

Use the repository's `tsconfig`, module system, formatter, and lint rules for paths, semicolons, naming, and import ordering. Do not introduce a new convention inside an unrelated change.

## Completion Check

- External inputs are narrowed before trusted use.
- Assertions and advanced types protect a current boundary.
- Async failures remain observable at the correct owner.
- Repository type-check, build, lint, and formatting commands pass when applicable.
