# Product Requirements Document (PRD) Creation

## Required Rules [MANDATORY - MUST BE ACTIVE]

**SKILL AVAILABILITY VERIFICATION:**
1. [VERIFY ACTIVE] `.agents/skills/metacognition/SKILL.md` (loaded at session start)
2. [LOAD IF NOT ACTIVE] `.agents/skills/documentation-criteria/SKILL.md`

**LOADING PROTOCOL:**
- STEP 1: VERIFY metacognition/SKILL.md is active from initial session setup
- STEP 2: CHECK if documentation-criteria/SKILL.md is active in working memory
- STEP 3: If documentation-criteria/SKILL.md NOT active → Execute BLOCKING READ
- STEP 4: CONFIRM all skills active before proceeding

## Plan Injection Requirement [MANDATORY]

**Upon reading this file, IMMEDIATELY inject to work plan:**
1. All BLOCKING READs identified in Loading Protocol above:
   - `.agents/skills/documentation-criteria/SKILL.md` (if not active)
2. Mark each with "[From prd-creation.md]" source tag
3. Show evidence of injection:
   ```
   [PLAN INJECTION FROM prd-creation.md]
   Injected to work plan:
   ✓ BLOCKING READ: documentation-criteria/SKILL.md - PRD creation criteria
   Status: VERIFIED
   ```

**ENFORCEMENT:** Cannot proceed without Plan Injection evidence

**EVIDENCE REQUIRED:**
```
Skill Status Verification:
✓ metacognition/SKILL.md - ACTIVE (from session setup)
✓ documentation-criteria/SKILL.md - ACTIVE (loaded/verified)
```

## Phase Entry Gate [BLOCKING - SYSTEM HALT IF VIOLATED]

**CHECKPOINT: System CANNOT proceed until ALL boxes checked:**
☐ [VERIFIED] THIS FILE (`prd-creation.md`) has been READ and is active
☐ [VERIFIED] Plan Injection completed (from prd-creation.md Plan Injection Requirement)
☐ [VERIFIED] Work plan contains ALL BLOCKING READs from this file
☐ [VERIFIED] Project structure confirmed
☐ [VERIFIED] Existing PRDs investigation COMPLETED with evidence
☐ [VERIFIED] Related documentation search EXECUTED with results documented
☐ [VERIFIED] Required rules LOADED with file paths listed above
☐ [VERIFIED] User requirements gathered and clarified
☐ [VERIFIED] SESSION_BASELINE_DATE established and active

**METACOGNITION GATE [MANDATORY]:**
BEFORE starting PRD creation, execute metacognition assessment:
- Understand business goals (not just technical implementation)
- Verify all stakeholder needs identified
- Confirm user value is clearly defined

**GATE ENFORCEMENT:**
IF any box unchecked → HALT → Return to uncompleted step
IF attempting to skip → CRITICAL ERROR

## Purpose

Create Product Requirements Documents for new features or significant changes.

## When to Use

### PRD Required When [AUTOMATIC TRIGGER]:
- New feature addition
- Major user experience changes
- Business logic fundamental changes
- Multiple stakeholder impact
- New product/service launch
- Significant workflow modifications

**ENFORCEMENT**: Starting implementation without PRD for these conditions = REQUIREMENTS PHASE FAILURE

### PRD Not Required When:
- Simple bug fixes
- Internal refactoring (no user impact)
- Documentation updates only
- Minor UI tweaks
- Performance optimization (no behavior change)

## Completion Conditions

