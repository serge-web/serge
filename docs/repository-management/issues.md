[🏠 Docsite home](../index.md) > [Repository management home](./index.md)

# Issues

Ideally, an issue will exist for all work. There are three types of issues, a 'bug report' an 'amend' and a 'feature'.

## Bug report / amend

If you are picking up a bug report ticket then you should create a `bugfix` branch to work in if it's an amend then it should be an `amend` branch. The issue should contain the following information:

- A description of the bug
- Steps to reproduce
- Expected behaviour

Bug reports should also include: 
- Technology used (OS, browser etc...)

## Feature

If you are picking up a feature ticket then you should create a `feature` branch to work in. The issue should contain the following information:

- A brief description of the issue
- A User story giving a more in-depth description of the issue as well as the reason for its requirement written in [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax (see below)
- A list of acceptance criteria
- A design to work from 

The user story should be written in Gherkin syntax and contain a 'background' and at least one 'scenario'.

e.g.

```gherkin
Feature: Returns and exchanges go to inventory.

Background:
As a store owner,
I want to add items back to inventory when they are returned or exchanged,
so that I can track inventory.

Scenario 1: Items returned for a refund should be added to inventory.
Given that a customer previously bought a black sweater from me
When they return the black sweater for a refund,
Then I should have four black sweaters in inventory.
```

If the User Story has enough scenarios to cover all of the behaviours then Acceptance Criteria is not required.

> ❗ If a ticket does not contain the required information, bounce the ticket back to its creator asking them to update it