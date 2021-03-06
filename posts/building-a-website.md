---
createdOn: "2021-04-11T12:33:15.869Z"
id: 0
title: Building a personal website
---

I'm starting this blog with a bit of dogfooding (i.e. writing about the process of setting up this website). I was considering using a static site generator
like Hugo or Jekyll, but a bit of searching brought me to [Next.js](https://nextjs.org/), which can also generate static HTML. I'm already familiar with React,
so it seemed like a natural choice. There's also Gatsby, which seems to be able to do much of the same, but the GraphQL-for-everything approach seemed a little
overkill for my use case.

For styling, I'm using [TailwindCSS](https://tailwindcss.com/), which I've used before and really enjoyed. It's really nice for someone who is not a designer (me)
to have a toolbelt of pre-selected colors, spacings, sizes and so on. I didn't feel like using a full-on CSS framework like Bootstrap or Semantic.UI and I'm not
creative enough to come up with my own design system. Tailwind is a great middleground here.

As for hosting, I chose Vercel. It's really easy to set up and the automated deployment from GitHub is really handy. Also, it has a free hobby-tier plan, which
is nice. I would also be able to deploy to a small VPS that me and a friend pay for, but the ease of use is definitely better here.

The source code for this site is available [here](https://github.com/GyrosOfWar/martin.tomasi.xyz).