### For PRD:
□ Business requirements clearly stated
□ User personas identified
□ User stories with acceptance criteria defined
□ Success metrics (KPIs) quantified
□ Scope explicitly defined (what's included/excluded)
□ MoSCoW prioritization completed (Must/Should/Could/Won't)
□ MVP vs Future phases separated
□ Risks and assumptions documented
□ Timeline/milestones outlined
□ User journey diagram created
□ Scope boundary diagram included

## Mandatory Process Before Document Creation [STRICT COMPLIANCE]

**These steps MUST be completed to pass the entry gate:**

### 1. Existing Documentation Investigation [REQUIRED - CANNOT SKIP]

1. **Existing PRDs Search**
   - Search for PRDs in `docs/prd/` directory
   - Review related feature PRDs for context and dependencies
   - Identify potential conflicts or overlaps

2. **Related Design Docs Investigation**
   - Search design docs in `docs/design/` directory
   - Understand existing technical decisions that might constrain requirements
   - Note integration points with existing features

3. **Current System Analysis** (For feature updates)
   - Identify current functionality and pain points
   - Document what users currently do vs what they want to do
   - Gather metrics on current usage if available

4. **Include in PRD**
   - Always include investigation results in "## Context & Background" section
   - Reference related PRDs and their relationships
   - Document assumptions based on existing system

### 2. Requirements Gathering Checklist [MOST IMPORTANT]

1. **User Requirements**
   - [ ] Target users identified (personas)
   - [ ] User problems/needs documented
   - [ ] Desired outcomes specified
   - [ ] Success criteria from user perspective

2. **Business Requirements**
   - [ ] Business goals aligned
   - [ ] ROI or value proposition defined
   - [ ] Compliance/regulatory requirements checked
   - [ ] Budget constraints acknowledged

3. **Technical Constraints** (high-level only)
   - [ ] Platform limitations identified
   - [ ] Integration requirements noted
   - [ ] Performance expectations set
   - [ ] Security requirements listed

### 3. Stakeholder Research [BLOCKING REQUIREMENT]

**Information Gathering:**
- Interview questions for stakeholders
- Competitive analysis (if applicable)
- Market research findings
- User feedback/requests analysis

**Required Research Areas:**
- Similar features in competing products
- Industry best practices
- User behavior patterns
- Regulatory requirements

## PRD Creation Guidelines

### PRD Structure

```markdown
# PRD: [Feature Name]

## Executive Summary
[1-2 paragraphs summarizing the feature and its value]

## Context & Background
- Current situation
- Problem statement
- Opportunity identified
- References to related PRDs

## User Personas
### Primary Users
- [Persona name]: [Description, needs, goals]

### Secondary Users
- [Persona name]: [Description, needs, goals]

## User Stories
### Epic: [High-level feature]
- **As a** [user type]
- **I want to** [action]
- **So that** [benefit]

#### Story 1: [Specific functionality]
- **Acceptance Criteria:**
  - [ ] [Specific testable condition]
  - [ ] [Another condition]

## Requirements

### Functional Requirements
#### Must Have (MVP)
1. [Requirement with clear description]
2. [Another requirement]

#### Should Have
1. [Nice to have feature]

#### Could Have
1. [Future consideration]

#### Won't Have (Out of Scope)
1. [Explicitly excluded item]

### Non-Functional Requirements
- Performance: [Specific metrics]
- Security: [Requirements]
- Usability: [Standards]
- Accessibility: [Compliance needs]

## Success Metrics
| Metric | Current | Target | Measurement Method |
|--------|---------|--------|-------------------|
| [KPI 1] | X | Y | How to measure |
| [KPI 2] | A | B | How to measure |

## User Journey
[Mermaid diagram showing user flow]

## Scope Boundaries
[Mermaid diagram showing what's in/out of scope]

## Risks & Mitigations
| Risk | Impact | Probability | Mitigation |
|------|--------|------------|------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [Strategy] |

## Timeline & Milestones
- Stage 1 (MVP): [Timeline]
  - Milestone 1: [Date] - [Deliverable]
- Stage 2: [Timeline]
  - Milestone 2: [Date] - [Deliverable]

## Dependencies
- [System/Team/Resource]
- [Another dependency]

## Open Questions
1. [Question needing resolution]
2. [Another question]

## Appendix
- [Supporting documents]
- [Research findings]
- [Mockups/wireframes references]
```

### Creation Modes

**Mode 1: New Feature Creation**
- Start with user problem identification
- Define success metrics upfront
- Clear MVP scope

**Mode 2: Feature Update**
- Reference original PRD
- Document what's changing and why
- Maintain version history

**Mode 3: Reverse Engineering** (from existing implementation)
- Document current functionality
- Identify implicit requirements
- Formalize success criteria

## Interaction Patterns

### When User Requests Are Vague:
1. Ask clarifying questions about:
   - Target users
   - Problem being solved
   - Success criteria
   - Scope boundaries

### When Requirements Conflict:
1. Document all viewpoints
2. Highlight conflicts explicitly
3. Propose resolution or escalation path

### Progressive Elaboration:
1. Start with high-level epic
2. Break down into user stories
3. Add acceptance criteria
4. Refine based on feedback

## Quality Checklist

### PRD Completeness:
- [ ] All user personas defined
- [ ] User stories have acceptance criteria
- [ ] Success metrics are quantifiable
- [ ] Scope boundaries are explicit
- [ ] MoSCoW prioritization complete
- [ ] Dependencies identified
- [ ] Risks documented with mitigations
- [ ] Timeline is realistic

### PRD Clarity:
- [ ] No technical implementation details (that's for Design Doc)
- [ ] Language is user-focused, not tech-focused
- [ ] Requirements are testable
- [ ] No ambiguous terms ("fast", "easy", "better")
- [ ] Visual diagrams support understanding

## Deliverables

- PRD document at `docs/prd/[feature-name]-prd.md`
- Status: "Draft" → "Under Review" → "Approved" → "Implemented"
- Version history maintained in document

## Post-PRD Metacognition Gate [MANDATORY]

**AFTER completing PRD:**
☐ Execute "After Completion" metacognition checklist
☐ Verify PRD addresses all user needs
☐ Confirm business value is clearly articulated
☐ Document any unresolved questions
☐ Evaluate if technical feasibility assessment needed

**CANNOT proceed to technical design without:**
- Metacognition assessment complete
- PRD document created
- User/stakeholder approval received (or noted as pending)

## Anti-Patterns to Avoid

1. **Solution-first thinking**: Defining HOW before understanding WHY
2. **Tech-heavy PRDs**: Including implementation details
3. **Vague success criteria**: "Improve user experience"
4. **Unlimited scope**: No clear boundaries
5. **Missing user voice**: Requirements without user stories
6. **Ignoring existing PRDs**: Not checking for conflicts/overlaps
7. **Skipping competitive analysis**: Not learning from others