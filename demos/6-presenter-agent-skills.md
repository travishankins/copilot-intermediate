# Presenter Guide: Agent Skills Demo

**Duration:** 25–30 minutes
**Mode:** Instructor-led with hands-on exercise

---

## Pre-Demo Checklist

- [ ] VS Code open with repository loaded
- [ ] Dev server running: `npm run dev`
- [ ] Copilot Chat panel open
- [ ] Confirm these existing files are accessible (participants will reference them):
  - `src/components/ui/layout/SectionContainer.tsx`
  - `src/components/ui/layout/SectionTitle.tsx`
  - `src/components/ui/cards/FeatureCard.tsx`
  - `src/components/gallery/GalleryGrid.tsx`
  - `COMPONENT_USAGE_GUIDE.md`
- [ ] VS Code setting `chat.useAgentSkills` is enabled (Settings → search `chat.useAgentSkills`)

---

## Opening (2 min)

**SAY:** "Agent Skills let you encode your team's architecture, patterns, and conventions into reusable instruction packs that Copilot loads automatically. Think of Custom Instructions as 'how we code' and Agent Skills as 'how to build this specific thing.'"

**SHOW:** The comparison table:

| Aspect          | Agent Skills                       | Custom Instructions     |
| --------------- | ---------------------------------- | ----------------------- |
| **Purpose**     | Teach specialized capabilities     | Define coding standards |
| **Portability** | VS Code, Copilot CLI, Coding Agent | VS Code and GitHub.com  |
| **Content**     | Instructions, scripts, examples    | Instructions only       |
| **Scope**       | Task-specific, loaded on-demand    | Always applied          |
| **Standard**    | Open standard (agentskills.io)     | VS Code-specific        |

---

## Step 1: Explore Existing Patterns (5 min)

**SAY:** "Before building a skill, we need to understand what patterns we want to encode."

1. Open these files side by side (or one at a time):
   - `src/components/ui/layout/SectionContainer.tsx` — layout wrapper
   - `src/components/ui/layout/SectionTitle.tsx` — section headers
   - `src/components/ui/cards/FeatureCard.tsx` — card pattern
   - `src/components/gallery/GalleryGrid.tsx` — feature component with filtering

2. Point out the consistent conventions:

**SAY:**

- "Every component defines a TypeScript interface for its props"
- "All use Tailwind CSS with `dark:` variants for dark mode"
- "Layout components use `SectionContainer` and `SectionTitle` wrappers"
- "Grids are responsive with `grid md:grid-cols-* gap-*`"
- "Color scale follows slate/white for light/dark themes"

3. Open `COMPONENT_USAGE_GUIDE.md` and show the documented patterns

**SAY:** "These patterns are what we're going to encode into a skill so Copilot generates consistent components every time."

---

## Step 2: Create the UI Component Skill (10 min)

**SAY:** "Now let's build the skill. A skill is a folder with a `SKILL.md` file and optional reference files."

### 2.1 — Enable Agent Skills

1. Open Settings (`Cmd + ,`)
2. Search for `chat.useAgentSkills`
3. Confirm it's **enabled**

### 2.2 — Create the Skill Files

**SAY:** "We need to create this folder structure:"

```
.github/skills/ui-component/
├── SKILL.md
└── references/
    └── component-patterns.md
```

1. Create `.github/skills/ui-component/SKILL.md` with this content:

```markdown
---
name: ui-component
description: Generate UI components for the Photo Gallery app following established patterns
---

# UI Component Skill

## When to Use This Skill

Use this skill when asked to create a new UI component, page section, or feature card for the Photo Gallery application.

## Architecture Overview

The app follows a component-driven architecture with Next.js 15 App Router:

- **Layout Components** (`src/components/ui/layout/`): `SectionContainer`, `SectionTitle`, `Hero`
- **Card Components** (`src/components/ui/cards/`): `FeatureCard` and similar
- **Feature Components** (`src/components/gallery/`, `src/components/upload/`): Domain-specific components
- **Barrel Exports** (`src/components/ui/index.ts`): All UI components re-exported

## Required Patterns

### TypeScript

- Define an `interface` for all component props (named `{ComponentName}Props`)
- Use explicit return types
- Export components as named exports

### Styling

- Use Tailwind CSS classes exclusively (no inline styles or CSS modules)
- Always include dark mode variants: `text-slate-900 dark:text-white`, `bg-white dark:bg-slate-800`
- Use `page-gradient` class for page backgrounds
- Responsive grids: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Container: `container mx-auto px-4`

### Layout

- Wrap sections in `<SectionContainer>` with `<SectionTitle>`
- Use the existing layout components from `@/components/ui`

### Component Structure

\`\`\`tsx
import { SectionContainer, SectionTitle } from '@/components/ui';

interface MyComponentProps {
title: string;
// ... other props
}

export function MyComponent({ title }: MyComponentProps) {
return (
<SectionContainer>
<SectionTitle title={title} />
{/_ Component content _/}
</SectionContainer>
);
}
\`\`\`

### Mock Data

- Place mock data in `src/lib/mock-*.ts` files
- Follow the naming convention: `mock-{feature}-data.ts`
- Export typed arrays with descriptive interfaces

## Workflow

1. Create the component file in the appropriate directory
2. Define the props interface
3. Implement using layout components and Tailwind patterns
4. Create mock data if needed in `src/lib/`
5. Export from the barrel file (`src/components/ui/index.ts`) if it's a UI component
```

