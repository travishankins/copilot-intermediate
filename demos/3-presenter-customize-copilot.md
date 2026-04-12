# Presenter Guide: Customize Copilot Demo

**Duration:** 25–30 minutes
**Mode:** Instructor-led with hands-on participant exercises

---

## Pre-Demo Checklist

- [ ] VS Code open with repository loaded
- [ ] Dev server running: `npm run dev`
- [ ] Browser open to GitHub settings: [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
- [ ] Confirm these files exist:
  - `src/lib/mock-photo-data.ts`
  - `src/components/gallery/GalleryGrid.tsx`
  - `src/lib/photo-utils.ts`
  - `.github/prompts/generate-mock-photo-data.prompt.md`
  - `.github/prompts/generate-new-ui.prompt.md`
  - `.github/agents/Plan.agent.md`
  - `.vscode/mcp.json`
- [ ] Copilot Chat panel open

---

## Opening (1 min)

**SAY:** "Now we're going to customize how Copilot works — track usage, switch models, use prompt files for repeatable tasks, create custom agent modes, and connect external tools with MCP servers."

---

## Step 1: Monitor Premium Requests (2 min)

### In VS Code

1. Click the GitHub Copilot icon in the Chat panel or status bar
2. Show the premium request usage indicator

### On GitHub.com

1. Navigate to [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
2. Show the usage dashboard

**SAY:** "Premium requests have limits depending on your plan. Keep an eye on usage, especially when using advanced models or agent mode which consume more requests."

---

## Step 2: Advanced Model Switching — OPTIONAL (8 min)

**SAY:** "Different models have different strengths. Let's try the same refactoring task with multiple models and compare the results."

**Mode:** Edit

1. Switch Copilot to **Edit** mode
2. Select a model (e.g., the default model)
3. Add context files — use **Add Context** and type each file name, or open all three files and use **Add Context → Open Editors**:

```
src/lib/mock-photo-data.ts
src/components/gallery/GalleryGrid.tsx
src/lib/photo-utils.ts
```

4. Stay on `photo-utils.ts`
5. Highlight **lines 78–132** (the `getGalleryStatistics` function)

**SHOW:** Point out the code smells: `any` types, manual `for` loops instead of array methods, repeated patterns, no null safety.

6. Type the prompt:

```
Help me refactor this function for better performance, readability, and add TypeScript improvements
```

7. Review the result
8. Repeat with 1–2 other models (switch model in the dropdown, re-submit the prompt)

**SAY:** "Notice how each model approaches the same code smells differently — some will use `reduce()`, some focus on types first, some add null guards. There's no single 'right' answer."

**DISCUSSION (1 min):** Ask participants which response they preferred and why.

---

## Step 3: Use Prompt Files (7 min)

**SAY:** "Prompt files are reusable templates stored in your repo. They standardize how your team interacts with Copilot for common tasks."

1. Open the `/.github/prompts/` folder in the file explorer
2. Open and briefly walk through both prompt files:
   - `generate-mock-photo-data.prompt.md`
   - `generate-new-ui.prompt.md`

**SAY:** "Notice the structure — description, context, requirements, examples. This is what makes prompts repeatable across the team."

### Option A — Generate Mock Data

3. In Copilot Chat, type:

```
/generate-mock-photo-data 3
```

**SHOW:** The generated mock data entries following the exact schema.

### Option B — Generate a UI Component

3. In Copilot Chat, type:

```
/generate-new-ui for the recent galleries table in the admin page. I want it to be the replacement component for the current table and be reuseable. Place it in the layout folder.
```

**SHOW:** The generated component following project patterns.

### Bonus Challenge (if time permits)

**SAY:** "Let's create a new prompt file with Copilot's help."

1. In Copilot Chat, click the **gear icon** (top right)
2. Select **"Prompt Files"**
3. Click the **plus icon** → select `.github/prompts/` folder
4. Name it `generate-unit-tests.prompt.md`
5. Add context files and prompt:

```
Related files:
- /src/components/ui/cards/FeatureCard.tsx
- /.github/prompts/generate-new-ui.prompt.md
- /.github/prompts/generate-mock-photo-data.prompt.md

help me create a prompt file for creating unit test generation for the UI components.
```

---

## Step 4: Custom Agent Modes (5 min)

**SAY:** "Agent modes are custom personas that change how Copilot behaves. We have a Plan agent already set up."

1. Open `.github/agents/Plan.agent.md` — show the structure (name, description, tools, instructions)
2. In Copilot Chat, switch to **"Plan"** mode (use the mode dropdown)
3. Type:

```
help me plan out a new page for creating new galleries
```

4. Walk through the generated plan

**SAY:** "The Plan agent won't write code — it only generates plans. This separation of concerns keeps planning and implementation distinct."

**DISCUSSION (1 min):** "What other agent modes would help your team? A reviewer? A documentation writer? A migration specialist?"

**If time permits:** Try implementing changes from the plan using a different mode (e.g., Agent mode) to contrast the experience.

---

## Step 5: Custom Instructions and MCP Servers (5 min)

### Part One — Custom Instructions

**SAY:** "Custom instructions shape Copilot's behavior for every interaction in this repo. Let's look at what we have."

1. Open `.github/copilot-instructions.md`
2. Walk through the sections — project overview, architecture, component patterns, best practices

**SAY:** "Have you noticed Copilot's suggestions aligning with these patterns? It reads this file on every interaction."

3. Show generating instructions:
   - Open Copilot Chat
   - Click the **gear icon** → **"Generate Instructions"**
   - Review the generated output

**SAY:** "This gives you a starting point. Customize it with your team's specific conventions."

### Part Two — MCP Authentication

**SAY:** "MCP (Model Context Protocol) connects Copilot to external tools and data sources. Let's set it up."

1. Open `.vscode/mcp.json` — show the two options (OAuth vs PAT)

**Option A — OAuth (VS Code 1.101+):**

2. Under `// Using OAuth`, click **Start**
3. A popup says "The MCP Server Definition 'github' wants to authenticate to GitHub" → click **Allow**
4. Select account and press Enter

**Option B — PAT:**

2. Follow the instructions at [github.com/github/github-mcp-server](https://github.com/github/github-mcp-server)

### Verify Tools

1. In Copilot Chat, switch to **Agent** mode
2. Click the **tools icon**
3. Browse the available toolsets

**SHOW:** Scroll through the list of MCP tools.

### Part Three — Create an Issue with MCP

1. In Agent mode, type:

```
create an issue for this repo for a feature request to toggle between dark mode and light mode
```

2. Copilot will use MCP tools to create the issue
3. Show the created issue in the browser

**SAY:** "Copilot just used MCP to interact with GitHub's API directly — no browser needed. This issue will be used in the next demo."

> **IMPORTANT:** Confirm the issue was created — Demo 5 (Coding Agent) depends on it.

---

## Wrap-Up (1 min)

**SAY:** "You've now customized Copilot with model switching, prompt files, agent modes, custom instructions, and MCP servers. These compound over time — the more your team invests in these, the more consistent and productive everyone becomes."

**Transition:** "Next, we'll explore Copilot Spaces for collaborative AI development."

---

## Troubleshooting

| Issue                          | Fix                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------- |
| Prompt file not recognized     | Ensure it's in `.github/prompts/` with `.prompt.md` extension.                |
| Plan agent not in dropdown     | Check `.github/agents/Plan.agent.md` exists and reload VS Code window.        |
| MCP OAuth popup doesn't appear | Ensure VS Code is version 1.101+. Try restarting VS Code.                     |
| MCP tools not showing          | Click the refresh icon in the tools panel. Verify MCP server started.         |
| Issue not created              | Check MCP auth succeeded. Try `@github` prefix if tools aren't auto-selected. |
| Model switching not available  | Some models require premium. Check plan limits.                               |
