# Presenter Guide: Coding Agent Demo

**Duration:** 20–25 minutes
**Mode:** Instructor-led with async monitoring

---

## Pre-Demo Checklist

- [ ] Repository pushed to GitHub (not just local)
- [ ] Dark mode/light mode issue exists (created in Demo 3, Step 5 Part Three)
- [ ] Coding agent enabled in org/account Copilot settings
- [ ] `.github/copilot-instructions.md` committed to the repository
- [ ] Browser open to the repository's Issues tab
- [ ] Participants have access to the repo on GitHub

> **IMPORTANT:** If the dark mode issue was not created in Demo 3, create it now:
> Go to Issues → New Issue → Title: "Feature request: toggle between dark mode and light mode" → Add a description explaining the desired behavior.

---

## Opening (2 min)

**SAY:** "The Copilot coding agent is a cloud-based agent you can assign to GitHub issues — just like assigning a teammate. It reads the issue, analyzes the code, creates a branch, implements changes, and opens a pull request. Unlike agent mode in VS Code, this runs asynchronously in the cloud."

**SHOW:** The comparison table:

|                 | Agent Mode (IDE)                   | Coding Agent (Cloud)               |
| --------------- | ---------------------------------- | ---------------------------------- |
| **Where**       | Locally in VS Code                 | Cloud on GitHub                    |
| **Start**       | Chat prompt in IDE                 | Assign to GitHub issue             |
| **Interaction** | Real-time, conversational          | Async, via PR reviews              |
| **Best for**    | Exploratory work, quick iterations | Well-defined tasks, team workflows |

---

## Step 1: Assign Copilot to an Issue (3 min)

1. Open the repository on GitHub → **Issues** tab
2. Find the dark mode/light mode toggle issue from Demo 3
3. In the right sidebar, click **Assignees**
4. Select **Copilot** from the list

**SAY:** "Once assigned, Copilot begins working. You'll see a banner on the issue indicating it's in progress."

**SHOW:** The "Copilot is working" banner.

> **If Copilot isn't in the assignee list:** Check org settings → Copilot → Policies → ensure "Coding agent" is enabled.

---

## Step 2: Monitor the Session (5 min)

**SAY:** "While Copilot works — typically 2 to 5 minutes — you can watch it in real time."

1. Click the **"View session"** link on the issue
2. Walk through what the agent does:
   - Reads the repo structure and key files
   - References `.github/copilot-instructions.md` for project conventions
   - Plans its approach
   - Creates and modifies files
   - Runs build/lint checks

**POINT OUT:**

- Which files does it choose to modify?
- Does it follow the Tailwind `dark:` patterns from custom instructions?
- Does it run `npm run build` or `npm run lint` to validate?

**WHILE WAITING — Discussion prompt:**

**SAY:** "While we wait, think about this: if you were writing this issue for a human developer, would you word it differently? What makes a good issue for the coding agent?"

**Key points to surface:**

- Specific acceptance criteria help the agent
- Referencing existing patterns or files gives better results
- The agent reads custom instructions, so conventions set there are followed

---

## Step 3: Review the Pull Request (5 min)

**SAY:** "Once the agent finishes, it opens a PR. Let's review it like we would any teammate's code."

1. Go to **Pull Requests** tab → open the Copilot-created PR
2. Read the **PR description** — note how it explains what it did and why
3. Click **"View Session"** at the top to see the full session log
4. Go to **Files Changed** and review the code

**SHOW:** Walk through the review checklist:

| Criteria               | What to look for                                               |
| ---------------------- | -------------------------------------------------------------- |
| **Correctness**        | Does the dark mode toggle actually work? Is state persisted?   |
| **Conventions**        | Does it use Tailwind `dark:` prefix patterns?                  |
| **Component patterns** | Does it follow `src/components/` structure?                    |
| **Code quality**       | Any `any` types, missing error handling, accessibility issues? |
| **Scope**              | Did it only change what's needed, or over-engineer?            |

---

## Step 4: Iterate with Review Comments (5 min)

**SAY:** "This is where the coding agent really shines — you can leave review comments and it will respond with new commits."

1. In **Files Changed**, find a line to improve
2. Click the **+** icon next to the line number
3. Add a specific, actionable comment, e.g.:

```
Can you add a smooth transition animation when toggling between dark and light mode?
Use a CSS transition on the background-color and text color properties.
```

4. Click **"Start a review"** → **"Submit review"** → select **"Request changes"**
5. Watch the agent pick up the feedback and push new commits

**SAY:** "The more specific your comment, the better the result. 'Make this better' won't work. Tell it exactly what you want."

**Additional review prompts to try:**

- `Add an aria-label to the toggle button for screen reader accessibility`
- `Store the user's preference in localStorage so it persists across page refreshes`
- `Add a keyboard shortcut (Ctrl+Shift+D) to toggle dark mode`

---

## Step 5: Discussion — Coding Agent vs Agent Mode (3 min)

**SAY:** "You've now used both agent mode (Demo 3) and the coding agent. Let's compare."

**DISCUSSION PROMPTS:**

- "Which approach would you use for a bug fix? A new feature? A refactor?"
- "How would you write issues differently knowing the coding agent might work on them?"
- "What guardrails would your team want before letting the agent auto-merge?"

**Key takeaways to surface:**

- Coding agent is best for well-scoped, clearly described tasks
- Agent mode is best for exploratory and iterative work
- Both benefit from good custom instructions
- Review feedback is how you teach the agent on your PR

---

## Wrap-Up (1 min)

**SAY:** "The coding agent is a force multiplier — it turns well-written issues into working PRs. Combined with custom instructions and iterative review, it can handle substantial implementation work while you focus on architecture and design decisions."

**Transition:** "Next, we'll look at Agent Skills — reusable skill packs that teach Copilot your team's patterns."

---

## Troubleshooting

| Issue                         | Fix                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Copilot not in assignee list  | Enable "Coding agent" in org Copilot settings → Policies.                            |
| Agent fails immediately       | Check that `.github/copilot-instructions.md` is committed. Ensure repo is not empty. |
| No PR created after 10 min    | Check the session log for errors. The agent may have hit a build failure.            |
| Agent ignores review comments | Submit as "Request changes", not just a comment. Ensure the review is submitted.     |
| Session log not visible       | Refresh the issue page. The "View session" link appears after the agent starts.      |
