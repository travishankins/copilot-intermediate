# Presenter Guide: Copilot Spaces Demo

**Duration:** 20–25 minutes
**Mode:** Instructor-led setup, then group exercise

---

## Pre-Demo Checklist

- [ ] Browser open to [https://github.com/copilot/spaces](https://github.com/copilot/spaces)
- [ ] Signed into GitHub
- [ ] Participants divided into Group A (Security) and Group B (Documentation)
- [ ] If using an organization, confirm members have access
- [ ] Repository URL ready for referencing files

---

## Opening (2 min)

**SAY:** "Copilot Spaces are dedicated AI environments where you define a goal, add context files and reference material, and then work collaboratively with Copilot. Think of them as purpose-built workspaces with curated knowledge."

---

## Step 1: Create a Copilot Space (10 min)

**SAY:** "We're splitting into two groups. Group A will create a Security Analysis space, Group B will create a Documentation Hub. Follow your group's instructions."

### Walk through the setup live with one group option, then let both groups work.

1. Go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces)
2. Click **Create Space**

### Group A — Security Analysis

1. **Name:** `Photo Gallery - Security Assessment`
2. **Owner:** Username or Org
3. **Description:** `Implement security best practices for the photo gallery application`
4. Click **Save**

**Adding Instructions:**

5. Click **Instructions** and paste:

```
You are a security expert helping to analyze and improve the security posture of a Next.js 15 photo gallery application. Focus on:

- File upload security vulnerabilities and mitigations
- Input validation and sanitization
- Authentication and authorization patterns
- XSS prevention in user-generated content
- Secure image processing and storage
- OWASP Top 10 web application security risks
- Next.js specific security best practices

Provide specific code examples and security recommendations that follow industry standards and OWASP guidelines. Consider both client-side and server-side security measures.
```

6. Click **Save**

**Adding Sources:**

7. Click **Add sources** → **Add files and repositories** → add these files, then **Save**:

```
src/components/upload/UploadZone.tsx
src/lib/mock-photo-data.ts
src/app/layout.tsx
next.config.ts
```

8. Click **Add sources** → **Link files, pull requests, and issues** → add:

```
https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/3
```

> **NOTE:** This references the sandbox repo's issue. If using a fork, substitute your repo's issue URL.

9. Click **Add sources** → **Add text content** → paste the OWASP Top 10 reference text:

```
## OWASP Top 10 2021 - Key Security Risks for Web Applications

1. **A01 Broken Access Control** - Users can act outside of their intended permissions
2. **A02 Cryptographic Failures** - Failures related to cryptography which often leads to sensitive data exposure
3. **A03 Injection** - User-supplied data is not validated, filtered, or sanitized by the application
4. **A04 Insecure Design** - Risks related to design and architectural flaws
5. **A05 Security Misconfiguration** - Missing appropriate security hardening across any part of the application stack
6. **A06 Vulnerable and Outdated Components** - Using components with known vulnerabilities
7. **A07 Identification and Authentication Failures** - Confirmation of the user's identity, authentication, and session management
8. **A08 Software and Data Integrity Failures** - Code and infrastructure that does not protect against integrity violations
9. **A09 Security Logging and Monitoring Failures** - Failures in logging and monitoring coupled with missing or ineffective integration with incident response
10. **A10 Server-Side Request Forgery** - SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL

## Next.js Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## File Upload Security Considerations
- File type validation
- File size limits
- Malware scanning
- Secure file storage
- Image processing vulnerabilities
```

10. Click **Save**

### Group B — Documentation Hub

1. **Name:** `Photo Gallery - Documentation Hub`
2. **Owner:** Username or Org
3. **Description:** `Create comprehensive documentation and API design documentation for the photo gallery application`
4. Click **Save**

**Adding Instructions:**

5. Click **Instructions** and paste:

