# Document Review

## Required Rules [MANDATORY - MUST BE ACTIVE]

**SKILL AVAILABILITY VERIFICATION:**
1. [LOAD IF NOT ACTIVE] `.agents/skills/documentation-criteria/SKILL.md`
2. [CONDITIONAL LOAD] `.agents/skills/testing-strategy/SKILL.md` (if reviewing Design Doc with test strategy)

**LOADING PROTOCOL:**
- STEP 1: CHECK if documentation-criteria/SKILL.md is active in working memory
- STEP 2: If documentation-criteria/SKILL.md NOT active → Execute BLOCKING READ
- STEP 3: EVALUATE if testing-strategy/SKILL.md needed (Design Doc with test strategy section)
- STEP 4: If needed AND NOT active → Execute BLOCKING READ
- STEP 5: CONFIRM all required skills active before proceeding

## Purpose

Review technical documents (Design Docs, ADRs, PRDs) for completeness, consistency, and quality. Identify gaps, validate structure compliance, and evaluate failure scenario coverage.

## When to Use

- When reviewing existing design documents
- Before approving technical decisions
- When evaluating document quality from third-party perspective

## Required Information

- **documentPath**: Path to document to review (required)
- **documentType**: Type of document (required)
  - `design-doc`: Technical Design Document
  - `adr`: Architecture Decision Record
  - `prd`: Product Requirements Document
- **templatePath**: Path to template for validation baseline (optional - uses default if not provided)
- **reviewMode**:
  - `full`: Complete validation (default)
  - `structure`: Structure compliance only
  - `content`: Content quality only
  - `failure-scenarios`: Failure scenario coverage only

## Completion Conditions

□ Document loaded and type confirmed
□ Structure compliance verified against template
□ Content quality evaluated
□ Failure scenarios reviewed (for Design Docs)
□ Issues documented with severity
□ Verdict determined with rationale

## Review Process

### Stage 1: Document Type Identification

Confirm document type and determine validation baseline:
- If template path provided → Use specified template as baseline
- If no template provided → Request template path from user
- Default templates by type:
  - Design Doc → `.agents/tasks/technical-design.md`
  - ADR → ADR section in `.agents/tasks/technical-design.md`
  - PRD → PRD section in `.agents/skills/documentation-criteria/SKILL.md`

### Stage 2: Structure Compliance Check

#### For Design Doc

| Required Section | Check Item |
|-----------------|------------|
| Overview | Purpose clearly stated |
| Design Summary (Meta) | risk_level, constraints, unknowns defined |
| Agreement Checklist | Scope/Non-scope/Constraints documented |
| Existing Codebase Analysis | Investigation results included |
| Acceptance Criteria | Specific, testable conditions |
| Architecture | Approach, components, data flow defined |
| Integration Points | External dependencies identified |
| Testing Strategy | Test approach outlined |
| Risks and Mitigations | Technical risks documented |
| References | Sources cited |

#### For ADR

| Required Section | Check Item |
|-----------------|------------|
| Background | Problem context in 1-2 sentences |
| Options | Minimum 3 options evaluated |
| Comparison Matrix | Trade-offs quantified |
| Decision | Selected option with rationale |
| Decision Details | Why now / Why this / Known unknowns / Kill criteria |
| Implementation Guidelines | Principle-based guidelines |
| References | Documentation URLs cited |

#### For PRD

| Required Section | Check Item |
|-----------------|------------|
| Business Requirements | User value articulated |
| Success Metrics | KPIs in measurable format |
| User Stories | Use cases documented |
| MoSCoW Prioritization | Must/Should/Could/Won't defined |
| Scope Boundaries | MVP and future phases separated |

### Stage 3: Content Quality Check

| Check Item | Verification Content | Failure Condition |
|------------|---------------------|-------------------|
| Specificity | Concrete, not vague | Abstract statements without examples |
| Testability | Acceptance criteria verifiable | Cannot be tested |
| Consistency | No internal contradictions | Sections contradict each other |
| Completeness | All required sections present | Missing sections |
| Clarity | Unambiguous language | Multiple interpretations possible |

### Stage 4: Failure Scenario Review (Design Docs Only)

Identify failure scenarios across three categories:

| Category | Description | Required Coverage |
|----------|-------------|-------------------|
| Normal usage | Failures during typical operation | At least 1 scenario |
| High load | Failures under stress | At least 1 scenario |
| External failures | Failures from dependencies | At least 1 scenario |

For each identified scenario, verify:
- Failure scenario is explicitly documented
- Bottleneck element is specified
- Mitigation strategy is defined

### Stage 5: Technical Claim Verification

When sources exist:
- Verify claims with current best practices
- Check if referenced technologies/versions are current
- Flag outdated information

## Validation Checklist

### Structure Validation
- [ ] All required sections present
- [ ] Section order follows template
- [ ] Formatting consistent

### Content Validation
- [ ] Acceptance criteria specific and testable
- [ ] Technical decisions justified
- [ ] Risks identified and mitigated
- [ ] References cited and valid

### Failure Scenario Validation (Design Docs)
- [ ] Normal usage failure scenario identified
- [ ] High load failure scenario identified
- [ ] External failure scenario identified
- [ ] Bottlenecks specified for each scenario

### Consistency Validation
- [ ] No contradictions between sections
- [ ] Terminology used consistently
- [ ] Scope aligned throughout document

## Output Format

### Status Determination

**approved**:
- All required sections present and complete
- Content is specific and testable
- Failure scenarios covered (Design Docs)
- No high severity issues

**needs_revision**:
- Some sections incomplete
- Content quality issues exist
- Failure scenarios partially covered
- Medium severity issues present

**blocked**:
- Critical sections missing
- Major contradictions found
- Document type unclear
- Cannot proceed without significant rewrite

### Report Structure

```
[REVIEW RESULT]
documentType: design-doc | adr | prd
documentPath: [path]
verdict: approved | needs_revision | blocked
completenessRate: [X]%

[STRUCTURE COMPLIANCE]
requiredSections: [count]
presentSections: [count]
missingSections:
  - [section name]

[CONTENT QUALITY]
issues:
  - severity: high | medium | low
    section: [section name]
    issue: [problem description]
    suggestion: [specific improvement]

[FAILURE SCENARIO REVIEW] (Design Docs only)
normalUsage:
  covered: yes | no
  scenario: [if covered]
  bottleneck: [if covered]
highLoad:
  covered: yes | no
  scenario: [if covered]
  bottleneck: [if covered]
externalFailures:
  covered: yes | no
  scenario: [if covered]
  bottleneck: [if covered]

[VERDICT]
decision: approved | needs_revision | blocked
reason: [decision rationale]
prioritizedActions:
  1. [highest priority fix]
  2. [next fix]
```

## Review Principles

1. **Template Compliance**
   - Use document type template as baseline
   - Verify all required elements present

2. **Constructive Feedback**
   - Provide specific improvement suggestions
   - Prioritize issues by impact

3. **Objectivity**
   - Evaluate against documented standards
   - Avoid subjective preferences

4. **Actionability**
   - Each issue should have clear resolution path
   - Distinguish must-fix from nice-to-have

## Escalation Criteria

Recommend escalation when:
- Document contradicts existing ADRs
- Security implications not addressed
- Scope significantly exceeds original requirements
- Technical claims cannot be verified

## Anti-Patterns to Avoid

- Approving documents with missing required sections
- Ignoring vague acceptance criteria
- Overlooking failure scenario gaps
- Accepting documents without references
- Providing feedback without specific solutions
