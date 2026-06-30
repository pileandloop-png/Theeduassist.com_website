Rollback options:

1. Firebase Console rollback:

* Firebase Console
* Hosting
* Release history
* Select previous release
* Roll back

2. Git rollback:

* create restore branch
* revert bad PR
* PR into main
* deploy Hosting only

3. Emergency rule:

* do not force-push main
* do not delete history
* do not disable branch protection permanently

Identify last good commit:
`git log`

Use `git revert`:
`git revert <bad_commit_hash>`

Create restore PR:
* Push your branch.
* Open a pull request against `main`.

Redeploy Hosting only:
`firebase deploy --only hosting`
