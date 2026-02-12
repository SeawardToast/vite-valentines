# Coding Guidelines

## Philosophy

Write code that is **concise, simple, and readable**. Brevity and clarity win over abstraction and verbosity.

## Rules

- **No repeated code** — if you're writing the same logic twice, extract it
- **Create modular utilities only when they'll be heavily reused** — don't modularize for the sake of it
- **Short and easy to read beats everything** — favor inline solutions over unnecessary abstractions
- **No overly verbose code** — skip boilerplate, excessive comments, and over-engineering
- **No unnecessary complexity** — solve the problem directly, don't build a framework

## TypeScript

- Use TypeScript throughout (`*.tsx`, `*.ts`)
- Prefer `type` over `interface` unless extending
- Use inference where the type is obvious — don't annotate what's already clear
- Prefer `const` arrow functions for components

## React

- Functional components only
- Keep components small — if a component is getting long, split it by responsibility
- Co-locate state as close to where it's used as possible
- Use CSS modules or scoped styles — no global style leaks
- Prefer CSS animations over JS-driven animation when possible (better perf, less code)

## File Structure

- Flat over nested — don't create deep folder hierarchies for a small project
- Component files export one default component
- Utility files go in `src/utils/` only if shared across multiple components
