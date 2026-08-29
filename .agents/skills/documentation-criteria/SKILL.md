---
name: documentation-criteria
description: "Determines which PRD, ADR, Design Doc, and Work Plan a change requires. Use when deciding documentation scope or creating technical documents."
---

# Documentation Creation Criteria

## Creation Decision Matrix

| Structural Scale | Required Documents | Creation Order |
|------------------|--------------------|----------------|
| Small | None | Direct task execution |
| Medium | Design Doc → Work Plan | Start with Design Doc |
| Large | PRD → Design Doc → Work Plan | Continue after PRD approval |

Insert an ADR immediately before the Design Doc only when a current-scope decision passes both ADR filters below. A qualifying ADR decision sets the scale floor to Medium.

## Structural Scale

Classify the decision burden, not repository layout. File count is supporting evidence only.

| Scale | Structural condition |
|-------|----------------------|
| Small | One coherent outcome follows existing patterns within one responsibility boundary |
| Medium | One coherent outcome coordinates across a boundary or requires a durable design decision |
| Large | Multiple independently valuable outcomes require separate design decisions |

Multiple files or layers that serve one coherent outcome remain Medium. Large applies only when separate outcomes require separate design decisions.

## ADR Creation Conditions

Check accepted ADRs that govern the changed responsibility, then apply both filters to each technical topic in the confirmed scope:

1. **Choice requires judgment**: Current requirements, accepted decisions, and representative repository patterns support at least two credible, materially distinct options.
2. **Decision is durable**: The choice materially changes a responsibility, dependency direction, shared contract, persistence model, technology dependency, reversibility, or lifecycle cost that future work must preserve.

Create one ADR for each topic that passes both filters. Keep a topic in the Design Doc when one repository-supported implementation is evident or the choice remains cheaply reversible.

Qualifying durable choices can include:

- introducing or replacing a technology, platform, storage model, or external dependency;
- changing ownership, dependency direction, a trust boundary, or a shared public contract when credible alternatives exist;
- reversing or superseding an accepted architecture decision;
- selecting an irreversible or high-cost compatibility or data migration strategy.

Counts of files, consumers, nesting levels, states, or processing steps do not independently require an ADR.

## What Each Document Fixes

Create an artifact only when its downstream consumer would otherwise need to infer the named decision.

| Document | Decision it fixes | Consumer effect when missing |
|----------|-------------------|------------------------------|
| PRD | Product outcome, current requirements, acceptance criteria, and exclusions | Design would have to infer product scope |
| ADR | One qualifying durable technical choice and the alternatives it resolves | Design and future changes could not distinguish an accepted decision from a local choice |
| Design Doc | Repository-grounded implementation approach, contracts, change surface, and verification strategy | Planning and implementation would make design decisions locally |
| Work Plan | Implementation order, real dependencies, and executable verification | Execution would choose sequencing and proof boundaries locally |

## Document Boundaries

### PRD

Include product outcome, current requirements, success criteria, user-visible scope, exclusions, and unresolved product decisions. Keep technical implementation choices in the Design Doc or ADR.

### ADR

Include the durable choice, materially distinct options, trade-offs, decision, consequences, and reversal conditions. Evaluate the number of options established by evidence; do not manufacture alternatives to satisfy a fixed count.

### Design Doc

Include only information that constrains implementation or verification:

- confirmed outcome and non-goals;
- relevant existing code and accepted decisions;
- selected implementation approach and contracts;
- affected responsibility boundaries and integration points;
- acceptance criteria and the narrowest sufficient verification strategy;
- material risks, unknowns, and decisions deferred to implementation.

Add a change-impact map, field-propagation map, API matrix, or diagram when the relationship would otherwise be difficult for the next consumer to reconstruct.

### Work Plan

Include the fewest implementation units needed to preserve real dependencies and observable proof. Each task names its source, intended result, scope, dependencies, and verification.

## Creation Process

1. Confirm the outcome, current requirements, and non-goals.
2. Determine Structural Scale from repository evidence.
3. Apply the ADR choice and durability filters.
4. Create only the documents selected by the decision matrix.
5. Obtain approval for product requirements and major durable design decisions before they authorize implementation.

## Storage Locations

| Document | Path | Naming Convention |
|----------|------|-------------------|
| PRD | `docs/prd/` | `[feature-name]-prd.md` |
| ADR | `docs/adr/` | `ADR-[4-digits]-[title].md` |
| Design Doc | `docs/design/` | `[feature-name]-design.md` |
| Work Plan | `docs/plans/` | `YYYYMMDD-{type}-{description}.md` |

Work Plans are transient execution state and remain excluded by `.gitignore` unless the repository explicitly chooses to version them.

## ADR Status

`Proposed` → `Accepted` → `Deprecated` / `Superseded` / `Rejected`

When a new ADR supersedes an accepted ADR, retain the old ADR, mark it `Superseded` with a reference to the new ADR, and add a reference to the old ADR in the new ADR.

## Quality Check

- Every document serves a named downstream consumer.
- Every retained section changes a decision, protects a boundary, or supplies necessary proof.
- Repository observations, inferences, and unknowns are distinguishable.
- Reuse and no-document outcomes remain valid when evidence supports them.
