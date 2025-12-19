# Integration Test Review

## Required Rules [MANDATORY - MUST BE ACTIVE]

**SKILL AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/skills/testing/SKILL.md`
2. [LOAD IF NOT ACTIVE] `.agents/skills/integration-e2e-testing/SKILL.md`

**LOADING PROTOCOL:**
- STEP 1: CHECK if testing/SKILL.md is active in working memory
- STEP 2: If testing/SKILL.md NOT active → Execute BLOCKING READ
- STEP 3: CHECK if integration-e2e-testing/SKILL.md is active in working memory
- STEP 4: If integration-e2e-testing/SKILL.md NOT active → Execute BLOCKING READ
- STEP 5: CONFIRM all required skills active before proceeding

## Purpose

Verify implementation quality of integration and E2E tests. Evaluate consistency between skeleton comments (AC, Behavior, metadata) and actual test implementation.

## When to Use

- After integration/E2E test implementation is complete
- Before Quality Assurance phase
- When test skeletons have been converted to actual test implementations

## Required Information

- **testFile**: Path to the test file to review (required)
- **designDocPath**: Path to related Design Doc (optional)

## Completion Conditions

□ All skeleton comments verified against implementation
□ Behavior verification assertions present for all observable results
□ AAA structure confirmed in all test cases
□ Mock boundaries appropriate (external=mock, internal=actual)
□ Test independence verified (no shared mutable state)
□ Quality issues identified and documented

## Review Process

### Stage 1: Skeleton Comment Extraction

Extract the following from the test file:
- `AC:` - Acceptance criteria reference
- `ROI:` - ROI score and values
- `Behavior:` - Trigger → Process → Observable Result
- `@category:` - Test category
- `@dependency:` - Component dependencies
- `@complexity:` - Complexity level

### Stage 2: Skeleton and Implementation Consistency Check

For each test case, verify:

| Check Item | Verification Content | Failure Condition |
|------------|---------------------|-------------------|
| AC Correspondence | Test implemented for AC comment | Pending/todo marker remains |
| Behavior Verification | Assertion exists for "observable result" | No assertion |
| Verification Item Coverage | All listed items included in assertions | Item missing |

### Stage 3: Implementation Quality Check

| Check Item | Verification Content | Failure Condition |
|------------|---------------------|-------------------|
| AAA Structure | Arrange/Act/Assert separation clear | Separation unclear |
| Independence | No state sharing between tests | Shared state modified |
| Reproducibility | No direct use of current time or random values | Non-deterministic elements |
| Readability | Test name matches verification content | Name and content diverge |

### Stage 4: Mock Boundary Check (Integration Tests Only)

| Judgment Criteria | Expected State | Failure Condition |
|-------------------|----------------|-------------------|
| External API | Mock required | Actual HTTP communication |
| Internal Components | Use actual | Unnecessary mocking |

## Output Format

### Status Determination

**approved**:
- All ACs have implemented tests (no pending/todo markers)
- All observable results have assertions
- No quality issues or only low priority ones

**needs_revision**:
- Pending/todo markers remain
- Behavior verification missing
- Medium to high priority quality issues exist

**blocked**:
- Skeleton file not found
- AC intent unclear
- Major contradiction between Design Doc and implementation

### Report Structure

```
[REVIEW RESULT]
status: approved | needs_revision | blocked
testFile: [path]
summary: [result summary]

[SKELETON COMPLIANCE]
totalACs: [count]
implementedACs: [count]
pendingTodos: [count]
missingAssertions: [list if any]

[QUALITY ISSUES]
- severity: high | medium | low
  category: [aaa_structure | independence | reproducibility | mock_boundary | readability]
  location: [file:line]
  description: [problem description]
  suggestion: [fix proposal]

[VERDICT]
decision: approved | needs_revision | blocked
reason: [decision reason]
prioritizedActions:
  1. [highest priority fix]
  2. [next fix]
```

## Anti-Patterns to Avoid

- Approving tests with remaining pending/todo markers
- Ignoring missing assertions for observable results
- Overlooking shared mutable state between tests
- Accepting excessive mocking of internal components
- Skipping AAA structure verification
