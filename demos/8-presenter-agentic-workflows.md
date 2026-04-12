# Presenter Guide: Agentic Workflows Demo

**Duration:** 20–25 minutes
**Mode:** Instructor-led with discussion

---

## Pre-Demo Checklist

- [ ] Repository pushed to GitHub
- [ ] Browser open to the repository on GitHub
- [ ] Coding agent enabled (from Demo 5 setup)
- [ ] Copilot can be assigned to issues
- [ ] Participants have access to the repository

---

## Opening (2 min)

**SAY:** "Agentic Workflows are AI-powered GitHub Actions written in markdown instead of YAML. Instead of rigid step-by-step definitions, you describe the goal in natural language and the agent figures out how to accomplish it. They can reason, adapt, and self-heal."

**SHOW:** The comparison:

| Traditional Workflows            | Agentic Workflows                 |
| -------------------------------- | --------------------------------- |
| Rigid step-by-step YAML          | Natural language markdown         |
| Fails on unexpected conditions   | Adapts and self-heals             |
| Requires explicit error handling | Intelligent error recovery        |
| Complex YAML configurations      | Describe the goal, agent executes |

---

## Step 1: Understand the Structure (5 min)

**SAY:** "Agentic workflows live in `.github/workflows/` like any GitHub Action, but the logic is in markdown. The YAML handles when, the markdown handles what."

**SHOW:** The folder structure on screen:

```
.github/
├── workflows/
│   └── auto-triage.yml          # When to run (trigger + permissions)
└── agentic-workflows/
    └── auto-triage.md           # What to do (agent instructions)
```

### Walk Through the Auto-Triage Example

**SHOW** the YAML trigger file:

```yaml
name: Auto-Triage Build Failures
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

permissions:
  issues: write
  contents: read

jobs:
  triage:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: github/agentic-workflows@v1
        with:
          instructions: .github/agentic-workflows/auto-triage.md
          token: ${{ secrets.COPILOT_GITHUB_TOKEN }}
```

**SAY:** "The YAML is minimal — just the trigger, permissions, and a pointer to the markdown instructions."

**SHOW** the markdown instructions:

```markdown
# Auto-Triage Build Failures

## Goal

Analyze the failed workflow run, identify the root cause, and create a GitHub issue with actionable details.

## Steps

1. Fetch the workflow run logs and identify the failing step
2. Analyze the error message and stack trace
3. Check recent commits for likely causes
4. Create a GitHub issue with:
   - A clear title describing the failure
   - The error message and relevant log excerpt
   - The likely root cause commit
   - Suggested fix if obvious
5. Label the issue with `bug` and `auto-triage`
```

**SAY:** "Notice how conversational the instructions are. The agent decides how to accomplish each step — you don't need to specify every API call."

---

## Step 2: Create an Agentic Workflow with the Coding Agent (5 min)

**SAY:** "The best way to create agentic workflows is to use the coding agent to build them. Let's assign it an issue."

1. Go to your repository on GitHub → **Issues** → **New Issue**
2. Enter:

**Title:**

```
Create an agentic workflow for PR documentation review
```

**Body:**

```
Create a GitHub Agentic Workflow that runs on pull requests and:
- Reviews whether the PR description is complete and clear
- Checks if new components have corresponding entries in COMPONENT_USAGE_GUIDE.md
- Checks if new demo files follow the existing demo format in demos/
- Posts a review comment summarizing findings and suggestions
- Uses https://github.com/github/gh-aw/blob/main/create.md as reference

The workflow should trigger on pull_request events targeting main.
```

3. Assign the issue to **Copilot**

**SAY:** "This will take 5–10 minutes. The agent will read the reference docs, create both the YAML and markdown files, and open a PR. Let's continue with the concepts while it works."

---

## Step 3: Explore Key Concepts (5 min)

### Secure Sandbox and Permissions

**SAY:** "Agentic workflows use the exact same permission model as regular GitHub Actions — least privilege."

