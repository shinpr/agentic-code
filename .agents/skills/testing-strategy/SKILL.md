---
name: testing-strategy
description: "Prioritizes tests based on ROI and critical user journeys. Use when: deciding test coverage, selecting test types, or budgeting effort."
---

# Test Strategy: ROI-Based Selection

## Core Principle: Maximum Coverage, Minimum Tests

**Philosophy**: 10 reliable tests > 100 unmaintained tests

Quality over quantity - focus resources on high-value tests that provide maximum coverage with minimum maintenance burden.

## ROI Calculation Framework

### ROI Formula

```
ROI Score = (Business Value × User Frequency + Legal Requirement × 10 + Defect Detection)
            / (Creation Cost + Execution Cost + Maintenance Cost)
```

### Value Components

**Business Value** (0-10 scale):
- 10: Revenue-critical (payment processing, checkout)
- 8-9: Core business features (user registration, data persistence)
- 5-7: Important secondary features (search, filtering)
- 2-4: Nice-to-have features (UI enhancements)
- 0-1: Cosmetic features

**User Frequency** (0-10 scale):
- 10: Every user, every session (authentication)
- 8-9: >80% of users regularly
- 5-7: 50-80% of users occasionally
- 2-4: <50% of users rarely
- 0-1: Edge case users only

**Legal Requirement** (boolean → 0 or 1):
- 1: Legally mandated (GDPR compliance, data protection)
- 0: Not legally required

**Defect Detection** (0-10 scale):
- 10: High likelihood of catching critical bugs
- 5-7: Moderate likelihood of catching bugs
- 0-4: Low likelihood (simple logic, well-tested patterns)

### Cost Components

**Test Level Cost Table**:

| Test Level  | Creation Cost | Execution Cost | Maintenance Cost | Total Cost |
|-------------|---------------|----------------|------------------|------------|
| Unit        | 1             | 1              | 1                | 3          |
| Integration | 3             | 5              | 3                | 11         |
| E2E         | 10            | 20             | 8                | 38         |

**Cost Rationale**:
- **Unit Tests**: Fast to write, fast to run, rarely break from refactoring
- **Integration Tests**: Moderate setup, slower execution, moderate maintenance
- **E2E Tests**: Complex setup, very slow execution, high brittleness (12x more expensive than unit tests)

### ROI Calculation Examples

**Example 1: Payment Processing Integration Test**
```
Business Value: 10 (revenue-critical)
User Frequency: 9 (90% of users)
Legal Requirement: 0
Defect Detection: 8 (high complexity)

ROI = (10 × 9 + 0 + 8) / 11 = 98 / 11 = 8.9
Decision: HIGH ROI → Generate this test
```

**Example 2: UI Theme Toggle E2E Test**
```
Business Value: 2 (cosmetic feature)
User Frequency: 5 (50% of users)
Legal Requirement: 0
Defect Detection: 3 (simple logic)

ROI = (2 × 5 + 0 + 3) / 38 = 13 / 38 = 0.34
Decision: LOW ROI → Skip this E2E test (consider unit test instead)
```

**Example 3: GDPR Data Deletion E2E Test**
```
Business Value: 8 (critical compliance)
User Frequency: 1 (rare user action)
Legal Requirement: 1 (legally mandated)
Defect Detection: 9 (high consequences if broken)

ROI = (8 × 1 + 1 × 10 + 9) / 38 = 27 / 38 = 0.71
Decision: MEDIUM ROI → Generate (legal requirement justifies cost)
```

## Critical User Journey Definition

Tests with HIGH priority regardless of strict ROI calculation:

### Mandatory Coverage Areas

1. **Revenue-Impacting Flows**
   - Payment processing end-to-end
   - Checkout and order completion
   - Subscription management
   - Purchase confirmation and receipts

2. **Legally Required Flows**
   - GDPR data deletion/export
   - User consent management
   - Data protection compliance
   - Regulatory audit trails

3. **High-Frequency Core Functionality**
   - User authentication/authorization (>80% of users)
   - Core CRUD operations for primary entities
   - Critical business workflows
   - Data integrity for primary data models

**Budget Exception**: Critical User Journeys may exceed standard budget limits with explicit justification.

## Test Selection Guidelines

### Selection Thresholds

**Integration Tests**:
- ROI > 3.0: Strong candidate
- ROI 1.5-3.0: Consider based on available budget
- ROI < 1.5: Skip or convert to unit test

**E2E Tests**:
- ROI > 2.0: Strong candidate
- ROI 1.0-2.0: Consider if Critical User Journey
- ROI < 1.0: Skip (too expensive relative to value)

### Push-Down Analysis

Before generating higher-level test, ask:

1. **Can this be unit-tested?**
   - YES → Generate unit test instead
   - NO → Continue to integration test consideration

2. **Already covered by integration test?**
   - YES → Don't create E2E version
   - NO → Consider E2E test if ROI justifies

**Example**:
- "Tax calculation accuracy" → Unit test (pure logic)
- "Tax applied to order total" → Integration test (multiple components)
- "User sees correct tax in checkout flow" → E2E test only if Critical User Journey

## Deduplication Strategy

Before generating any test:

1. **Search existing test suite** for similar coverage
2. **Check for overlapping scenarios** at different test levels
3. **Identify redundant verifications** already covered elsewhere

**Decision Matrix**:
```
Existing coverage found?
  → Full coverage: Skip new test
  → Partial coverage: Extend existing test
  → No coverage: Generate new test
```

## Application in Test Generation

### Phase 1: Candidate Enumeration
- List all possible test scenarios
- Assign ROI metadata to each candidate

### Phase 2: ROI-Based Selection
1. Calculate ROI for each candidate
2. Apply deduplication checks
3. Apply push-down analysis
4. Sort by ROI (descending)

### Phase 3: Budget Enforcement
- Select top N tests within budget limits
- Document budget usage
- Report selection rationale

**See**: `.agents/tasks/acceptance-test-generation.md` for detailed implementation process

## Continuous Improvement

### Metrics to Track

1. **Selection Rate**: Tests generated / Total candidates
   - Target: 25-35% (indicates effective filtering)

2. **Average ROI**: Average ROI of generated tests
   - Target: >3.0 for integration, >1.5 for E2E

3. **Budget Utilization**: Actual tests / Budget limit
   - Target: 80-100% (full utilization of valuable test slots)

4. **Defect Detection Rate**: Bugs caught / Total tests
   - Track over time to validate ROI predictions

### Calibration

Periodically review:
- Are high-ROI tests actually catching bugs?
- Are cost estimates accurate?
- Do business value ratings align with stakeholder priorities?

**Adjust formula weights based on empirical data**

## Anti-Patterns to Avoid

❌ **Gaming the System**:
- Inflating business value scores to justify favorite tests
- Ignoring ROI when it contradicts intuition
- Cherry-picking ROI calculation only for preferred tests

✅ **Proper Usage**:
- Apply ROI calculation consistently to all candidates
- Document justification when overriding ROI decisions
- Use empirical data to calibrate scores over time

❌ **Analysis Paralysis**:
- Spending excessive time on precise ROI calculations
- Debating single-point differences in scores
- Treating ROI as exact science rather than decision aid

✅ **Practical Application**:
- Use ROI for relative prioritization, not absolute precision
- Focus on order-of-magnitude differences (8.9 vs 0.34)
- Make quick decisions for obvious high/low ROI cases
