# Technical Document Review

## Purpose

Evaluate whether a PRD, ADR, or Design Doc fixes the decisions its next consumer needs without adding unsupported scope or ceremonial content.

## Required Skills

- `.agents/skills/documentation-criteria/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`
- `.agents/skills/testing-strategy/SKILL.md` when verification strategy is in scope

## Required Inputs

- document path and type;
- confirmed user requirements and non-goals;
- related accepted documents and repository evidence when applicable.

## Review Process

### 1. Confirm the Consumer

Identify the decision the document owns and the next consumer that relies on it. Use `documentation-criteria` as the boundary rather than requiring every optional template section.

### 2. Check Scope Fidelity

- Outcomes and current requirements match the confirmed request.
- Current state and speculation are not treated as buildable scope.
- Non-goals remain explicit.
- No technical preference silently changes the product outcome.

### 3. Check Decision Sufficiency

- PRD: Design can proceed without inferring product scope.
- ADR: One durable choice, credible alternatives, and consequences are clear.
- Design Doc: Planning and implementation can proceed without making major design decisions locally.

Require a section, diagram, matrix, failure scenario, option, or external source only when its absence leaves the consumer unable to decide, act, or verify.

### 4. Verify Claims

Check project-specific claims against repository evidence and date-sensitive external claims against current primary sources. Mark claims as observed, inferred, or unknown.

### 5. Produce Findings

Each finding includes location, evidence, consumer effect, severity, and disposition candidate. Optional completeness improvements remain non-blocking candidates.

## Result

- `approved`: The document supplies the decisions and evidence its consumer needs.
- `needs_revision`: An evidence-backed gap would cause incorrect scope, design, implementation, or verification.
- `blocked`: The document type, governing scope, or required evidence cannot be established.

## Output

```text
[DOCUMENT REVIEW]
Type: PRD | ADR | Design Doc
Path: [path]
Consumer: [next consumer]
Verdict: approved | needs_revision | blocked

Findings:
- Severity: high | medium | low
  Location: [section]
  Evidence: [fact]
  Consumer effect: [decision, action, or verification impact]
  Disposition candidate: apply | decline | user decision

Limitations:
- [unknown or none]
```
