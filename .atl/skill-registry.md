# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When creating a GitHub issue | issue-creation | ~/.config/opencode/skills/issue-creation/SKILL.md |
| When opening a PR | branch-pr | ~/.config/opencode/skills/branch-pr/SKILL.md |
| When creating new AI skills | skill-creator | ~/.config/opencode/skills/skill-creator/SKILL.md |
| Go tests, Bubbletea TUI testing | go-testing | ~/.config/opencode/skills/go-testing/SKILL.md |
| When user says "judgment day", "dual review" | judgment-day | ~/.config/opencode/skills/judgment-day/SKILL.md |
| When improving frontend UI | impeccable | .opencode/skills/impeccable/SKILL.md |

## Compact Rules

### impeccable
- Load PRODUCT.md + DESIGN.md via `.opencode/skills/impeccable/scripts/load-context.mjs` BEFORE any code work
- Confirm product context, shape brief, and image gates before mutation
- Static site: no backend needed
- Use Astro component patterns (.astro files)
- Custom CSS variables (not Tailwind) - use SPEC.md color palette

### issue-creation
- Issue-first workflow - create issue before any code work
- Use conventional commit format

### branch-pr
- Branch-per-issue workflow
- Conventional commits only
- No Co-Authored-By attribution

### judgment-day
- Launch two independent blind judges
- Synthesize findings, apply fixes, re-judge if needed

### skill-creator
- Follow Agent Skills spec format
- Include frontmatter with name, description, version

### go-testing
- Not applicable - JavaScript project

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| SPEC.md | ./SPEC.md | Legacy plain HTML spec - reference only |
| astro.config.mjs | ./astro.config.mjs | Astro config |
| package.json | ./package.json | Astro 4.16.0 dependency |