---
title: The cost of refactoring
description: This is a post about the costs and pains of refactoring.
date: 2021-04-05
eleventyExcludeFromCollections: true
tags:
  - software development
  - refactoring
---

In the best of worlds every codebase we've ever created is up to date with all the latest dependency versions and up to standards with our current skill level in quality.

The thing is... that's never the reality with our old projects. After months, or maybe even years, of not touching a project it ages ungracefully. It may still work, unless it uses outdated external API:s, and do the thing it's supposed to do, but extending it with new functionality might be painful, or at least simply unpleasant.

## Paying for old "sins"
Let's be honest with ourselves, we were all terrible developers at some point. Some of us still are. You're new to the game, just learned to create your first React component, and have no clue how to reason about application architecture or how to decouple logic from visual components. State management is something you're still unfamiliar with, uncharted territory.

Eventually, you return to the code you wrote for what feels like decades ago. It's still the same, obviously, but you, you have changed, evolved with experience and all those code reviews you've been through. Maybe, like me, you wanted to bring new life to a dead project.

In my case I want to refactor it to use another framework. I refactored this project recently, right? Should be a breeze. Wrong. I knew I would have to rewrite the API from Python to TypeScript and gradually also rewrite the JavaScript. I did not consider that it might have been a bit longer since the last refactor than I anticipated, by a couple of years...

How I structure projects have changed, I used another flavor of Sass than I prefer now (and it needs to be converted to CSS Modules), and at least one of the external API:s I use is deprecated since the end of last year... Amazing.

## Should I just rebuild the whole thing from scratch?
When standing before the legacy monster, this question often comes to mind. The task of maintaining, or even more terrifying... add more features to, an old codebase could be excruciating work. Imagine "self-explanatory" code with 150 lines in a single function, filled with nested if-statements. That's probably enough to make most sane developers lose some of their confidence.

### New is better, right?
Yes, but no. As with many other things, it depends. When is end of life for the system? How big is your budget, in financial means and/or hours? What are the reasons for maintaining it, and is there a strategy for doing that in the future?

With no planning beforehand there's an increased risk of ending up in a loop of repeatedly rebuilding the same system. Sometimes the decision to rebuild is valid, sometimes it's not. A common thing among developers is that we think we can do things better. It might be true, just as it might be equally true that it's not worth the cost.

### So I should just... give up on it?
Sometimes, yes. Sooner or later a project will reach it's end for any number of reasons. Maybe it's even built in a legacy framework no one available has any experience with. But that's not my point in this post. There's a balance to refactoring.

## A better way of thinking about refactoring
Refactoring is hard. The bigger the codebase, the harder it gets. So that's why we need to break it down. What's the smallest change you can do to increase value? Start there. Yes, value, not quality.

Specify the potential value. It could be code readability, reusability, user experience, developer experience even, or something else that generates value for you, your team or your target end users.

Then start prioritizing that change together with other tasks. Is something else more urgent? Do that first. Sometimes there's no way around a deadline, but don't let it drown in your backlog, there's also a cost bound to technical debt. Refactoring is an important part of the process.

Even moving from one framework to another can be done in steps. Just because you're moving from e.g. Angular to React doesn't mean the whole app needs to be rebuilt in one go. Remaking a complex app requires time and resources you might not have. Also, keeping two versions in sync during development will be difficult.

Instead it might be possible to start with a small part of the application and migrate that. In time the entire codebase will be migrated without having to stop development in other parts.


*[API]: Application Programming Interface
*[CSS]: Cascading Style Sheets
