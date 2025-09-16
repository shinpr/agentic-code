# Metacognition Protocol

## Purpose

Self-assessment and reflection for maintaining execution quality.

## When to Apply

Execute metacognition at:
- Task type changes (e.g., design → implementation)
- Meaningful work unit completion
- Unexpected errors or repeated failures
- Before starting new implementation
- When feeling uncertain about approach

## Assessment Questions

### 1. Task Understanding

Ask yourself:
- What is the fundamental goal? (not surface task)
- Am I solving the root cause or symptom?
- Do I have all necessary information?
- Are success criteria clear and measurable?

### 2. Current State

Assess:
- What rules are currently loaded?
- Which rules are actually being used?
- What assumptions am I making?
- What could go wrong?

### 3. Approach Validation

Check:
- Is my approach the simplest solution?
- Am I following established patterns?
- Have I considered alternatives?
- Is this maintainable long-term?

## Rule Selection Guide

### By Task Type

| Task Type | Essential Rules | Optional Rules |
|-----------|----------------|----------------|
| **Implementation** | language/rules.md, ai-development-guide.md | architecture patterns |
| **Bug Fix** | ai-development-guide.md | debugging patterns |
| **Design** | documentation-criteria.md | architecture patterns |
| **Testing** | language/testing.md | coverage strategies |
| **Refactoring** | ai-development-guide.md | design patterns |

### Loading Strategy

**Immediate needs**: Load only what's required now
**Progressive loading**: Add rules as specific needs arise
**Cleanup**: Unload rules after task completion

Note: Context management is user's responsibility. Ask for guidance if unsure.

## Common Decision Points

### When Starting Work
- [ ] Task type and scale clear?
- [ ] Required rules identified?
- [ ] Success criteria defined?
- [ ] Approach validated?

### During Execution
- [ ] Following the plan?
- [ ] Making progress?
- [ ] Need additional rules?
- [ ] Should ask for help?

### After Completion
- [ ] All criteria met?
- [ ] Code quality acceptable?
- [ ] Documentation updated?
- [ ] Lessons learned noted?

## Anti-Pattern Recognition

| Pattern | Signs | Correction |
|---------|-------|------------|
| **Over-engineering** | Complex solution for simple problem | Simplify approach |
| **Under-planning** | Jumping into code too quickly | Step back, plan first |
| **Tunnel vision** | Ignoring alternatives | Consider other approaches |
| **Quality debt** | Skipping tests or docs | Complete properly |
| **Context bloat** | Loading unnecessary rules | Load only essentials |

## Error Recovery

When stuck:
1. Identify what's blocking progress
2. Check if it's a knowledge gap or logic error
3. Review loaded rules for guidance
4. Consider simpler approach
5. Ask user for clarification

After 3 failed attempts:
- Stop attempting
- Document what was tried
- Explain the blocker
- Request user guidance

## Learning from Experience

Track:
- What worked well
- What caused delays
- Which rules were helpful
- What patterns emerged
- What to do differently

## Guidelines

- **Be honest**: Acknowledge when uncertain
- **Be systematic**: Follow structured approach
- **Be efficient**: Don't overthink simple tasks
- **Be thorough**: Don't skip important steps
- **Be adaptive**: Adjust approach based on feedback

## Notes

Remember:
- Metacognition prevents costly mistakes
- Regular reflection improves quality
- It's okay to pause and think
- Ask for help when genuinely stuck
- Perfect is the enemy of good