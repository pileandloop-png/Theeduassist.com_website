# Repo Protection Guide

1. Go to GitHub repo Settings.
2. Go to Rules → Rulesets.
3. Create branch ruleset: `Protect main`
4. Enforcement: `Active`
5. Target branches: `Include by pattern → main`
6. Turn on:
   * Require a pull request before merging
   * Required approvals: 1
   * Dismiss stale approvals when new commits are pushed
   * Block force pushes
   * Restrict deletions
7. If available later, add required status check: `Build and Validate`
8. If no status check appears yet, keep status checks off until a PR workflow run appears.
9. Do not enable `Restrict updates` unless owner understands bypass configuration.
10. Do not allow employees to push directly to `main`.

**Note:** This repository must use branches and PRs only. No direct commits to `main`.
