# Presenter Demo Guides for Photo Gallery & Portfolio

This folder contains presenter demo scripts for delivering GitHub Copilot training using the Photo Gallery & Portfolio application. Each guide includes talking points, exact steps, expected results, and troubleshooting tips. Demos build on each other sequentially.

## Demo Sequence

### 1. Features ([1-presenter-features.md](1-presenter-features.md)) — 15–20 min

Core Copilot features: chat commands, code generation, review, and commit.

- `/help`, `/explain`, Ask mode
- Inline code completions (footer generation in `layout.tsx`)
- AI-powered code review and commit message generation

---

### 2. Engineering Practices ([2-presenter-engineering-practices.md](2-presenter-engineering-practices.md)) — 10–15 min

Professional collaboration tools for teams.

- Debug Copilot's decision-making process
- Export/import chat conversations
- Personal instructions on GitHub.com
- Shared conversation management

---

### 3. Customize Copilot ([3-presenter-customize-copilot.md](3-presenter-customize-copilot.md)) — 25–30 min

Advanced customization: models, prompts, agents, MCP.

- Premium request monitoring
- Model switching with refactoring comparison
- Prompt files (`/generate-mock-photo-data`, `/generate-new-ui`)
- Plan agent mode
- Custom instructions and MCP server setup
- **Creates the dark mode issue used in Demo 5**

---

### 4. Copilot Spaces ([4-presenter-copilot-spaces.md](4-presenter-copilot-spaces.md)) — 20–25 min

Collaborative AI environments with curated context.

- Group A: Security Analysis space (OWASP Top 10)
- Group B: Documentation Hub space
- Space sharing and cross-group collaboration

---

### 5. Coding Agent ([5-presenter-coding-agent.md](5-presenter-coding-agent.md)) — 20–25 min

Cloud-based autonomous coding agent.

- Assign Copilot to the dark mode issue (from Demo 3)
- Monitor live session
- Review generated PR
- Iterate via review comments
- Agent mode vs coding agent comparison

---

### 6. Agent Skills ([6-presenter-agent-skills.md](6-presenter-agent-skills.md)) — 25–30 min

Encode team patterns into reusable skills.

- Explore existing component patterns
- Create `ui-component` skill with SKILL.md and references
- Generate a Testimonials component from natural language
- Verify output follows project conventions

---

### 7. TDD Agent Mode ([7-presenter-tdd-agent-mode.md](7-presenter-tdd-agent-mode.md)) — 25–30 min

Role-scoped agents for Test-Driven Development.

- Create `tdd-red`, `tdd-green`, `tdd-blue` agents
- Plan a `searchPhotos` feature
- Full Red → Green → Blue cycle
- Discussion on multi-agent orchestration patterns

---

### 8. Agentic Workflows ([8-presenter-agentic-workflows.md](8-presenter-agentic-workflows.md)) — 20–25 min

AI-powered GitHub Actions in markdown.

- Traditional vs agentic workflow comparison
- Auto-triage example walkthrough
- Create a PR documentation review workflow via coding agent
- Security model: sandboxing, permissions, safe outputs
- Full workshop summary

---

## How to Use These Guides

1. Follow the demos in order — each builds on the previous
2. Use **SAY:** blocks as talking points (paraphrase, don't read verbatim)
3. Use **SHOW:** blocks to know what to display to participants
4. Check the **Pre-Demo Checklist** before each demo
5. Reference the **Troubleshooting** table at the end of each guide if something goes wrong
6. **Total workshop time:** ~3 hours (all 8 demos)

# Demo Guides for Photo Gallery & Portfolio

This folder contains step-by-step demo guides for learning and practicing GitHub Copilot features in the Photo Gallery & Portfolio application. Each demo builds on the previous one, helping you master Copilot’s capabilities in a real-world Next.js project.

## Demo Sequence & Descriptions

### 1. Features Demo ([1-features-demo.md](1-features-demo.md))

**Overview:**
Start here to explore Copilot’s core features. Learn how to use chat commands, generate code, and review AI suggestions.
**Key Skills:**

- Discover available Copilot commands
- Get project summaries and code explanations
- Generate and review code completions
- Commit changes with Copilot

---

### 2. Engineering Practices Demo ([2-engineering-practices.md](2-engineering-practices.md))

**Overview:**
Dive deeper into professional Copilot tools for teams. Inspect Copilot's decision process, share chat conversations, and explore custom instructions for consistent code generation.
**Key Skills:**

- Debug Copilot's suggestions
- Export/import chat conversations
- Understand and manage custom instructions
- Collaborate using shared conversations

---

### 3. Customize Copilot Demo ([3-customize-copilot.md](3-customize-copilot.md))

**Overview:**
Learn advanced customization techniques. Monitor premium usage, switch models, use prompt files, experiment with custom agent modes, and set up custom instructions for your team.
**Key Skills:**

- Track Copilot premium usage
- Switch between AI models
- Create and use prompt files
- Utilize custom agent modes, custom instructions, and MCP servers

---

### 4. Copilot Spaces Demo ([4-copilot-spaces.md](4-copilot-spaces.md))

**Overview:**
Collaborate in dedicated Copilot Spaces. Create a Space, set goals, add context files, and work together to implement new features with AI assistance.
**Key Skills:**

- Create and manage Copilot Spaces
- Set development goals
- Collaborate and share progress
- Implement and test new features

---

### 5. Cloud Agent Demo ([5-coding-agent.md](5-coding-agent.md))

**Overview:**
Experience GitHub Copilot as a cloud-based coding agent. Assign it to a GitHub issue, monitor its session in real time, review its pull request, and iterate by leaving review comments.
**Key Skills:**

- Assign Copilot to GitHub issues
- Monitor coding agent sessions in real time
- Review Copilot-generated pull requests
- Iterate on PRs with review feedback
- Compare coding agent vs. agent mode in the IDE

---

### 6. Agent Skills Demo ([6-agent-skills.md](6-agent-skills.md))

**Overview:**
Learn how Agent Skills encode your team's architecture, patterns, and conventions into reusable instructions that Copilot loads automatically. Create a skill for the Photo Gallery project and generate production-ready, pattern-adherent components with a single prompt.
**Key Skills:**

- Understand Agent Skills vs Custom Instructions
- Create an Agent Skill with SKILL.md and reference files
- Generate consistent components from natural language prompts
- Verify generated code follows established project conventions

---

### 7. TDD Agent Mode Demo ([7-tdd-agent-mode.md](7-tdd-agent-mode.md))

**Overview:**
Create three custom agents (`tdd-red`, `tdd-green`, `tdd-blue`) that each own one phase of a Test-Driven Development workflow. See how role-scoped agents enforce constraints and hand off context through code.
**Key Skills:**

- Create role-scoped custom agents with strict boundaries
- Drive a full Red → Green → Blue TDD cycle
- Understand developer-driven agent orchestration
- Apply the multi-agent pattern to other phased workflows

---

### 8. Agentic Workflows Demo ([8-agentic-workflows.md](8-agentic-workflows.md))

**Overview:**
Explore AI-powered GitHub Actions written in markdown that can reason, adapt, and act autonomously. Create an agentic workflow using the Copilot coding agent and understand the security model.
**Key Skills:**

- Understand agentic vs traditional GitHub Actions workflows
- Create agentic workflows using the Copilot coding agent
- Understand sandboxing, permissions, and safe outputs
- Brainstorm automation opportunities for your team

---

## How to Use These Demos

1. Start with the first demo and work through each guide in order.
2. Follow the instructions and prompts in each file.
3. Mark off completion checklists as you progress.
4. Share your learnings and results with your team.

---
