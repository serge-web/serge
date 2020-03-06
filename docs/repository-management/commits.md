[🏠 Docsite home](../index.md) > [Repository management home](./index.md)

# Commits

Commit messages should be written in an imperative tone and present tense which can be used as a log of work done on that pull request. It should clearly state what work was done and/or the effect it would have. A good commit message makes the purpose of the commit obvious at a class when viewing the `/commits` page on GitHub

The following should also be taken into consideration when writing commit messages:

1) Do not use backticks (`) in your commit messages, GitHub does not interpret these properly for some reason and not only doesn't highlight them correctly but removes anything inside the backticks from the message. Hopefully, they will eventually fix this as backticks are a useful way of highlighting code.
2) Try to keep the commit heading short. Use the commit message body to add extra detail if needed.
3) Ideally one commit = one item of work. It's not always achievable but that is the goal.
4) Use sentence case and full, English sentences.

## Acceptable

```
Removes console.log from the 'markerFor' helper on the Mapping component
```

## Unacceptable

![A bad example of a commit message](https://i.imgur.com/ajZ8Ff2.png)

(Sorry, Ian.)