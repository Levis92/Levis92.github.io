---
title: Choosing the right tools
description: This is a post about choosing the right tools for a project and making this blog.
date: 2021-04-04
tags:
  - software development
  - 11ty
  - react
---

We've all been there. It's time to build a new project, and that means picking a tech stack.

In some cases, it's already decided for you. The company or client your working for has a common set of tools for all their applications.

In other cases, it's not. Maybe you work in a startup in the making, want to start building on a new cool idea you just had, or perhaps, like in my case, you want to develop a personal blog.

This post is about when you have a choice. And why I, as a React developer, went with [11ty](https://www.11ty.dev/) instead of a React framework like [Next.js](https://nextjs.org) or [Gatsby](https://www.gatsbyjs.com).

## The "new and shiny" problem
Apart from learning how to build the thing, one of the biggest hurdles is finding new interesting frameworks that are incredibly cool and have all these fantastic features. You're easily distracted from what the purpose of your project is supposed to be.

If the goal is to learn those specific frameworks, then, by all means, get to it and have fun. BUT, if the goal is to get stuff done, think about the requirements for the project.

Does it need to be a mobile or desktop application? No? How about a PWA? Not that either? Does it need to be interactive and fetch data during runtime, or is it purely static content?

## What is your hammer?
Do you have a language, library or framework you use for everything? And do you know why you chose it? It's completely fair to use if it is enjoyable to work with and keeps you productive. Sometimes we even really need just to get started.

React is my hammer. If I'd start a new project, the question usually was more about "How should I build this in React?" rather than "Should this be built with React?".

What I want you to start thinking about is if it's the appropriate tool for the job. If you're building a blog, do you need to load React, Vue or Angular in the browser?

## How did I get here?
The first time I started building my site was when I started learning HTML and CSS in 2016. I never finished it, and I left the site live in a terrible state.

The second time I quickly built a simple page with Create React App. Quite excessive for a page with an image, text and a few social links, don't you think?

What's worse than leaving a broken site? Leaving a rebuild unfinished. The third iteration never saw the light of day. I was intrigued by React SSG frameworks like Gatsby. Eventually, Next.js joined in with support for SSG too. I finished a [site](https://sofiasmassage.nu/) for my sister's company with Gatsby. My site had no such luck.

But it got me thinking. Do I need to load React on my personal website/blog? The content will, at least in the beginning, be completely static. Writing every page manually in HTML was definitely out of the question, and I wanted to dive into code and write posts in markdown, so a CMS was not an option either.

I'd previously heard about other static site generators like Jekyll, but I had an aversion against more traditional templating languages after falling in love with JSX in React.

## Why 11ty?
11ty has gotten quite popular, and I was curious about it. I've also started to fall more in love with the concept of writing a blog with markdown. With 11ty, you can customize your page to include just what's needed to display your content. No more, no less. At this moment, the only script tag on this page is for the [Font Awesome](https://fontawesome.com) icons in the footer.

The most basic example of creating a page can be found on the homepage of [11ty.dev](https://www.11ty.dev) and looks like this:

```shell
npm install -g @11ty/eleventy
echo '# Page header' > README.md
eleventy
```

Isn't it beautiful? The simplicity of it. Write some markdown, and it creates HTML from it. To be fair, I kind of need a "little" more tweaking than that.

## This blog
To explore 11ty, I went through this [sitepoint tutorial](https://www.sitepoint.com/getting-started-with-eleventy/). After feeling a bit more familiar with how it works, I decided to use the [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) template to get started building the real thing. It includes all the essential pages I need and generates an RSS feed, which was quite a big timesaver. I had to make a few modifications to the markup and styling to make it work the way I want, but for now, I'm fine with most of the layout.

A couple of things I added to it was a markdown-it plugin for abbreviations and this filter for reading time from the tutorial I went through:

```js
/* lib/filters/readtime.js */

// format number of words and reading time
const roundTo = 10,
  readPerMin = 200,
  numFormat = new Intl.NumberFormat("en")

module.exports = count => {
  const words = Math.ceil(count / roundTo) * roundTo,
    mins = Math.ceil(count / readPerMin)

  return `${numFormat.format(words)} words, ${numFormat.format(
    mins
  )}-minute read`
}
```

It's straightforward to then include your filters and shortcodes in your `.eleventy.js` config:

```js/3-4
// .eleventy.js

module.exports = function(eleventyConfig) {
  // format word count and reading time
  eleventyConfig.addFilter("readtime", require("./lib/filters/readtime"));

  return { ... };
}
```

After that it's just updating your template code:

{% raw %}
```jsx/7/6
// _includes/layout/post.njk

---
layout: layouts/base.njk
templateClass: tmpl-post
---
<span>{{ content | wordcount }}</span>
<span>{{ content | wordcount | readtime }}</span>
```
{% endraw %}

### What's next?
To start writing blog posts regularly, for starters, thinking of writing one about getting started with React next. Some possible improvements to this page include making it more personal (both in style and content), post drafts, working with the typography, dark mode, support for Sass, hero images, comments sections and social media share images.

## Resources
- [Source for this blog](https://github.com/Levis92/Levis92.github.io/)
- [11ty homepage](https://www.11ty.dev)
- [11ty starter templates](https://www.11ty.dev/docs/starter/)
- [Getting started with Eleventy](https://www.sitepoint.com/getting-started-with-eleventy/)
- [A Deep Dive Into Eleventy Static Site Generator](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/)
- [How to show your template code in 11ty blog posts](https://bryanlrobinson.com/blog/how-to-show-your-template-code-in-11ty-blog-posts/)

*[PWA]: Progressive Web App
*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets
*[SSG]: Static Site Generator
*[RSS]: RDF Site Summary
