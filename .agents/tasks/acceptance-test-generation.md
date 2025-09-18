# Acceptance Test Generation

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/rules/language/testing.md`
2. [LOAD IF NOT ACTIVE] `.agents/rules/core/documentation-criteria.md`

**LOADING PROTOCOL:**
- STEP 1: CHECK if language/testing.md is active in working memory
- STEP 2: If language/testing.md NOT active → Execute BLOCKING READ
- STEP 3: CHECK if documentation-criteria.md is active in working memory
- STEP 4: If documentation-criteria.md NOT active → Execute BLOCKING READ
- STEP 5: CONFIRM all required rules active before proceeding

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/rules/language/testing.md` (if not active)
   - `.agents/rules/core/documentation-criteria.md` (if not active)
2. Mark each with "[From acceptance-test-generation.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM acceptance-test-generation.md]
   Injected to work plan:
   ✓ BLOCKING READ: language/testing.md - testing standards
   ✓ BLOCKING READ: documentation-criteria.md - document analysis
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Rule Status Verification:
✓ language/testing.md - ACTIVE
✓ documentation-criteria.md - ACTIVE
```

## Phase Entry Gate [BLOCKING - SYSTEM HALT IF VIOLATED]

**CHECKPOINT: System CANNOT proceed until ALL boxes checked:**
☐ [VERIFIED] Plan Injection completed (from acceptance-test-generation.md)
☐ [VERIFIED] Work plan contains ALL BLOCKING READs from this file
☐ [VERIFIED] Design document exists and contains Acceptance Criteria section
☐ [VERIFIED] Project testing structure investigated (existing test patterns)
☐ [VERIFIED] Test framework configuration confirmed
☐ [VERIFIED] Required rules LOADED with file paths listed above
☐ [VERIFIED] SESSION_BASELINE_DATE established and active

**GATE ENFORCEMENT:**
IF any box unchecked → HALT → Return to uncompleted step
IF attempting to skip → CRITICAL ERROR

## Purpose

Transform Design Document Acceptance Criteria (ACs) into structured integration and end-to-end test skeletons. Convert multi-dimensional requirements into measurable, prioritized test cases with comprehensive traceability.

## When to Use

- After technical design document completion
- When Acceptance Criteria are defined and need verification
- Before implementation phase starts
- When test-driven development approach is required
- For complex features requiring systematic test coverage

## Completion Conditions

□ Design document Acceptance Criteria analyzed and decomposed
□ Multi-dimensional requirements mapped (functional, UX, technical, integration, quality)
□ Test priorities assigned using risk-based analysis
□ Integration test skeletons generated with pending/placeholder markers
□ E2E test skeletons generated with pending/placeholder markers
□ Verification points clearly documented for each test case
□ Traceability matrix created linking tests to original ACs
□ Edge cases systematically identified and included
□ Test execution order optimized
□ Metadata annotations added for downstream processes

## Mandatory Process [STRICT COMPLIANCE]

### Stage 1: Document Analysis [REQUIRED - CANNOT SKIP]

**1.1 Design Document Investigation**
1. **Locate Design Document**
   - Search `docs/design/` directory for relevant design document
   - Verify document contains Acceptance Criteria section
   - Extract all ACs with their identifiers

2. **Acceptance Criteria Extraction**
   - Parse functional requirements ACs
   - Parse non-functional requirements ACs
   - Parse UX/UI requirements ACs
   - Parse integration requirements ACs
   - Parse quality/performance requirements ACs

3. **Requirement Layer Separation**
   - **Functional Layer**: Core business logic and features
   - **UX Layer**: User experience and interface requirements
   - **Technical Layer**: Performance, security, reliability constraints
   - **Integration Layer**: External system interactions and data flows
   - **Quality Layer**: Testing, monitoring, and maintenance standards

**1.2 Dependency and Constraint Mapping**
1. **Identify Dependencies**
   - AC-to-AC dependencies (prerequisite relationships)
   - External system dependencies
   - Data dependencies and flows
   - User state dependencies

2. **Constraint Analysis**
   - Technical constraints (performance limits, browser support)
   - Business constraints (regulatory, policy requirements)
   - Resource constraints (time, infrastructure limits)

**1.3 Measurability Assessment**
   - Evaluate each AC for testability
   - Identify ambiguous or non-measurable criteria
   - Flag ACs requiring clarification
   - Document assumption points

### Stage 2: Strategic Interpretation [REQUIRED]

**2.1 Context-Dependent Analysis**
1. **Nuance Identification**
   - Implicit requirements (security, accessibility)
   - Cross-cutting concerns (logging, error handling)
   - Edge case scenarios (empty states, error conditions)
   - Integration failure scenarios

2. **Risk Impact Evaluation**
   ```
   critical-path: core-user-journeys
   business: high-value/risk
   technical: high-complexity
   integration: external-deps
   ```

**2.2 Interpretation Criteria Application**
1. **Consistency Standards**
   - Apply uniform interpretation across similar ACs
   - Maintain consistent granularity levels
   - Ensure compatible verification approaches

2. **Coverage Standards**
   - Ensure comprehensive requirement coverage
   - Identify testing gaps
   - Document coverage rationale

### Stage 3: Test Case Structuring [REQUIRED]

**3.1 Priority Determination**
```
P0: critical - core/security/data
P1: high - key features/performance
P2: medium - secondary/UX
P3: low - edge/nice-to-have
```

**3.2 Edge Case Selection**
```
boundary: min/max/empty
error: network/invalid-input
state: complex-combinations
concurrency: multi-user/race
```

**3.3 Verification Point Design**
```
setup: initial-state
action: user/system-operation
expect: measurable-outcome
cleanup: post-test-state
```

**3.4 Test Execution Optimization**
```
order: minimize-setup/teardown
data: shared|isolated
parallel: safe|sequential
env: dev|staging|prod
```

## Test Generation Guidelines

**Note:** The following structures use language-agnostic pseudocode. Implement using your project's test framework conventions.

### Integration Test Structure

```
SUITE: [Feature] Integration
  GROUP: [AC-ID] [Description]
    CASE [PENDING]: P[0-3] [verification] when [condition]
      @ac: [ID]
      @setup: [initial state]
      @action: [operation]
      @verify: [expected outcome]
