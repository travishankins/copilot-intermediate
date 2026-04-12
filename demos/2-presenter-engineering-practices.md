# Presenter Guide: Engineering Practices Demo

**Duration:** 10–15 minutes
**Mode:** Instructor-led live demo

---

## Pre-Demo Checklist

- [ ] VS Code open with repository loaded
- [ ] GitHub Copilot Chat active with at least one message from Demo 1
- [ ] Browser open to [https://github.com/copilot](https://github.com/copilot)
- [ ] Signed into GitHub in both VS Code and browser

---

## Opening (1 min)

**SAY:** "Now we're going to look at the professional tools Copilot offers — debugging its decisions, sharing knowledge with teammates, and managing how it behaves. These are the features that matter when you're working on a team."

---

## Step 1: Inspect Copilot's Decision Process (3 min)

**SAY:** "Ever wonder why Copilot suggested something unexpected? You can see exactly what context it used."

1. Press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux)
2. Type `Copilot Debug`
3. Select **"GitHub Copilot: Open Chat Debug View"**

**SHOW:** Walk through the debug panel sections:

- **Prompts** — the actual prompts sent to the AI model
- **Custom Instructions** — project-level instructions Copilot received
- **Metadata** — context information and settings
- **Response Details** — how Copilot formulated its answer

**SAY:** "This is your 'show your work' view. When a suggestion seems off, check here before changing your prompt — you might find it's using unexpected context."

---

## Step 2: Share Chat Conversations (3 min)

**SAY:** "When someone on your team figures out a great prompting pattern, they can export the conversation and share it."

### Export

1. Press `Cmd + Shift + P`
2. Type `Chat: Export`
3. Select **"Chat: Export Chat..."**

**SHOW:** The exported file that's generated.

**SAY:** "This creates a portable file of the entire chat history. You can share it via Slack, email, or a shared repo."

### Import

1. Press `Cmd + Shift + P`
2. Type `Chat: Import`
3. Select **"Chat: Import Chat..."**

**SAY:** "Any teammate can import a shared conversation and see exactly what prompts worked, what context was used, and what Copilot produced."

---

## Step 3: Explore Personal Instructions (3 min)

**SAY:** "Now let's switch to GitHub.com. Personal instructions let you define how Copilot responds to you across all repositories."

1. Navigate to [https://github.com/copilot](https://github.com/copilot)
2. Click your **user icon** (bottom-left corner)
3. Select **"Personal instructions"**

**SHOW:** The personal instructions editor.

**SAY:** "You can add preferences like 'always use TypeScript strict mode' or 'prefer functional components.' These apply to every Copilot interaction, everywhere."

4. Optionally add a sample instruction and show how it affects a follow-up prompt

---

## Step 4: Manage Shared Conversations (3 min)

**SAY:** "You can also share Copilot conversations directly from GitHub.com — and your team can browse a shared library."

### Share a Conversation

1. Go to [https://github.com/copilot](https://github.com/copilot)
2. Start a chat with this prompt:

```
What are some best practices for building accessible photo gallery components in React?
```

3. Click the **"Share"** button (top-right of chat window)
4. Copy the share link

**SHOW:** The generated share link.

### View Shared Conversations

1. Click your **user icon** (bottom-left)
2. Select **"Manage shared conversations"**

**SHOW:** The conversation management interface.

**SAY:** "This becomes a team knowledge base over time. Share conversations that solved complex problems or demonstrated effective prompting patterns. Tag them so they're easy to find later."

---

## Wrap-Up (1 min)

**SAY:** "You now know how to debug Copilot's decisions, share conversations with your team, set personal instructions, and build a shared knowledge base. These are the practices that turn individual productivity into team productivity."

**Transition:** "Next, we'll get into the advanced customization features — models, prompt files, agents, and MCP servers."

---

## Troubleshooting

| Issue                            | Fix                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------- |
| Debug view is empty              | Send a message in Copilot Chat first, then reopen the debug view.                |
| Export option not visible        | Ensure you have the latest Copilot Chat extension. Update if needed.             |
| Personal instructions not saving | Check you're signed into the correct GitHub account.                             |
| Share button not available       | Ensure you're on [github.com/copilot](https://github.com/copilot) and signed in. |
