# Task Analysis

## Required Rules [MANDATORY - MUST BE ACTIVE]

**RULE AVAILABILITY VERIFICATION:**
1. [VERIFY ACTIVE] `.agents/rules/core/metacognition.md` (loaded at session start)
2. [LOAD IF NOT ACTIVE] `.agents/context-maps/task-rule-matrix.yaml`

**LOADING PROTOCOL:**
- STEP 1: VERIFY metacognition.md is active from initial session setup
- STEP 2: CHECK if task-rule-matrix.yaml is active in working memory
- STEP 3: If task-rule-matrix.yaml NOT active → Execute BLOCKING READ
- STEP 4: CONFIRM all rules active before proceeding with task analysis

**EVIDENCE REQUIRED:**
```
Rule Status Verification:
✓ metacognition.md - ACTIVE (from session setup)
✓ task-rule-matrix.yaml - ACTIVE (loaded/verified)
```

## Purpose

Determine task type, scale, and required resources.

## When to Use

- At the start of any user request
- When task scope is unclear
- When switching to a different type of work

## Completion Conditions

□ Task type identified (implementation/research/design/documentation/debugging/other)
□ Task scale determined:
  - Small: 1-2 files affected
  - Medium: 3-5 files affected
  - Large: 6+ files affected
□ Required resources identified:
  - Rules needed
  - External dependencies
  - Existing code to reference
□ Success criteria defined (measurable)
□ Constraints and assumptions documented

## Mandatory Execution Order [STRICT COMPLIANCE REQUIRED]

### Step 0: Initial Setup [BLOCKING - CANNOT SKIP]
If SESSION_BASELINE_DATE not established:
1. [IMMEDIATE] Execute `date` command
2. [STORE] Result as SESSION_BASELINE_DATE for ENTIRE session
3. [ENFORCE] ALL "current/latest/recent" references MUST use SESSION_BASELINE_DATE year

VIOLATION EXAMPLE: Using "2024" in web research when SESSION_BASELINE_DATE shows "2025" = CRITICAL ERROR

### Step 1: Understand Request Essence

- What is the user trying to achieve?
- Is this a symptom or the actual goal?
- What similar tasks have been done before?

### Step 2: Classify Task Type [REQUIRED]

**Implementation**: Creating or modifying code
- New features
- Bug fixes
- Refactoring
- Performance optimization

**Research**: Information gathering
- Code exploration
- Architecture analysis
- Feasibility studies

**Design**: Planning and documentation
- Technical specifications
- Architecture decisions
- API design

**Documentation**: Writing docs
- README updates
- API documentation
- User guides

**Debugging**: Problem solving
- Error investigation
- Performance analysis
- Behavior diagnosis

### Step 3: Estimate Scale [REQUIRED]

Count affected components:
- Number of files to create/modify
- Number of systems/modules involved
- Integration complexity
- Testing requirements

### Step 4: Execute Rule Selection [BLOCKING CHECKPOINT]

**EXECUTION GATES - System HALTS if any step skipped:**
1. [BLOCKING READ] `task-rule-matrix.yaml` from `.agents/context-maps/`
2. [MANDATORY MATCHING] Task type + scale against matrix
3. [CLASSIFICATION OUTPUT]:
   - Required rules: IMMEDIATE BLOCKING READ
   - Recommended rules: EVALUATE context, then BLOCKING READ if applicable
   - Conditional rules: CHECK conditions, then BLOCKING READ if met
4. [VERIFICATION GATE] CANNOT PROCEED until ALL required rules loaded
5. [PROOF OF COMPLIANCE] Output must list:
   ```
   Rules Successfully Loaded:
   ✓ [filepath] - [reason for loading]
   ✓ [filepath] - [applied to which aspect]
   ```
6. [PLAN INJECTION] IMMEDIATELY inject all identified BLOCKING READs to work plan:
   ```
   [PLAN INJECTION FROM task-analysis - Rule Selection]
   Injected BLOCKING READs from rule selection:
   ✓ [filepath] - required rule
   ✓ [filepath] - conditional rule (condition met)
   ```

### Step 5: Identify Additional Resources

Determine what's needed:
- Which rule files apply
- External libraries/tools
- Reference implementations
- Documentation sources

### Step 6: Define Success Criteria

- Specific functionality works
- Tests pass
- Performance metrics met
- Documentation complete

### Step 7: Workflow Recommendation

Based on scale and complexity:
- **Small Scale (1-2 files)**: Direct task execution, no workflow needed
- **Medium/Large Scale (3+ files)**: RECOMMEND agentic-coding.md workflow
  - Ask: "This task would benefit from a structured workflow with design document and work plan. Proceed? [Y/n]"
  - If YES: Load and follow agentic-coding.md
  - If NO: Execute individual task definitions directly

### Step 8: Mandatory Plan Injection [BLOCKING - AUTOMATIC EXECUTION]

**FOR ALL TASKS WITH BLOCKING READ REQUIREMENTS:**

