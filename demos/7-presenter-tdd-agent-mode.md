# Presenter Guide: TDD Agent Mode Demo

**Duration:** 25–30 minutes
**Mode:** Instructor-led with hands-on cycle

---

## Pre-Demo Checklist

- [ ] VS Code open with repository loaded
- [ ] `.github/agents/Plan.agent.md` exists (from Demo 3)
- [ ] Copilot Chat panel open
- [ ] Terminal accessible for running tests
- [ ] `src/lib/photo-utils.ts` open and accessible
- [ ] No existing `src/lib/__tests__/` directory (clean slate for TDD)

---

## Opening (2 min)

**SAY:** "We're going to create three custom agents — Red, Green, and Blue — that each own one phase of Test-Driven Development. Each agent refuses to do work outside its scope: Red won't implement, Green won't refactor, Blue won't add features. This enforces the discipline that even experienced developers sometimes skip."

**SHOW:** The TDD phases:

| Phase | Goal                 | Constraint                         |
| ----- | -------------------- | ---------------------------------- |
| Red   | Write a failing test | No implementation code             |
| Green | Make the test pass   | Minimal code only — no refactoring |
| Blue  | Refactor             | Keep all tests passing             |

---

## Step 1: Create the TDD Agents (8 min)

**SAY:** "We already have `Plan.agent.md`. Now we'll create three more alongside it in `.github/agents/`."

### 1.1 — Create `tdd-red.agent.md`

Create `.github/agents/tdd-red.agent.md`:

```markdown
---
name: TDD Red
description: Write failing tests only — never write implementation code
tools: ["search/codebase", "editFiles", "terminalLastCommand", "runInTerminal"]
---

# TDD Red Agent — Write Failing Tests

You are the RED phase of a TDD workflow. Your ONLY job is to write failing tests.

## Rules

- Write test files using the project's testing conventions
- Run the test to confirm it FAILS
- NEVER write or modify implementation/production code
- NEVER refactor existing code
- If asked to implement or refactor, refuse and explain that this is the Red phase

## Context

- This is a Next.js 15 app with TypeScript and Tailwind CSS
- Components are in `src/components/`
- Utility functions are in `src/lib/`
- Use the existing test patterns if any exist, otherwise use Jest/React Testing Library conventions

## Output

1. Create or update a test file
2. Run the test to show it fails
3. Summarize what the test expects so the Green agent knows what to implement
```

### 1.2 — Create `tdd-green.agent.md`

Create `.github/agents/tdd-green.agent.md`:

```markdown
---
name: TDD Green
description: Write minimal implementation to make failing tests pass
tools: ["search/codebase", "editFiles", "terminalLastCommand", "runInTerminal"]
---

# TDD Green Agent — Make Tests Pass

You are the GREEN phase of a TDD workflow. Your ONLY job is to write the minimum implementation code to make failing tests pass.

## Rules

- Read the existing failing tests first
- Write ONLY enough code to make the tests pass
- Do NOT add extra features, error handling, or optimizations beyond what tests require
- Do NOT refactor or rename anything
- Do NOT modify test files
- If asked to refactor or add features, refuse and explain that this is the Green phase

## Context

- This is a Next.js 15 app with TypeScript and Tailwind CSS
- Components are in `src/components/`
- Utility functions are in `src/lib/`
- Follow existing code patterns and conventions from `.github/copilot-instructions.md`

## Output

1. Implement the minimum code to pass failing tests
2. Run the tests to confirm they pass
3. Note any code smells for the Blue agent to address
```

### 1.3 — Create `tdd-blue.agent.md`

Create `.github/agents/tdd-blue.agent.md`:

```markdown
---
name: TDD Blue
description: Refactor implementation while keeping all tests green
tools: ["search/codebase", "editFiles", "terminalLastCommand", "runInTerminal"]
---

# TDD Blue Agent — Refactor

You are the BLUE phase of a TDD workflow. Your ONLY job is to improve code quality while keeping all tests passing.

## Rules

- Run all tests FIRST to confirm they pass before making changes
- Refactor for readability, naming, DRY, and TypeScript best practices
- Run tests AFTER every change to ensure nothing breaks
- Do NOT add new features or new test cases
- Do NOT change test expectations
- If asked to add features or write new tests, refuse and explain that this is the Blue phase

## Refactoring Checklist

- Clear, descriptive names for functions and variables
- Proper TypeScript types (no `any`)
- Extract repeated logic into helpers
- Consistent Tailwind patterns (dark mode, responsive)
- Add JSDoc comments where helpful

## Output

1. Show the refactoring changes made
2. Run tests to confirm they still pass
3. Summarize improvements for the developer
```

