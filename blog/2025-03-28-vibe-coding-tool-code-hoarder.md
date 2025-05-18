---
slug: vibe-coding-tool-code-hoarder
title: "When Your Vibe Coding Tool Becomes a Code Hoarder"
authors: [kennethjiang]
tags: [vibe-coding, cursor, claude, code-quality, duplicate-files]
---

![When Your Vibe Coding Tool Becomes a Code Hoarder](/img/blog/vibe-coding-tool-code-hoarder-cover.png)

## Hook

I've known for a while that vibe coding tools have a knack for cluttering codebases with duplicate files. That's exactly why I kept a close eye on my latest session with Cursor paired with Claude-3.7-sonnet. But even with my vigilance, these AI tools still managed to surprise me—by completely ignoring my explicit instructions to clean up duplicates. Instead of tidying my repository, they left a handful of scripts scattered across directories like forgotten party favors.

"Hey, could you clean up those duplicate files?" I prompted clearly, expecting thoroughness. What I got instead was a comical, frustrating hunt through leftover scripts, turning a routine cleanup into an unexpected treasure hunt.

<!--truncate-->

## Why "Minimal Code" Matters

Minimalism isn't just about looking nice—it's essential for efficient development. Every extra file, script, or snippet adds unnecessary complexity, leading to:

* Increased cognitive load.
* Merge conflicts.
* Surprising CI/CD pipeline failures.

Keeping a lean codebase directly correlates with ease of maintenance, faster debugging, and team productivity. Allowing vibe coding tools to scatter duplicate files unchecked quickly turns straightforward tasks into maddening scavenger hunts.

## The Sloppy Session—A Step-by-Step Walkthrough

Knowing their tendencies, I closely monitored my AI tools during a recent iOS build script session. Predictably, things went sideways fast.

### Prompt 1: "Create helper scripts for the iOS build process."

The AI predictably produced a suite of scripts in two locations:

* `ios/prepare_for_upload.sh`
* `ios/process_archive.sh`
* `ios/strip_bitcode.sh`

Unsurprisingly, Cursor and Claude duplicated these scripts again in an `ios/archive_processing/` directory.

### Prompt 2: "Please delete the duplicates."

The AI confidently assured me:

> The obsolete files in the root iOS directory are:
>
> 1. `prepare_for_upload.sh` - already copied to archive\_processing
> 2. `process_archive.sh` - already copied to archive\_processing
> 3. `strip_bitcode.sh` - already copied to archive\_processing

And it did indeed delete these files—but not all of them.

Double-checking revealed orphaned scripts still lingering:

* `test_hermes_bitcode.sh`
* `exportOptions.plist`

### Prompt 3: "Hey, you missed a couple—clean up the rest."

Cursor and Claude confidently replied again:

> I've removed the duplicate files from the `ios` directory.
> ✓ Deleted `ios/appstore_prep.sh`
> ✓ Deleted `ios/test_hermes_bitcode.sh`
> ✓ Deleted `ios/exportOptions.plist`

But the truth was different. `exportOptions.plist` was still duplicated, stubbornly persisting despite my explicit instructions.

Cue another facepalm.

## What Went Wrong & How to Avoid It

The surprising sloppiness of Cursor and Claude boils down to their limited global context and awareness of the filesystem, as well as drifting attention across prompts. This results in:

* Incomplete cleanup.
* Duplicate files "forgotten" or overlooked.
* Misalignment between AI assurances and reality.

To mitigate these pitfalls, here's some practical advice:

* Always manually review AI-generated commits.
* Commit atomically—smaller, focused changes reveal duplication quickly.
* Combine AI-generated code with pre-commit linting and strict code review checklists.

## Conclusion & Takeaway

Despite knowing the habits of vibe coding tools, I was still taken aback by the stubborn persistence of duplicate files even after clear prompts. Until AI tools gain better filesystem awareness, don't let them run unchecked on your repository. Minimalism is key—so stay vigilant and skeptical when your vibe coder says, "Don't worry, I cleaned that up."

---

Have you had a similar experience? Share your vibe coding horror stories in the comments—I'd love to commiserate and laugh along with you!