```
You are a technical documentation specialist helping to create comprehensive documentation for a Next.js 15 photo gallery application. Focus on:

- API documentation using OpenAPI/Swagger specifications
- Component documentation with usage examples
- Architecture decision records (ADRs)
- User guides and installation instructions
- Code documentation and inline comments
- README improvements and contribution guidelines
- Performance optimization documentation

Follow industry best practices for technical writing, API documentation standards (OpenAPI 3.0), and modern documentation tools. Create clear, actionable documentation that serves both developers and end users.
```

6. Click **Save**

**Adding Sources:**

7. Click **Add sources** → **Add files and repositories** → add these files, then **Save**:

```
README.md
COMPONENT_USAGE_GUIDE.md
src/components/ui/index.ts
src/app/page.tsx
package.json
```

8. Click **Add sources** → **Link files, pull requests, and issues** → add:

```
https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/4
```

9. Click **Add sources** → **Add text content** → paste the documentation standards text:

```
# Documentation Standards

## API Documentation
- OpenAPI 3.0 specification with complete schemas
- Clear endpoint naming and HTTP status codes
- Request/response examples and error handling
- Authentication and rate limiting documentation

## Code Documentation
- Function/method purpose and parameters
- Usage examples and dependencies
- Error conditions and return values
- Performance considerations

## Architecture Documentation
- Decision records (ADRs) with context and rationale
- System design and component relationships
- Deployment and configuration guides
- Troubleshooting and maintenance procedures

## Tools & Formats
- **API Docs**: Swagger UI, Postman, Insomnia
- **Code Docs**: JSDoc, TypeDoc, inline comments
- **Wikis**: GitHub Wiki, Notion, Confluence
- **Static Sites**: Docusaurus, GitBook, MkDocs
```

10. Click **Save**

### Optional — Share the Space

**SAY:** "If the Space owner is an organization, you can share it with your team."

11. Click **Share** (top right)
12. Set access to **Viewer**
13. Copy link and share with the other group

---

## Step 2: Collaborate and Share (8 min)

**SAY:** "Now use your Space — or switch to the other group's Space — and ask Copilot a question using the curated context."

### Group A — Security Analysis Prompt

```
I need help identifying and fixing security vulnerabilities in our photo gallery application. Please analyze our file upload component and suggest:

1. How to validate file types securely (not just by extension)
2. Protection against malicious file uploads and XSS attacks
3. Proper input sanitization for photo titles and tags
4. Content Security Policy (CSP) headers for Next.js
5. Rate limiting strategies for upload endpoints

Based on the OWASP Top 10 guidelines, what are the most critical security issues I should address first in this photo gallery application?
```

### Group B — Documentation Prompt

```
I need to create professional documentation for our photo gallery application. Please help me:

1. Generate an OpenAPI 3.0 specification for our photo management API endpoints
2. Create detailed component documentation with usage examples for our UI components
3. Write an Architecture Decision Record (ADR) for choosing Next.js 15 with TypeScript
4. Improve our README with installation, development, and deployment instructions
5. Create a contributing guide for other developers

Following industry best practices, what documentation structure would you recommend for this type of application?
```

**SAY:** "Explore the response, then ask follow-up questions. The Space retains all the context you provided."

---

## Wrap-Up and Discussion (3 min)

**DISCUSSION PROMPTS:**

- "How were you able to collaborate with your team using Copilot Spaces?"
- "How did the curated context (instructions, files, text) improve the quality of responses?"
- "What would you do differently next time?"

**SAY:** "Spaces are powerful because they let you scope Copilot's knowledge to exactly what matters for a task. This avoids the 'boil the ocean' problem of open-ended chat."

**Transition:** "Next, we'll see Copilot work autonomously as a cloud-based coding agent."

---

## Troubleshooting

| Issue                         | Fix                                                                   |
| ----------------------------- | --------------------------------------------------------------------- |
| "Create Space" button missing | Ensure Copilot Spaces is enabled for your account/org.                |
| Cannot add files              | Verify the repo is accessible from the account that owns the Space.   |
| Share option not available    | Sharing requires the Space to be owned by an organization.            |
| Issue link not resolving      | Use the correct repo URL. If using a fork, use your fork's issue URL. |
| Responses ignore context      | Check that sources were saved. Re-add if they show as pending.        |
