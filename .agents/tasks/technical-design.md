# Technical Design

## Purpose

Create detailed technical design documentation for implementation guidance.

## When to Use

- Medium/Large features (3+ files)
- Architecture decisions needed
- Complex integrations
- Breaking changes
- When Agentic Coding workflow chosen

## Completion Conditions

□ Architecture approach documented
□ Component structure defined
□ Data flow mapped
□ Integration points identified
□ Technology choices justified
□ Error handling strategy defined
□ Performance considerations addressed
□ Security measures planned
□ Testing strategy outlined

## Execution Guidelines

### 1. Design Document Structure

```markdown
# Technical Design: [Feature Name]

## Overview
Brief description of what's being designed

## Requirements
- Functional requirements
- Non-functional requirements
- Constraints

## Architecture

### Approach
Selected pattern and why

### Components
- Component A: Purpose and responsibility
- Component B: Purpose and responsibility

### Data Flow
How data moves through the system

### Integration Points
- External systems
- APIs
- Databases

## Implementation Details

### Technology Stack
- Languages and frameworks
- Libraries
- Tools

### Data Models
Structure of data entities

### API Design
Endpoints, methods, contracts

### Error Handling
- Expected errors
- Recovery strategies
- User feedback

## Security Considerations
- Authentication
- Authorization
- Data protection

## Performance Considerations
- Bottlenecks
- Optimization strategies
- Caching

## Testing Strategy
- Unit test approach
- Integration test approach
- Test data requirements

## Rollout Plan
- Deployment steps
- Feature flags
- Rollback procedure

## Risks and Mitigations
- Technical risks
- Mitigation strategies
```

### 2. Architecture Patterns

Choose appropriate pattern:
- **Layered**: Separate concerns into layers
- **Event-driven**: Loose coupling via events
- **Microservices**: Independent services
- **Modular monolith**: Modules within single app
- **MVC/MVP/MVVM**: UI separation patterns

### 3. Design Principles

Apply:
- **SOLID**: Single responsibility, Open-closed, etc.
- **DRY**: Don't repeat yourself
- **KISS**: Keep it simple
- **YAGNI**: You aren't gonna need it
- **Separation of Concerns**: Distinct responsibilities

### 4. Component Design

For each component:
- Clear responsibility
- Well-defined interface
- Dependencies explicit
- Testability considered
- Error handling planned

### 5. Data Design

Consider:
- Data models and relationships
- Storage requirements
- Access patterns
- Consistency requirements
- Backup and recovery

### 6. API Design

Define:
- RESTful principles (if applicable)
- Request/response formats
- Authentication methods
- Rate limiting
- Versioning strategy

### 7. Integration Design

Plan:
- External service interactions
- Message formats
- Retry strategies
- Circuit breakers
- Timeout handling

## Common Design Patterns

**Creation Patterns**
- Factory: Object creation
- Builder: Complex object construction
- Singleton: Single instance

**Structural Patterns**
- Adapter: Interface compatibility
- Facade: Simplified interface
- Proxy: Placeholder/surrogate

**Behavioral Patterns**
- Observer: Event notification
- Strategy: Algorithm selection
- Command: Request encapsulation

## Design Validation

Check design for:
- Completeness: All requirements addressed
- Consistency: No contradictions
- Feasibility: Can be implemented
- Testability: Can be verified
- Maintainability: Easy to change
- Scalability: Can grow

## Deliverables

Design document containing:
- Architecture diagrams (if helpful)
- Component specifications
- Interface definitions
- Data models
- Integration contracts

## Anti-Patterns to Avoid

1. **Over-engineering**: Too complex for requirements
2. **Under-specification**: Missing critical details
3. **Tight coupling**: Components too interdependent
4. **God objects**: Too much responsibility
5. **Premature optimization**: Optimizing before needed
6. **Technology bias**: Choosing tech before understanding problem

## Notes

- Design should guide, not constrain
- Document decisions and rationale
- Consider future extensions
- Balance ideal vs practical
- Update design if requirements change