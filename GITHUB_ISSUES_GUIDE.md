# GitHub Issues & Workflow Guide for AI Agents

## 1. Initialization (Start of Task)

Whenever a new task or chat begins, consult the open issues to see if the requested work is already tracked. If not, create a new issue using the following structure:

### Issue Structure Template

```markdown
**Context/Description**
[Describe what needs to be done and why]

**Acceptance Criteria**
- [ ] Criterion 1 (e.g., Page loads without errors)
- [ ] Criterion 2 (e.g., User can click X)

**Technical Notes**
- [Optional: Brief note on implementation strategy, e.g., "Using generic-ui library"]
```

---

## 2. Execution (During Work)

* **Branching**: specific branches should be created for the issue.
  * *Naming Convention*: `feat/issue-ID-short-description` or `fix/issue-ID-short-description`.
* **Commits**: All commit messages must reference the issue ID.
  * *Format*: `[#ISSUE_ID] Commit message` (e.g., `[#12] Add responsive styles to header`)

---

## 3. Completion (End of Task)

1. **Verification**: Ensure all Acceptance Criteria are met.
2. **Closing**: Close the issue using the GitHub tool.
  * *Tool*: `mcp_github-mcp-server_issue_write` (method: `update`, state: `closed`)
3. **Comment**: Add a final comment summarizing the resolution if it wasn't a standard PR merge (optional but recommended for complex tasks).

---

## 4. Standard Labels

Apply these labels when creating issues:
* `enhancement`: New features or improvements.
* `bug`: Errors or broken functionality.
* `documentation`: Changes to README, guides, or code comments.
* `refactor`: Code cleanup without logic change.
* `urgent`: Blocks critical workflows.

---

## 5. Agent Instructions (System Prompt Injection)

**As an AI Developer Agent, you MUST follow these guidelines throughout your interactions. Ensure NO work goes undocumented. Connect branches and commits to the relevant issue ID. Stop and ask for clarification if a task violates these tracking rules.**
