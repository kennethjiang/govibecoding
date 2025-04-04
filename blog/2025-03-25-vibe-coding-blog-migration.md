---
slug: vibe-coding-blog-migration
title: "From Hashnode to Docusaurus: A Vibe Coding Journey"
authors: [kennethjiang]
tags: [vibe-coding, docusaurus, blog, seo, development]
---

![From Hashnode to Docusaurus: A Vibe Coding Journey](/img/blog/vibe-coding-blog-migration-cover.jpg)

## Context

Recently, I dove into creating a blog site dedicated to my new passion: vibe coding. I've previously built projects using Docusaurus, a React-based framework optimized for documentation and blogs, making it a natural choice for this project. Initially, I considered using Hashnode for hosting based on Deepseek's recommendation. At first glance, Hashnode appeared to be a great fit—it's easy to set up, visually appealing, and community-oriented. However, a deeper dive revealed serious SEO issues, specifically broken sitemaps and landing pages that couldn't be indexed by Google. Given the importance of SEO for visibility, this was a significant drawback. With that, I quickly decided to migrate my content from Hashnode to a more reliable solution—Docusaurus.

<!--truncate-->

## Details

The session was an immersive vibe coding experience, where I primarily interacted with my setup: Cursor integrated with Claude 3.7 Sonnet. This setup is powerful because Cursor provides an efficient and intuitive code-editing experience while Claude 3.7 Sonnet offers advanced, responsive, and nuanced AI assistance. Here's a detailed breakdown of every step, including all prompts used and how well the AI assisted:

I started with the initial setup:

```bash
create a blog site govibecoding using docusaurus. make the blog page the home page
```

Immediately, I ran into a versioning issue related to Node.js:

```bash
it failed. you should use `nvm use v20.15.1` to switch node version first
```

This is common when juggling multiple Node projects. Thankfully, this prompt was resolved quickly. To avoid future issues, I formalized this setup by creating an `.nvmrc` file:

```bash
add .nvmrc to the repo
```

Next, I noticed an unnecessary GitHub link on the site's navigation bar, detracting from the clean look I aimed for:

```bash
remove the "github" link from the site
```

Claude seamlessly addressed this. Afterward, I enhanced the site's visual consistency by centering the navigation bar and tweaking the logo:

```bash
make the nav bar justified at the center. Also change the logo to spell "VC" instead of "GV"
```

This step was handled perfectly, and I made sure the favicon matched:

```bash
use the same image for favicon too
```

For author attribution, I streamlined authorship details to reflect my identity clearly across all blog posts:

```bash
create an author "Kenneth Jiang". image url: https://medium.com/@kennethjiang. replace the authors in all blogs with this author
```

Claude again executed this flawlessly, simplifying future blog maintenance.

Version control setup with GitHub was straightforward but critical for tracking progress and collaborating later:

```bash
create a public govibecoding github repo under my "kennethjiang" account. add .gitignore file to current folder. commit and push
```

This workflow was seamless, ensuring the site was safely versioned and accessible publicly.

SEO groundwork was my next priority, crucial for blog visibility:

```bash
create sitemap and make sure google can crawl the sitemap
```

Claude generated a robust sitemap, and a quick verification confirmed Google's ability to crawl it effectively.

To reinforce consistency in my development environment and prevent node version mismatches, I instructed Claude to set up a cursorrules file:

```bash
create a cursorrules file so that you know you should run "nvm use" before you use a node command
```

This proactive approach paid off smoothly, ensuring I wouldn't face unnecessary debugging later.

However, the biggest challenge emerged with enhancing SEO features, particularly integrating advanced additions such as JSON-LD structured data, Progressive Web App (PWA) capabilities, and comprehensive meta tags:

```bash
Add the addons/features to docusaurus project so that it'll help with the SEO
```

This was where vibe coding revealed its imperfections. Initially, the attempt caused unexpected JavaScript memory leaks and repetitive site crashes—what I termed the "death loop." After several frustrating iterations and reattempts, I decided to revert to the last stable commit. Starting fresh with a new LLM session, I carefully approached this task incrementally:

```bash
Add the addons/features to docusaurus project so that it'll help with the SEO
```

Eventually, after more than 20 LLM queries and experimenting with three distinct approaches, the issues were resolved. This experience highlighted the importance of incremental changes and regular commits, allowing quicker recovery from problematic scenarios.

Finally, refining SEO metadata proved essential. Initially, Claude misunderstood the meaning of "vibe coding," interpreting it loosely as "coding with good vibes." To clarify:

```bash
you misunderstood what "vibe coding" means. this is the real meaning of vibe coding. change your description and keywords accordingly:
```

Claude quickly corrected course, providing highly optimized SEO keywords and descriptions, significantly boosting site discoverability around "vibe coding."

## Learning

This comprehensive vibe coding session provided several important insights:

- Overall, setting up a fully functioning blog, migrating two existing posts from Hashnode, and completing the SEO enhancements took several hours. Notably, about half of that time involved waiting for AI processing or debugging issues.

- Compared to other vibe coding experiences, this session involved less waiting due to my familiarity with Docusaurus. However, the complexities around SEO still consumed significant time.

- Major successes included integrating advanced SEO features—structured data with JSON-LD and Progressive Web App capabilities—features I've struggled significantly with in past manual setups.

The session also reinforced essential vibe coding best practices:

- Incremental and frequent commits were invaluable. I quickly recovered from the challenging "death loop" scenario by reverting to a stable commit and restarting carefully.

- While vibe coding drastically reduces manual coding tasks, careful oversight remains crucial. Accepting AI-generated code without review can introduce significant risks.

- A standout wishlist item is automated web page testing. A proactive testing agent that immediately alerts to SEO or functionality breaks would enhance efficiency tremendously.

Ultimately, vibe coding reshapes my developer experience significantly. It emphasizes guiding AI through clear, incremental prompts, diligently reviewing outputs, and strategically planning each step. While not perfect, the trade-offs are favorable—accelerating development, reducing manual coding workload, and fundamentally changing how I build software.