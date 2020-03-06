[🏠 Docsite home](../index.md) > [Repository management home](./index.md)

# Pull Requests

ALL branch merges should only be done via a Pull Request. Please fill in all relevant sections of the pull request template and delete any sections which do not apply. The following sections are mandatory and should not be deleted:

- Issue*
- Overview
- Reason*
- Work Carried out
- Confirmations

Items marked with * can be deleted if you are not working from an issue.

You should also assign reviewers to your PR and assign yourself. Merges to `develop` should have at least 1 reviewer but the more people who review a PR the better. One of those reviewers must be [Alex Foxleigh](https://github.com/foxleigh81) or [Ian Mayo](https://github.com/IanMayo).

A label should also be applied indicating what was done. These things are easy to overlook but a PR should not be approved without them. To help developers remember to do this, a checklist is included in a PR which must be completed truthfully. PR's which do not conform to this will be rejected.

Once a pull request has been approved and all of the checks have passed, the originator of the PR should perform the merge. The branch attached to that PR should be automatically deleted but if not please delete it manually.

If you are working in a child branch then please ensure that the pull request merges to the parent branch and not `develop` and add a note about that to the 'developer notes' section.

If a PR is listed as 'Draft' then please ignore it entirely until the developer marks it as 'ready for review', this will avoid confusion, see below for an example of what that looks like:

![Draft PR screenshot](https://i1.wp.com/user-images.githubusercontent.com/3477155/52671177-5d0e0100-2ee8-11e9-8645-bdd923b7d93b.gif?resize=1024%2C512&ssl=1)

Merges to master are for releases only and should only be performed by Ian Mayo or Alex Foxleigh.