1. **[SCAN FOR BLOCKING READS]** Identify ALL files requiring BLOCKING READ:
   - From selected workflow (if Medium/Large scale)
   - From task definitions to be executed
   - From rules that will be loaded

2. **[AUTOMATIC INJECTION]** Add ALL identified BLOCKING READs to work plan:
   ```
   Plan Injection Required:
   □ BLOCKING READ: [file path] - [reason/phase]
   □ BLOCKING READ: [file path] - [reason/phase]
   □ Rule Status Verification after each BLOCKING READ
   ```

3. **[EVIDENCE REQUIRED]** Show plan injection confirmation:
   ```
   [PLAN INJECTION COMPLETED]
   Identified BLOCKING READs from:
   ✓ Workflow phases: [list files]
   ✓ Task definitions: [list files]
   ✓ Required rules: [list files]

   Injected to plan:
   ✓ Total BLOCKING READs: [count]
   ✓ Verification gates: [count]
   ```

4. **[ENFORCEMENT]** CANNOT proceed without:
   - ALL BLOCKING READs identified and injected
   - Plan injection evidence shown above
   - Each BLOCKING READ as explicit task in work plan

**VIOLATION HANDLING:**
- Missing any BLOCKING READ from plan = IMMEDIATE HALT
- Skipping any BLOCKING READ during execution = CRITICAL ERROR
- Proceeding without verification = RETURN TO TASK ANALYSIS

## Deliverables

- Task classification output
- Path recommendation

## Common Patterns

### Feature Request
1. Identify core functionality
2. Estimate component changes
3. Consider edge cases
4. Plan testing approach

### Bug Fix
1. Understand expected vs actual behavior
2. Identify affected components
3. Determine root cause approach
4. Plan verification method

### Refactoring
1. Identify improvement goals
2. Assess current structure
3. Estimate change scope
4. Plan incremental approach

## Decision Tree

**Code-related?**
- YES → Creating new code?
  - YES: Implementation task
  - NO → Fixing issues?
    - YES: Debugging task
    - NO: Refactoring task
- NO → Information gathering?
  - YES: Research task
  - NO → Planning?
    - YES: Design task
    - NO: Documentation task

## Rule Selection Output Format [SYSTEM VERIFICATION REQUIRED]

### BLOCKING OUTPUT - Cannot proceed without this exact format:
```
[RULE SELECTION CHECKPOINT]
Task Type: [type]
Task Scale: [scale]
SESSION_BASELINE_DATE: [stored date from initial setup]

Path Recommendation:
- [Direct execution of task definitions] OR
- [Workflow recommended: agentic-coding.md]

Required Rules [BLOCKING READS - MUST BE LOADED]:
✓ [path/to/rule1.md] - LOADED - [applying to: specific aspect]
✓ [path/to/rule2.md] - LOADED - [applying to: specific aspect]

Conditional Rules [LOAD IF CONDITION MET]:
✓ [path/to/rule3.md] - LOADED - [trigger: "test" keyword found in task]
✗ [path/to/rule4.md] - NOT LOADED - [trigger not met: no performance requirements]

VERIFICATION: All required rules active in working memory
```

### Rule Loading Strategy [WITH CLEAR TRIGGERS]

**By Task Type [IMMEDIATE LOAD]:**
- Implementation → ALWAYS: language/rules + ai-development-guide
- Debugging → ALWAYS: ai-development-guide + language/testing
- Design → ALWAYS: documentation-criteria
- Documentation → ALWAYS: documentation-criteria
- Refactoring → ALWAYS: language/rules + ai-development-guide
- Research → ALREADY LOADED: metacognition (from initial setup)

**Conditional Loading [LOAD WHEN]:**
- language/testing → WHEN: "test", "TDD", "coverage" in requirements OR implementation task
- implementation-approach → WHEN: Medium/Large scale (3+ files) OR architecture decision needed
- contextual/technical-spec → WHEN: external API/service integration

**By Scale [AUTOMATIC TRIGGERS]:**
- Small (1-2 files) → Load only task type essentials
- Medium (3-5 files) → AUTO-ADD: documentation-criteria
- Large (6+ files) → AUTO-ADD: implementation-approach + work-planning

### Context Optimization [EXPLICIT LOADING CONDITIONS]

**Initial Load [ALWAYS]:**
- Essential rules for identified task type
- Scale-based automatic additions
- NOTE: metacognition.md already active from initial setup

**Trigger-Based Loading [LOAD IMMEDIATELY WHEN]:**
- Error occurs 2+ times → Load debugging patterns
- "Performance" mentioned → Load optimization rules
- "Security" mentioned → Load security guidelines
- External service mentioned → Load integration patterns
- 3+ state variables → Load state management patterns

**Unloading [AFTER TASK COMPLETE]:**
- Task-specific architecture patterns
- One-time reference documents
- Completed phase rules

**Keep Active (session-wide essentials):**
- metacognition.md - continuous self-assessment
- Current task type's essential rules - context consistency
- ai-development-guide.md - anti-pattern prevention (during implementation/debugging)