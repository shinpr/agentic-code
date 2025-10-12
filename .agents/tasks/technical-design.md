# Technical Design

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [VERIFY ACTIVE] `.agents/rules/core/metacognition.md` (loaded at session start)
2. [LOAD IF NOT ACTIVE] `.agents/rules/core/documentation-criteria.md`
3. [CONDITIONAL LOAD] `.agents/rules/contextual/architecture/implementation-approach.md` (if Medium scale 3+ files OR Large scale)

**LOADING PROTOCOL:**
- STEP 1: VERIFY metacognition.md is active from initial session setup
- STEP 2: CHECK if documentation-criteria.md is active in working memory
- STEP 3: If documentation-criteria.md NOT active → Execute BLOCKING READ
- STEP 4: EVALUATE conditions for implementation-approach.md (Medium/Large scale: 3+ files)
- STEP 5: If conditions met AND implementation-approach.md NOT active → Execute BLOCKING READ
- STEP 6: CONFIRM all required rules active before proceeding

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/rules/core/documentation-criteria.md` (if not active)
   - `.agents/rules/contextual/architecture/implementation-approach.md` (if conditions met)
2. Mark each with "[From technical-design.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM technical-design.md]
   Injected to work plan:
   ✓ BLOCKING READ: documentation-criteria.md - ADR/Design Doc criteria
   ✓ BLOCKING READ: implementation-approach.md - strategy selection (if applicable)
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Rule Status Verification:
✓ metacognition.md - ACTIVE
✓ documentation-criteria.md - ACTIVE
✓ implementation-approach.md - [ACTIVE/NOT NEEDED]
```

## Phase Entry Gate [BLOCKING - SYSTEM HALT IF VIOLATED]

**CHECKPOINT: System CANNOT proceed until ALL boxes checked:**
☐ [VERIFIED] Plan Injection completed (from task-analysis.md Step 8)
☐ [VERIFIED] Work plan contains "BLOCKING READ technical-design.md" item
☐ [VERIFIED] Project structure confirmed
☐ [VERIFIED] PRD reviewed (if exists) with requirements understood
☐ [VERIFIED] Related design documents investigation COMPLETED with evidence
☐ [VERIFIED] Existing ADRs reviewed for relevant decisions
☐ [VERIFIED] Existing codebase investigation COMPLETED with evidence
☐ [VERIFIED] Similar functionality search EXECUTED with results documented
☐ [VERIFIED] Required rules LOADED with file paths listed above
☐ [VERIFIED] SESSION_BASELINE_DATE established and active

**METACOGNITION GATE [MANDATORY]:**
BEFORE starting design, execute metacognition assessment:
- Understand fundamental goal (not surface task)
- Verify all necessary information available
- Confirm approach aligns with existing patterns

**GATE ENFORCEMENT:**
IF any box unchecked → HALT → Return to uncompleted step
IF attempting to skip → CRITICAL ERROR

## Purpose

Create ADR and Design Documents.

### ADR Creation Triggers [EVALUATE DURING DESIGN]:
- Data flow changes → ADR-ARCH-DATA-FLOW
- Architecture changes → ADR-ARCH-[SPECIFIC]
- External dependency changes → ADR-DEPS-[NAME]
- New technology introduction → ADR-TECH-[NAME] [BLOCKING: MUST CREATE]
- Performance optimization → ADR-PERF-[ASPECT]
- Security implementation → ADR-SEC-[FEATURE]

**EVALUATION**: Check conditions above - if ANY trigger met, ADR creation is MANDATORY

## Completion Conditions

### For ADR:
□ Problem background clearly stated
□ Minimum 3 options evaluated
□ Trade-offs explicitly documented
□ Decision rationale recorded
□ Latest technology research conducted
□ References cited with URLs
□ Consistency with existing architecture verified

### For Design Doc:
□ Agreement checklist completed
□ Existing codebase analysis included
□ Architecture approach documented
□ Component structure defined
□ Data flow mapped
□ Integration points identified
□ Error handling strategy defined
□ Testing strategy outlined
□ Acceptance criteria defined and verifiable
□ References cited

## Mandatory Process Before Document Creation [STRICT COMPLIANCE]

**These steps MUST be completed to pass the entry gate:**

### 1. Existing Documentation Investigation [REQUIRED - CANNOT SKIP]
Must be performed before any design:

1. **PRD Investigation** (if applicable)
   - Check for related PRD in `docs/prd/` directory
   - Review requirements and success criteria
   - Note any constraints or scope boundaries defined
   - Include PRD reference in design doc header

2. **Related Design Documents Search**
   - Search existing designs in `docs/design/` directory
   - Identify similar or dependent features
   - Review architectural patterns used
   - Note integration points and data flows

3. **Existing ADRs Review**
   - Search ADRs in `docs/adr/` directory
   - Identify relevant technical decisions
   - Check for superseded ADRs that might need updating
   - List applicable ADRs in "Prerequisite ADRs" section

### 2. Existing Code Investigation [REQUIRED - CANNOT SKIP]
Must be performed after documentation review:

1. **Implementation File Path Verification**
   - First grasp overall project structure
   - Then identify target files by searching for relevant component/module names
   - Record and distinguish between existing implementation locations and planned new locations

2. **Existing API Investigation** (Only when changing existing features)
   - List major public operations of target component
   - Identify call sites by searching for component usage patterns

3. **Similar Functionality Search** (Pattern 5 prevention from ai-development-guide.md)
   - Search existing code for keywords related to planned functionality
   - Look for implementations with same domain, responsibilities, or configuration patterns
   - Decision and action:
     - Similar functionality found → Use that implementation (do not create new)
     - Similar functionality is technical debt → Create ADR improvement proposal
     - No similar functionality → Proceed with new implementation

