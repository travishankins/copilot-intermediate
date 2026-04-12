# Presenter Guide: Features Demo

**Duration:** 15–20 minutes
**Mode:** Instructor-led live demo

---

## Pre-Demo Checklist

- [ ] Repository cloned and open in VS Code
- [ ] Branch created: `git checkout -b demo-copilot-exercises`
- [ ] Dependencies installed: `npm install`
- [ ] Dev server running: `npm run dev`
- [ ] Browser open to [http://localhost:3000](http://localhost:3000)
- [ ] GitHub Copilot extension active (check status bar icon)
- [ ] Copilot Chat panel open and visible

---

## Opening (1 min)

**SAY:** "We're going to explore what GitHub Copilot can do for you day-to-day. We'll start with the basics — discovering features, understanding a codebase, generating code, and committing changes — all with AI assistance."

---

## Step 1: Discover Available Features (2 min)

**Mode:** Ask

1. Open the Copilot Chat panel
2. Type and send:

```
/help
```

3. Walk through the list of available commands and features

**SAY:** "The `/help` command is your starting point. It shows everything Copilot can do — slash commands, modes, and features. Think of it as your quick reference."

**SHOW:** Scroll through the output and highlight a few key commands.

---

## Step 2: Learn About the Project (5 min)

### 2.1 — Get Project Overview

**Mode:** Ask

1. Type and send:

```
Give me a summary of the project and give an overview of the most impactful files.
```

**SAY:** "In Ask mode, Copilot automatically searches your workspace for context — you don't need `@workspace` anymore. It reads the code and gives you a bird's-eye view."

**SHOW:** Point out the "Most Impactful Files" section in the response.

### 2.2 — Explain Selected Code

1. Click the first file listed under "Most Impactful Files" to open it
2. Highlight the first major section of code (e.g., a function or component block)
3. Type and send:

```
/explain
```

**SAY:** "When you highlight code and use `/explain`, Copilot gives you a detailed breakdown. This is great for onboarding or understanding unfamiliar code."

### 2.3 — Get Improvement Suggestions

1. Type and send:

```
Tell me about the improvements that can be made in this repo.
```

**SAY:** "Copilot isn't just for writing code — it also helps with planning and identifying areas to improve. This is useful for tech debt reviews and sprint planning."

---

## Step 3: Generate Code with Completions (5 min)

**SAY:** "Now let's generate code using Copilot's inline completions — the ghost text that appears as you type."

1. Open `src/app/layout.tsx`
2. Go to **line 52** — you'll see `{/* REPLACE THIS COMMENT */}`
3. Delete the entire comment on line 52
4. Type this replacement comment:

```tsx
{
  /* Create a footer for this section. It should contain the logo and copyright information. */
}
```

5. Press **Enter** after the comment and wait for Copilot's ghost text suggestion
6. Press **Tab** to accept the suggestion (or **Esc** to dismiss)

**SAY:** "Copilot reads the comment and the surrounding layout code to generate a matching footer. Notice how it picks up the Tailwind classes and component patterns already in the file."

7. Save the file and refresh [http://localhost:3000](http://localhost:3000)

**SHOW:** Point to the new footer in the browser.

> **If no suggestion appears:** Delete the line, retype the comment, and press Enter again. Sometimes a slower pace triggers the suggestion.

---

## Step 4: Review and Commit Changes (3 min)

### Option A — AI-Powered Review (Premium)

1. Highlight the generated footer code
2. Right-click → **Copilot** → **Review with Copilot**
3. Walk through any suggestions — accept or discard

**SAY:** "Copilot can review its own output. It catches things like accessibility issues, missing dark mode classes, or code style inconsistencies."

### Option B — Manual Review (Free)

1. Read through the generated code
2. Check: Does it match the requirements? Does it follow existing patterns?

### Commit

1. Open **Source Control** (left sidebar)
2. Hover over the commit message box → click **Generate Commit Message with Copilot** (sparkle icon)
3. Review the generated message, edit if needed
4. Click **Commit** → **Sync Changes**

**SAY:** "Copilot generates commit messages by reading the diff — no more generic 'fixed stuff' commits."

---

## Wrap-Up (1 min)

**SAY:** "You've now used Copilot to discover features, understand a codebase, generate code with completions, review it, and commit — all in under 20 minutes. Next, we'll look at the engineering and collaboration tools built into Copilot."

**Transition:** "Let's move on to Engineering Practices."

---

## Troubleshooting

| Issue                    | Fix                                                                               |
| ------------------------ | --------------------------------------------------------------------------------- |
| No ghost text suggestion | Delete line, retype comment, press Enter. Ensure Copilot is active in status bar. |
| Dev server not starting  | Run `npm install` then `npm run dev`. Check port 3000 isn't in use.               |
| `/help` shows nothing    | Ensure Copilot Chat extension is installed and signed in.                         |
| Footer doesn't render    | Save the file. Turbopack hot-reloads automatically.                               |