**SHOW:**

```yaml
permissions:
  issues: write # Can create/edit issues
  contents: read # Can read repo contents
  pull-requests: write # Can comment on PRs
```

**SAY:** "The agent cannot exceed the permissions you grant. No surprise API calls, no unauthorized access."

### Safe Outputs

**SAY:** "Agentic workflows use structured 'safe outputs' — specific actions the agent can take:"

- Create issues (with title, body, labels)
- Post comments (on PRs or issues)
- Assign users (including Copilot itself)
- Add labels

**SAY:** "The agent can't perform arbitrary API calls outside these declared outputs."

### Authoring Best Practices

**SAY:** "When writing agentic workflow instructions:"

1. Be specific about the goal and output format
2. Define constraints — what should the agent NOT do
3. Include examples of expected output
4. Plan for 2–3 iterations to refine

---

## Step 4: Brainstorm Workflows (5 min)

**SAY:** "Let's think about what agentic workflows would help your team."

**SHOW** the idea table:

| Workflow                    | Trigger                         | What It Does                                  |
| --------------------------- | ------------------------------- | --------------------------------------------- |
| **Stale PR Reminder**       | Schedule (weekly)               | Reviews open PRs and posts reminders          |
| **New Contributor Welcome** | `pull_request` (first-time)     | Posts welcome message with guidelines         |
| **Demo Validator**          | `pull_request` (demos/ changes) | Checks demos follow template format           |
| **Dependency Summary**      | `pull_request` (package.json)   | Summarizes dependency changes and flags risks |

**DISCUSSION:**

- "Which of these would provide the most value for your team?"
- "What workflows do you wish you had today?"
- "When would you choose agentic over traditional YAML?"

**Key points to surface:**

- Agentic workflows shine when the task requires reasoning or adaptation
- Traditional workflows are better for deterministic, repeatable steps
- Start with low-risk workflows (notifications, summaries) before critical ones

---

## Step 5: Review the Generated Workflow (3 min)

1. Go back to the repository on GitHub
2. Check if the coding agent has opened a PR
3. If ready, review the PR:
   - Does the YAML trigger look correct?
   - Are the markdown instructions clear?
   - Are permissions appropriately scoped?

4. Optionally leave a review comment for iteration:

```
Also check if any new TypeScript files are missing proper interface definitions for their props.
```

> **If the PR isn't ready yet:** "The agent is still working. You can check back after the session or monitor the session log from the issue."

---

## Wrap-Up and Summary (2 min)

**SAY:** "You've now completed all eight demos. Here's what we covered:"

| Demo | Topic                 | Key Skill                         |
| ---- | --------------------- | --------------------------------- |
| 1    | Features              | Core chat, completions, commands  |
| 2    | Engineering Practices | Debugging, shared conversations   |
| 3    | Customize Copilot     | Models, prompts, agents, MCP      |
| 4    | Copilot Spaces        | Collaborative AI environments     |
| 5    | Coding Agent          | Cloud-based async coding          |
| 6    | Agent Skills          | Encoding patterns for consistency |
| 7    | TDD Agent Mode        | Role-scoped multi-phase agents    |
| 8    | Agentic Workflows     | AI-powered GitHub Actions         |

**SAY:** "The common thread: Copilot is most effective with clear context — custom instructions, well-written issues, structured code, and team conventions. The investment in customization compounds over time."

---

## Troubleshooting

| Issue                                  | Fix                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Coding agent doesn't pick up the issue | Ensure coding agent is enabled in org settings. Check the issue is assigned to Copilot.        |
| Agent creates invalid YAML             | Leave a review comment pointing to the error. The agent will fix it.                           |
| Workflow doesn't trigger               | Check the `on:` trigger matches your event. Verify the workflow file is on the default branch. |
| Agent takes too long                   | Check the session log for errors. Complex tasks may take 10+ minutes.                          |
| Permissions error in workflow          | Ensure the `permissions:` block grants what the instructions require.                          |
