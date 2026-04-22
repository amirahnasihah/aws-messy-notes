# Project guidelines

When working in this repository, follow these standards:

## TypeScript

- Use `unknown` instead of `any` for type safety
- Prefer type-driven design—let types guide the implementation
- Avoid `switch` statements; use pattern matching or object maps instead

## Control flow

- Minimize `for` loops; prefer `map`, `filter`, `reduce`, `forEach`, or recursion where appropriate

## General

- Follow existing code patterns in the codebase
- Keep changes minimal and focused
- Ensure no sensitive information, typos, or debugging code in commits
