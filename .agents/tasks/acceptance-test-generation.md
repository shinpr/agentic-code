# Acceptance Test Generation

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/rules/language/testing.md`
2. [LOAD IF NOT ACTIVE] `.agents/rules/core/documentation-criteria.md`
3. [LOAD IF NOT ACTIVE] `.agents/rules/core/testing-strategy.md`

**LOADING PROTOCOL:**
- STEP 1: CHECK if language/testing.md is active in working memory
- STEP 2: If language/testing.md NOT active → Execute BLOCKING READ
- STEP 3: CHECK if documentation-criteria.md is active in working memory
- STEP 4: If documentation-criteria.md NOT active → Execute BLOCKING READ
- STEP 5: CHECK if testing-strategy.md is active in working memory
- STEP 6: If testing-strategy.md NOT active → Execute BLOCKING READ
- STEP 7: CONFIRM all required rules active before proceeding

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/rules/language/testing.md` (if not active)
   - `.agents/rules/core/documentation-criteria.md` (if not active)
   - `.agents/rules/core/testing-strategy.md` (if not active)
2. Mark each with "[From acceptance-test-generation.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM acceptance-test-generation.md]
   Injected to work plan:
   ✓ BLOCKING READ: language/testing.md - testing standards
   ✓ BLOCKING READ: documentation-criteria.md - document analysis
   ✓ BLOCKING READ: testing-strategy.md - ROI-based test selection
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Rule Status Verification:
✓ language/testing.md - ACTIVE
✓ documentation-criteria.md - ACTIVE
✓ testing-strategy.md - ACTIVE
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

**1.4 Behavior-First Filtering [CRITICAL - PREVENTS LOW-ROI TEST GENERATION]**

Apply 3-check process to each AC before proceeding to test generation:

**Check 1: User-Observable**
- Question: "Can a user (or system operator) observe this behavior?"
- If NO → Skip AC with reason: `[IMPLEMENTATION_DETAIL]`
- If YES → Continue to Check 2

**Check 2: System Context**
- Question: "Requires full system integration to verify?"
- If NO → Skip AC with reason: `[UNIT_LEVEL]`
- If YES → Continue to Check 3

**Check 3: CI Verifiable**
- Question: "Is this verifiable deterministically in CI environment?"
- If NO → Skip AC with reason: `[NON_DETERMINISTIC]` or `[EXTERNAL_SERVICE]`
- If YES → Valid AC for test generation

**Skip Reason Tracking**:
```
AC-001: "Password hashed with bcrypt" → SKIP [IMPLEMENTATION_DETAIL]
AC-002: "Tax calculation returns correct value" → SKIP [UNIT_LEVEL]
AC-003: "API response time < 200ms" → SKIP [NON_DETERMINISTIC]
AC-004: "Email delivered to inbox" → SKIP [EXTERNAL_SERVICE]
AC-005: "User can view order history" → PASS (all checks)
```

**Expected Impact**: 40% of ACs filtered at this stage, preventing low-ROI test generation

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

### Stage 4: ROI-Based Selection and Budget Enforcement [REQUIRED]

**Purpose**: Select highest-value tests within budget constraints to prevent over-generation

**4.1 ROI Calculation**

For each test candidate from Stage 3, calculate ROI score:

```
ROI Score = (Business Value × User Frequency + Legal Requirement × 10 + Defect Detection)
            / Test Level Cost

Where:
- Business Value: 0-10 (revenue impact)
- User Frequency: 0-10 (% of users affected)
- Legal Requirement: 0 or 1 (boolean)
- Defect Detection: 0-10 (likelihood of catching bugs)
- Test Level Cost: Unit=3, Integration=11, E2E=38
```

**See**: `.agents/rules/core/testing-strategy.md` for detailed ROI framework

**4.2 Deduplication Check**

Before adding to selection pool:
1. Search existing test suite for similar scenarios
2. Check for overlapping coverage at different test levels
3. Decision:
   - Full coverage exists → Skip candidate
   - Partial coverage → Consider extending existing test
   - No coverage → Add to selection pool

**4.3 Push-Down Analysis**

For each integration/E2E candidate:
```
Can this be verified with unit test?
  YES → Remove from integration/E2E pool, recommend unit test
  NO → Continue

Already covered by integration test?
  YES → Don't create E2E version
  NO → Keep as E2E candidate
```

**4.4 Budget Enforcement**

**Hard Limits per Feature**:
- Integration Tests: MAX 3 tests
- E2E Tests: MAX 1-2 tests (only if ROI > 1.5)

**Selection Algorithm**:
1. Sort candidates by ROI score (descending)
2. Select top N within budget limits
3. Document selection rationale

**Critical User Journey Exception**:
Budget limits may be relaxed for:
- Revenue-impacting flows (payment, checkout)
- Legally required flows (GDPR, data protection)
- High-frequency core functionality (>80% users)

**Exception requires**: Explicit justification in generation report

**4.5 Selection Documentation**

For each selected test, document:
```
Test ID: INT-001
AC Mapping: AC-FUNC-001, AC-FUNC-003
ROI Score: 8.9
Selection Reason: Revenue-critical payment flow
Budget Slot: 1/3 (integration)
```

For each skipped candidate, document:
```
Candidate: "User profile image upload E2E"
ROI Score: 0.7
Skip Reason: Below E2E threshold (1.5), covered by integration test
Alternative: Existing integration test INT-005
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

## Out of Scope

**PRINCIPLE**: Generate only tests verifiable in isolated CI/CD environment with high automation ROI.

**External Dependencies** (Test contracts/interfaces instead):
- Real API calls to third-party services
- External authentication providers
- Payment/email/SMS delivery verification
- Real database connections → Use test DB or mocks

**Non-Deterministic in CI Environment**:
- Performance metrics, response time measurements
- Load/stress testing
- LLM output reproducibility (outputs vary by nature)
- Long-term operations (infrastructure/deployment scope)

**Implementation Details** (Not user-observable behavior):
- Internal function calls, code structure, internal operations
- Specific rendering/styling details → Test information presence, not layout
- Code organization or architectural patterns

**ACTION when AC contains out-of-scope items**:
1. Transform to verifiable behavior (e.g., external API → mock/contract test)
2. If transformation impossible → Generate test.skip() with manual test reference
3. Document rationale in test comment

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