**SAY:** "Notice each agent has strict boundaries — they even refuse to do out-of-scope work. This is what makes the pattern work."

---

## Step 2: Plan a Feature (3 min)

1. Switch Copilot Chat to the **Plan** agent (mode dropdown)
2. Type:

```
I want to add a photo search utility function in src/lib/photo-utils.ts that can search photos by title, tags, and date range. Plan this feature.
```

3. Review the plan — it should outline function signatures, parameters, and test scenarios

**SAY:** "The Plan agent gives us a roadmap. We'll use this as input for the TDD cycle. Keep the plan visible."

---

## Step 3: Red Phase — Write Failing Tests (5 min)

1. Switch to the **TDD Red** agent (mode dropdown)
2. Type:

```
Write a failing test for a searchPhotos function that filters the mock photo data by title substring, tags, and date range.
```

3. Watch the agent:
   - Create a test file (e.g., `src/lib/__tests__/photo-utils.test.ts`)
   - Write test cases for title search, tag filtering, and date range
   - Run the tests to **confirm they fail**

**SHOW:** The failing test output (e.g., `searchPhotos is not a function`).

**SAY:** "The Red agent wrote tests but refused to implement. That's the constraint working."

> **If asked:** Try prompting the Red agent to implement the function — it should refuse.

---

## Step 4: Green Phase — Make Tests Pass (5 min)

1. Switch to the **TDD Green** agent
2. Type:

```
Make the failing tests pass.
```

3. Watch the agent:
   - Read the existing test expectations
   - Write the **minimum** `searchPhotos` function in `photo-utils.ts`
   - Run tests to confirm they pass

**SHOW:** All tests passing (green output).

**SAY:** "Green agent wrote just enough code to pass. Notice it didn't add error handling or optimizations — that's Blue's job."

---

## Step 5: Blue Phase — Refactor (5 min)

1. Switch to the **TDD Blue** agent
2. Type:

```
Refactor the searchPhotos implementation while keeping tests green.
```

3. Watch the agent:
   - Run tests first to verify baseline
   - Improve naming, typing, and structure
   - Run tests after each change

**SHOW:** Tests still passing after refactoring. Point out the improvements made.

---

## Step 6: Optional — Repeat the Cycle

If time permits, go back to **TDD Red**:

```
Write a failing test for searchPhotos to support sorting results by date (newest first) and by title (alphabetical).
```

Cycle through Red → Green → Blue again.

**SAY:** "Notice the rhythm — each cycle builds on the last. The agents hand off context through the code itself, not through hidden state."

---

## Step 7: Review and Discussion (3 min)

1. Open `.github/agents/` and show the three agent files side by side

**Key points:**

- **Role-Scoped Agents** — strict boundaries prevent scope creep
- **Developer-Driven Orchestration** — you decide when to switch agents
- **Context Through Code** — agents share state via tests and implementation
- **Reusable Pattern** — applies to any phased workflow (design → implement → review)

**DISCUSSION:**

- "Where would role-scoped agents help most on your team?"
- "What other multi-phase workflows could use this pattern?"
- "How does manual orchestration compare to fully autonomous agents?"

---

## Wrap-Up (1 min)

**SAY:** "TDD agents show the power of constraints. By giving each phase its own agent with strict rules, you get discipline that's hard to maintain manually. This multi-agent pattern generalizes to any workflow with distinct phases."

**Transition:** "For our final demo, we'll look at Agentic Workflows — AI-powered GitHub Actions written in markdown."

---

## Troubleshooting

| Issue                           | Fix                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------- |
| Agent not in mode dropdown      | Check `.github/agents/` files exist and have valid YAML frontmatter. Reload VS Code.            |
| Tests not running               | Ensure a test runner is configured (Jest/Vitest). The agent may need to install it.             |
| Agent does out-of-scope work    | Re-read the system prompt to the agent. The constraint is advisory, not enforced by the system. |
| Red agent writes implementation | Remind it of its role in the prompt: "Remember, you are the RED phase — tests only."            |
| No test file created            | Check the agent has `editFiles` and `runInTerminal` in its tools list.                          |