```

### E2E Test Structure

```
SUITE: [Feature] E2E
  GROUP: [Journey] [Description]
    CASE [PENDING]: P[0-3] complete [goal] via [path]
      @ac: [ID1,ID2]
      @path: [step1 > step2 > step3]
      @verify: [end state]
```

### Test Metadata

```
@ac: [IDs]
@risk: high|medium|low
@impact: critical|high|medium|low
@data: isolated|shared|external
@time: fast|medium|slow
@env: dev|staging|prod
@deps: [dependencies]
```

## Test Framework Investigation [MANDATORY BEFORE GENERATION]

**Before generating tests, MUST investigate:**

1. **Existing Test Structure**
   - Analyze current test file organization
   - Identify existing test patterns and conventions
   - Document test framework configuration and available testing tools

2. **Test Categories Present**
   - Unit test patterns and location
   - Integration test setup and structure
   - E2E test configuration and helpers
   - Test utility functions and mocks

3. **Framework-Specific Requirements**
   - Test file naming conventions
   - Setup/teardown patterns
   - Assertion libraries used
   - Mock/stub patterns

**Investigation Results:**
```
framework: [name]
integration_path: [path]
e2e_path: [path]
patterns: [existing]
naming: [convention]
utilities: [available]
```

## Traceability Matrix

```
INT-001: Auth validation | AC-FUNC-001,AC-SEC-002 | P0 | High
E2E-001: Registration flow | AC-FUNC-001,AC-UX-003,AC-FUNC-005 | P0 | Critical
```

## Quality Gates

**Before test generation completion:**
□ All ACs mapped to at least one test case
□ Critical path scenarios covered by P0 tests
□ Edge cases systematically included
□ Test priorities assigned using risk analysis
□ Verification points clearly documented
□ Framework conventions followed
□ Traceability matrix complete

## Anti-Patterns to Avoid

**Document Analysis Anti-Patterns:**
- Skipping requirement layer separation
- Ignoring implicit requirements
- Missing dependency analysis
- Accepting non-measurable ACs without clarification

**Test Generation Anti-Patterns:**
- Creating tests without clear verification points
- Ignoring existing test patterns and conventions
- Missing traceability to source ACs
- Failing to prioritize tests by risk
- Generating tests that can't be executed
- Skipping edge case analysis
- Creating overly broad test descriptions

**Coverage Anti-Patterns:**
- Testing only happy path scenarios
- Ignoring integration failure cases
- Missing cross-cutting concerns
- Focusing only on functional requirements

## Post-Generation Validation [MANDATORY]

**AFTER completing test generation:**
☐ Execute "After Completion" metacognition checklist
☐ Verify all ACs have corresponding test coverage
☐ Confirm test framework conventions followed
☐ Validate test priorities align with business risk
☐ Review traceability matrix completeness
☐ Ensure tests are executable (no syntax errors in skeletons)

**CANNOT proceed to implementation without:**
- Test generation validation complete
- Traceability matrix approved
- Test framework compliance verified
- User approval on test coverage approach