4. **Include in Design Doc**
   - Always include investigation results in "## Existing Codebase Analysis" section
   - Clearly document similar functionality search results
   - Record adopted decision and rationale

### 3. Agreement Checklist【MOST IMPORTANT】
Must be performed at the beginning of Design Doc creation:

1. **List agreements with user in bullet points**
   - Scope (what to change)
   - Non-scope (what not to change)
   - Constraints (compatibility requirements, etc.)
   - Performance requirements

2. **Confirm reflection in design**
   - [ ] Specify where each agreement is reflected
   - [ ] Confirm no design contradicts agreements
   - [ ] If any agreements not reflected, state reason

### 4. Latest Information Research [BLOCKING REQUIREMENT]

**Web research MUST use SESSION_BASELINE_DATE year - NEVER hardcoded years:**
- Format: "[technology] best practices [YEAR from SESSION_BASELINE_DATE]"
- Required for: New technology/library introduction, security implementations
- Verify: Latest versions, breaking changes, security updates as of SESSION_BASELINE_DATE

**Search Examples**: `[tech] best practices [YEAR]`, `[framework] official docs`

## ADR Creation Guidelines

### ADR Superseding Process [MANDATORY FOR RELATED ADRS]

When creating an ADR that replaces or modifies a previous decision:

1. **Identify Related ADRs**
   - Search for ADRs covering the same domain/technology
   - Check for ADRs that would be contradicted by new decision
   - List all ADRs that need to be superseded

2. **Update Existing ADR Status**
   - Change status of old ADR: `Status: Superseded by ADR-XXXX`
   - Add superseding note with date and new ADR reference
   - DO NOT delete old ADRs - maintain history

3. **Reference in New ADR**
   - Add "Supersedes: ADR-YYYY" in header
   - Explain what changed and why
   - Maintain traceability of decision evolution

### ADR Structure

```markdown
# ADR-XXXX: [Title]
Status: Proposed
Supersedes: ADR-YYYY (if applicable)

## Background
[Technical challenges and constraints in 1-2 sentences]

## Options

### Option A: [Approach Name]
- Overview: [One sentence]
- Benefits: [2-3 items]
- Drawbacks: [2-3 items]
- Effort: X days
- Risk: Low/Medium/High

### Option B/C: [Similarly structured, minimum 3 options total]

## Comparison Matrix
| Evaluation Axis | Option A | Option B | Option C |
|----------------|----------|----------|----------|
| Implementation Effort | X days | Y days | Z days |
| Maintainability | High/Med/Low | ... | ... |
| Performance Impact | +/-/None | ... | ... |

## Decision
Option [X] selected. Rationale: [2-3 sentences with trade-offs]

## Implementation Guidelines
[Principle-based guidelines]

## References
- [Documentation](URL) - Description
```

## Design Doc Creation Guidelines

### Design Doc Structure

```markdown
# Technical Design: [Feature Name]

## PRD Reference
- PRD: `docs/prd/[feature-name]-prd.md` (if applicable)
- Requirements addressed: [key requirements]

## Overview
[Brief description]

## Agreement Checklist
- [ ] Scope: [what to implement]
- [ ] Non-scope: [what not to change]
- [ ] Constraints: [limitations]
- [ ] Performance: [requirements]

## Existing Codebase Analysis
[Investigation results, similar functionality, decision]

## Requirements
[Functional, Non-functional, Constraints]

## Acceptance Criteria
### Functional Requirements
- [ ] [Specific testable conditions]

### Non-functional Requirements
- [ ] [Performance/Security metrics]

## Architecture

### Approach
[Selected pattern and rationale]

### Components
[Component list with responsibilities]

### Data Flow
[System data movement]

### Integration Points
[External systems, APIs, Databases]

### Integration Point Analysis [MANDATORY for feature modifications]
[Use format from section above]

## Implementation Details

### Technology Stack
[Languages, frameworks, libraries, tools]

### Change Impact Map
[Target, Direct impact, Indirect impact]

## Testing Strategy
[Unit and integration test approaches]

## Risks and Mitigations
[Technical risks]

## References
- [Source](URL) - Description
```

## Acceptance Criteria Creation Guidelines

**Principle**: Specific, verifiable conditions that translate to test cases
**Good**: "After auth with correct credentials, navigates to dashboard"
**Bad**: "Login works"

## Design Validation

Verify: Completeness, Consistency, Feasibility, Testability, Maintainability, Scalability

## Deliverables

### When ADR needed:
- ADR document in `docs/adr/ADR-[4-digit]-[title].md`
- Status: "Proposed" → "Accepted" or "Rejected" after decision

### Always:
- Design document in `docs/design/[feature-name]-design.md`
- Include all investigation results
- Include all references

## Post-Design Metacognition Gate [MANDATORY]

**AFTER completing design document:**
☐ Execute "After Completion" metacognition checklist
☐ Verify design addresses all requirements
☐ Confirm technical approach is simplest viable solution
☐ Document any assumptions or risks identified
☐ Evaluate if additional research needed

**CANNOT proceed to implementation without:**
- Metacognition assessment complete
- Design document created
- User approval received

## Anti-Patterns to Avoid

**ADR Anti-Patterns**
Recommended: Evaluate 3+ options with research-backed trade-offs
Reason: Single option decisions lack validation; options without drawbacks are unrealistic

**Design Anti-Patterns**
Recommended: Specific, testable acceptance criteria with impact analysis
Reason: Vague criteria prevent verification; missing impact analysis causes integration issues