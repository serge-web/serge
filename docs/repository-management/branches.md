[🏠 Docsite home](../index.md) > [Repository management home](./index.md)

# Branches

## Naming

Branches should be named by the ticket you are currently working on wherever possible, including the ticket number. If the work is not related to a ticket, then it should be given a sensible name. All branches should follow the following convention for prefixing:

- `feature/` - A new feature or an update which will result in an enhancement of an existing feature
- `amend/` - An update which will amend a previously existing issue 
- `bugfix/` - An update which will fix a bug
- `release/` - A release branch

> An amend is different from a bug. A bug is an issue that causes a failure or error somewhere, whereas an amend is something that isn't quite right. For example, a page not loading is a bug, a page having a header that needs to be bigger is an amend. 

### Acceptable

```
feature/263-mapping-improvements
```

### Unacceptable

```
mapping-stuff
```

## Protected branches

Two protected branches exist, these are `master` and `develop`. `master` is only for releases and will be carried out by @IanMayo, `develop` is the active development branch for our work. All workstreams should initially branch off `develop`. Pushing to develop can only be done via a Pull Request (see below).

## Deletion

No branch should outlive its workstream. As soon as the work has been merged into `develop` or a parent branch, it should be deleted. Similarly, if a workstream is no longer required and the branch isn't going to be merged, it should also be deleted. 

For larger workstreams, it is acceptable to carry out nested branches but only if pushing the code to `develop` will cause problems without the full work package. In this instance, your initial branch should come off `develop` and be named following the above guidelines, and subsequent branches should be children of that branch with additional information added to the end of the branch name with a `--`. e.g. `feature/263-mapping-improvements--documentation`