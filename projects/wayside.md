---
layout: layouts/project.njk
tags: project
date: 2023-11-01
title: Wayside
slug: wayside
description: Wayside is an interactive campfire story. Relax by the fire and listen to the stories of strangers passing through. Original soundtrack on Bandcamp.
filters: [ui, dev, audio]
status: Released
client: Creativity Jam
tools: [Figma, Miro]
tech: [InkJS, Tone.js, Tailwind]
link: https://wayside.fun
# images:
#     - uri: handdrawn-concept
#       alt: Handdrawn component sketch concept for new aesthetic
#       type: laptop
#     - uri: geometric-concept
#       alt: Geometric component sketch concept for new aesthetic
#       type: laptop
---

![Wayside game in progress with chat bubbles]({{site.projectImgURL}}/wayside/laptop/wayside-main@2x.png)

![Wayside completed chat bubbles]({{site.projectImgURL}}/wayside/laptop/wayside-alt@2x.png)

## Results

-   _Extremely_ positive reviews
-   75 unique users in 12 countries (probably more, due to users blocking 3rd party analytics)

## Context

For the last few years, my friend Val and I have been hosting a weekend-long creative jam—like a hackathon—for creative folks in the [2.0 podcast community](https://2pointohpodcast.com/). For 48 hours, we share a discord server and make a creative project. There is no prize other than the satisfaction of making cool shit. The project before Wayside was a [fantasy newpaper archive](https://spaciouscowgirlfantasy.gay/) telling a story from opposing viewports, which I built using a custom blog template.

Val and I do about a month of administrative and design prep work to plan Creativity Jam logistics and generate excitement for the event.

## Solution

We started the weekend with the randomly selected prompts, "Radioactive" and "You made it feel like home". I ran a few workshops in Miro to narrow down the direction and technology. The team consisted of mostly illustrators, a narrative designer, several musicians, and one other programmer, so we felt an interactive website with lots of images, music, and text, was the way to go.

![Explanation of branching choices]({{site.projectImgURL}}/wayside/laptop/wayside-choices@2x.png)

![Early mockup]({{site.projectImgURL}}/wayside/laptop/wayside-early-mockup@2x.png)

![Medium fidelity mockup]({{site.projectImgURL}}/wayside/laptop/wayside-mockup@2x.png)

On the other end of the project, we emerged with a sort of graphic novel with original characters, [original music (available on Bandcamp)](https://creativityjam.bandcamp.com/album/wayside), original story, and a web based game engine to tie it all together.

I did the web designs, visual and audio programming (Lokkij built the core game engine and event cues with Inkjs, which I modified), sound effects, and music. This was my third project using Tone.js, and I would definitely recommend it for ease of use over the Web Audio API. [Wayside Github repository](https://github.com/b7s9/wayside), in case you get a kick out of seeing me merge my own pull requests.

What you see on the game canvas actually isn't a static background, but several transparent sprites layered on top of each other. The game objects or characters are then rendered with the proper z index to appear naturally in the scene. I achieved the flickering fire by animating a "fire glow" sprite's opacity on a ten second loop.

## Issues

I actually did have a mobile design working at one point, but to achieve proper sprite layering and to make sure the game canvas was fully in the viewport, I had to break the mobile layout, and never had the time to fix it. While disappointing to reduce playability, it was necessary to get the project over the finish line.

Trying to organize contributors across global timezones was a big challenge, especially for a 10 month project. Ultimately we just had to be patient with each other and send gentle reminders as needed.

## Feedback

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"...the writing is just so clever and genuinely funny"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"This is super engaging (and somehow soothing too)"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"that was really well put together! nice job to you and the people you worked with"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"hugeeee fan of Soup Witch (I mean, every char as a whole was amazing but those riddles were superb)"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"This game is kinda nutty...Good, just unexpected"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"music is extremely lovely...SO CUTE I'M OBSESSED WITH URIAH”</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"Quirky fun"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"What a thoroughly charming experience! The music in particular really grabbed me."</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"This whole thing is so beautiful i love it. The music cue when the frog man drops off the potted plant is maybe my  favorite but they're all so good. I just played through it twice its so delightful. Gettin that soundtrack asap"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"What a sweet game!!"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"so, I'm not very far into this yet, but I don't need to be to tell you how good it is. please be proud of this"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"When the frog was eating the fly, i thought we were heading towards the occult"</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"I liked the music track a lot...it made me feel warm, since it was a positive story."</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>"Amazing!!!!!!!!!!!!”</p>
</blockquote>

<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>“Wow that game is amazing!!!! No wonder it took 10 months!!”</p>
</blockquote>