2. Create `.github/skills/ui-component/references/component-patterns.md`:

```markdown
# Component Pattern Examples

## Feature Card Pattern

\`\`\`tsx
<FeatureCard
  icon={IconComponent}
  title="Feature Title"
  description="Feature description"
  iconColor="text-blue-600"
/>
\`\`\`

## Stats Display Pattern

\`\`\`tsx
<StatsGrid stats={[
{ label: "Photos", value: "1,234", icon: Camera, color: 'blue' },
{ label: "Albums", value: "56", icon: Folder, color: 'green' },
]} />
\`\`\`

## Section Layout Pattern

\`\`\`tsx
<SectionContainer>
<SectionTitle title="Gallery" viewAllLink="/gallery" />

  <div className="grid md:grid-cols-3 gap-6">
    {/* Grid items */}
  </div>
</SectionContainer>
\`\`\`
```

**SAY:** "The `SKILL.md` frontmatter tells Copilot when to load this skill. The references folder gives it concrete examples to match."

---

## Step 3: Use the Skill to Generate a Component (8 min)

1. Open Copilot Chat → switch to **Agent** mode
2. Type:

```
Add a new Testimonials section component that displays user testimonials in a card grid. Each testimonial should have an author name, avatar placeholder, quote text, and a rating out of 5 stars.
```

3. Watch Copilot:
   - Detect and load the `ui-component` skill automatically
   - Generate a `Testimonials.tsx` component
   - Create `mock-testimonial-data.ts` with sample data
   - Use `SectionContainer` and `SectionTitle` wrappers
   - Apply dark mode Tailwind classes

**SHOW:** Review the generated code and verify:

- [ ] Props interface defined and exported
- [ ] Dark mode classes present (`dark:bg-slate-800`, `dark:text-white`)
- [ ] Layout uses `SectionContainer` and `SectionTitle`
- [ ] Grid is responsive (`grid md:grid-cols-2 lg:grid-cols-3 gap-6`)
- [ ] Mock data follows `mock-*-data.ts` naming

---

## Step 4: Verify and Discuss (3 min)

1. Start the dev server if not running (`npm run dev`)
2. Verify the component renders if it was added to a page

**DISCUSSION:**

- "How would this skill help new team members contribute faster?"
- "What other skills would be valuable? (page scaffolding, API integration, test generation)"
- "How does this compare to the Custom Instructions from Demo 3?"

**Key points:**

- Skills are portable across VS Code, CLI, and the coding agent
- They're loaded on-demand, not always active like custom instructions
- They can include scripts and resources, not just text

---

## Wrap-Up (1 min)

**SAY:** "Agent Skills turn your team's best practices into reusable capabilities. New developers get consistent, pattern-adherent code from day one, and the skills travel with the repo."

**Transition:** "Next, we'll create custom agents for a Test-Driven Development workflow."

---

## Troubleshooting

| Issue                                      | Fix                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Skill not detected                         | Ensure `chat.useAgentSkills` is enabled. Check folder is `.github/skills/ui-component/`.    |
| `SKILL.md` not recognized                  | Verify YAML frontmatter has `name` and `description`. Check for syntax errors.              |
| Generated component doesn't match patterns | Review the SKILL.md — ensure patterns are specific enough. Add more examples to references. |
| Component doesn't render                   | Check imports, ensure it's added to a page, verify dev server is running.                   |
