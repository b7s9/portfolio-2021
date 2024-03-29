---
layout: layouts/project.njk
tags: project
date: 2021-02-01
title: Genre Therapy
slug: genre-therapy
description: A music interview podcast about how artists create songs, inspired by Song Exploder. Produced in Logic Pro. Built in Wordpress. Personal Project.
filters: [audio, dev]
status: Season Two Pre-production
client: WKDU, My Curiosity
tools: [Logic Pro X, Ableton Live 10]
tech: [Wordpress, PHP, CSS, RSS]
link: https://genretherapy.org
images:
    - uri: spotify
      alt: Genre Therapy is distributed to all major podcast platforms
      type: laptop
    - uri: logic-pro
      alt: Editing/Voiceover session in Logic Pro
      type: laptop
---

![Home page on desktop (light and dark modes)]({{site.projectImgURL}}/genre-therapy/laptop/website-home@2x.png)
Home page on desktop (light and dark modes)

## Problem

Interviewing people was one of my favorite parts about running my previous radio show on WKDU. I would call up independent artists all around the world and, using a semi-regular format, ask about their process and influence, etc. However, after a while I noticed that no one really wanted to listen to 40-50 minute interviews, so I looked for a more vibrant format.

I’m a big fan of the Song Exploder format, where listeners get to hear isolated tracks from the final song, and artists talk a bit about their process. Last autumn, I was feeling like Song Exploder wasn’t delivering enough episodes weird songs by indie musicians, so I found a niche to fill.

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/genre-therapy/mobile/site-episode-dark@2x.png" alt="Episode page on mobile (dark mode)" class="m-4">
    <img src="{{site.projectImgURL}}/genre-therapy/mobile/site-episode-light@2x.png" alt="Episode page on mobile (light mode)" class="m-4">
</div>

## Solution

1. Genre Therapy guests are either relatively unknown, or sort of looking into the Pop world from an interesting perspective.
1. Rather than just focusing on influences, songwriting, and production, Genre Therapy brings out more of an artist’s emotional relationships in the context of music, and considers their growth over time.
1. The editing style leans further into hyper-realism, such that the sounds you hear in Genre Therapy are not just explicitly created by the artists, but also contain sound design and compositional elements from me. I find this helps tell a richer story similar to episodes produced by Radiolab from WNYC.

## Production

I spent most of my 2020-2021 winter break scheduling, recording, and editing episodes for season one. I also setup the website and RSS feed. A week before each episode aired, I would listen back, record voiceover, finalize the mix, then create the social media poster. Episodes of Genre Therapy broadcast fortnightly on WKDU and are distributed to podcast platforms the next day.

![Editing/Voiceover session in Logic Pro]({{site.projectImgURL}}/genre-therapy/laptop/logic-pro@2x.png)

## Web Development

As with most of my other projects, I purchased the domain and setup SSL using Certbot’s CLI on a Digital Ocean droplet. Since I get a decent amount of human and bot traffic on the site, I put the site on its own droplet. If it ever crashes, my portfolio and other side projects will still be accessible. I opted for Wordpress due to the speed of setup and content creation, then modified the default theme a bit. Trying to develop a child theme has been way more trouble than it’s worth, so in the future I might develop a theme from scratch.

## Podcast Distribution

I considered a few different 3rd party podcast distributors, but none of them offered the customization or media hosting that I was looking for at a reasonable price point. The exception was Anchor, which is quite comprehensive and completely free, but I refuse to use it on principle of the service being owned and operated by Spotify. Eventually I resolved to do the whole process manually.

![Global Distribution on streaming services]({{site.projectImgURL}}/genre-therapy/laptop/spotify@2x.png)

Since I had already setup an object storage subscription for the [Harry Potter Audiobook Player]({{site.baseURL}}/projects/sleepy-potter), it didn’t cost me any more to use that to host audio for this podcast. It’s not as annoying as I thought it would be to maintain, but there's a huge margin for error if I don't triple check my XML before updating the feed. Another difference is I don’t get download stats for episodes. Based on my experience releasing music and anxiously watching stats, that’s probably for the best.
