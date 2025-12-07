# Code Review

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/rules/language/rules.md`
2. [LOAD IF NOT ACTIVE] `.agents/rules/core/ai-development-guide.md`

**LOADING PROTOCOL:**
- STEP 1: CHECK if `.agents/rules/language/rules.md` is active in working memory
- STEP 2: If NOT active → Execute BLOCKING READ
- STEP 3: CHECK if `.agents/rules/core/ai-development-guide.md` is active in working memory
- STEP 4: If NOT active → Execute BLOCKING READ
- STEP 5: CONFIRM all required rules active before proceeding

## Purpose

Validate Design Doc compliance and evaluate implementation completeness from a third-party perspective. Detect missing implementations, validate acceptance criteria, and provide quality reports.

## When to Use

- After implementation is complete
- When reviewing code changes (PR review, post-implementation review)
- When validating Design Doc compliance

## Required Information

- **implementationFiles**: List of files to review (required)
- **designDocPath**: Path to Design Document for validation baseline (optional - if provided, enables compliance validation)
- **workPlanPath**: Path to work plan for completed task verification (optional)
- **reviewMode**:
  - `full`: Complete validation (default)
  - `acceptance`: Acceptance criteria only (requires designDocPath)
  - `architecture`: Architecture compliance only (requires designDocPath)
  - `quality`: Code quality check only (no designDocPath needed)

## Completion Conditions

□ All implementation files reviewed
□ Quality issues documented with severity
□ Compliance rate calculated (if designDocPath provided)
□ Verdict determined with rationale
□ Prioritized actions provided

## Review Process

### Stage 1: Load Baseline Documents (if designDocPath provided)

Extract from Design Doc:
- Functional requirements and acceptance criteria
- Architecture design
- Data flow
- Error handling policy

If designDocPath not provided, skip to Stage 3 (Code Quality Check).

### Stage 2: Implementation Validation (if designDocPath provided)

For each implementation file, verify:

| Check Item | Verification Content |
|------------|---------------------|
| AC Implementation | Acceptance criteria has corresponding code |
| Interface Compliance | Implementation matches Design Doc interfaces |
| Error Handling | Error scenarios properly handled |
| Test Existence | Test cases exist for functionality |

### Stage 3: Code Quality Check (always executed)

| Metric | Ideal | Maximum | Failure Condition |
|--------|-------|---------|-------------------|
| Function length | <50 lines | 200 lines | Exceeds maximum |
| Nesting depth | ≤3 levels | 4 levels | Exceeds maximum |
| Single responsibility | 1 function = 1 purpose | - | Multiple responsibilities |
| Error handling | All error paths covered | - | Missing error handling |

### Stage 4: Architecture Compliance (if designDocPath provided)

| Check Item | Verification Content |
|------------|---------------------|
| Design Match | Implementation matches Design Doc architecture |
| Data Flow | Data flow follows design |
| Dependencies | Component dependencies correct |
| Separation | Responsibilities properly separated |
| Duplicate Check | No unnecessary duplicate implementations (Pattern 5 from ai-development-guide.md) |

## Validation Checklist

### Functional Requirements (if designDocPath provided)
- [ ] All acceptance criteria have corresponding implementations
- [ ] Happy path scenarios implemented
- [ ] Error scenarios handled
- [ ] Edge cases considered
- [ ] Implementation matches Design Doc architecture
- [ ] Data flow follows design

### Quality Validation (always executed)
- [ ] Comprehensive error handling
- [ ] Appropriate logging
- [ ] Tests exist for functionality
- [ ] No unnecessary duplicate implementations
- [ ] Responsibilities properly separated

## Output Format

### Status Determination

**pass** (90%+ compliance):
- All critical acceptance criteria implemented
- No high severity quality issues
- Architecture compliance verified

**needs_improvement** (70-89% compliance):
- Some acceptance criteria gaps
- Medium severity quality issues exist
- Minor architecture deviations

**needs_redesign** (<70% compliance):
- Major acceptance criteria missing
- High severity quality issues
- Significant architecture violations

### Report Structure

```
[REVIEW RESULT]
complianceRate: [X]%
verdict: pass | needs_improvement | needs_redesign
designDoc: [path]
filesReviewed: [count]

[ACCEPTANCE CRITERIA]
totalACs: [count]
fulfilledACs: [count]
unfulfilledItems:
  - item: [AC name]
    priority: high | medium | low
    solution: [specific implementation approach]

[QUALITY ISSUES]
- severity: high | medium | low
  type: long_function | deep_nesting | multiple_responsibilities | missing_error_handling
  location: [file:line or file:function]
  description: [problem description]
  suggestion: [specific improvement]

[ARCHITECTURE COMPLIANCE]
designMatch: yes | partial | no
issues:
  - [architecture issue if any]

[VERDICT]
decision: pass | needs_improvement | needs_redesign
reason: [decision rationale]
nextAction: [highest priority action needed]
prioritizedActions:
  1. [highest priority fix]
  2. [next fix]
```

## Review Principles

1. **Maintain Objectivity**
   - Evaluate independent of implementation context
   - Use Design Doc as single source of truth

2. **Constructive Feedback**
   - Provide solutions, not just problems
   - Clarify priorities

3. **Quantitative Assessment**
   - Quantify wherever possible
   - Eliminate subjective judgment

4. **Respect Implementation**
   - Acknowledge good implementations
   - Present improvements as actionable items

## Escalation Criteria

Recommend escalation when:
- Design Doc itself has deficiencies
- Security concerns discovered
- Critical performance issues found
- Implementation significantly deviates from design

## Special Considerations

### For Prototypes/MVPs
- Prioritize functionality over completeness
- Consider future extensibility

### For Refactoring
- Maintain existing functionality as top priority
- Quantify improvement degree

### For Emergency Fixes
- Verify minimal implementation solves problem
- Check technical debt documentation

## Anti-Patterns to Avoid

- Approving code that doesn't meet acceptance criteria
- Ignoring architecture violations
- Overlooking missing error handling
- Accepting code without corresponding tests
- Providing vague feedback without specific solutions
