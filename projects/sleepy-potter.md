---
layout: layouts/project.njk
tags: project
date: 2021-01-01
title: Harry Potter Sleepytime Player
slug: sleepy-potter
description: A website designed to help my friend fall asleep to the Harry Potter audiobooks. Built with React, TailwindCSS, & Bash. Personal Project.
filters: [dev, ui]
status: Released
client: My Friend, My Curiosity
tools: [Sketch]
tech: [React, TailwindCSS, Bash]
link: https://sleepy-potter.b7s9.com
images:
    - uri: player-dark
      alt: Audio player on mobile (dark)
      type: mobile
    - uri: player-light
      alt: Audio player on mobile (light)
      type: mobile
---

![Affirmation on desktop (light and dark modes)]({{site.projectImgURL}}/sleepy-potter/laptop/affirmation@2x.png)

<h2>Problem</h2>
<p>I was talking with a close friend about ways we relax before bed, and she disclosed that she’s been listening to the Harry Potter audio books every night for the past five years or so. I tried out one of the free listening websites she sent me (It seems like HP is almost de facto public domain at this point lol), and I was annoyed by the massive ads and tiny touch targets for audio playback. Peeking under the hood, there were also way too many trackers on the page, for a service I knew I could provide fairly easily.</p>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/sleepy-potter/mobile/affirmation-dark@2x.png" alt="A self-affirmation is required to progress (dark)" class="m-4">
    <img src="{{site.projectImgURL}}/sleepy-potter/mobile/affirmation-light@2x.png" alt="A self-affirmation is required to progress (light)" class="m-4">
</div>

<h2>Solution</h2>
<p>Before this project I had only used React in earnest once or twice for some hello world projects, so this was a great opportunity to make something practical with it. This was also my first project with TailwindCSS, and boy was it love at first sight! (It is infinitely better than Bootstrap in almost every way). From there, I converted the audio into a usable format, and added some quality of life improvements to the UI for pre-sleep listening.</p>
<p>A notable feature I prepended to the audio player is a self-affirmation composer. I discuss this idea more in the <a href="{{site.baseURL}}/projects/ottd">One Thing to Do</a> project page. TLDR: by reinforcing self-compassion prior to habitual behavior, people tend to associate more joy with the behavior. Over long periods of usage the effects can be profound.</p>

![Audio player on desktop (light and dark modes)]({{site.projectImgURL}}/sleepy-potter/laptop/player@2x.png)

<h2>Data transformation</h2>
<p>First, I grabbed an “educational” copy of the Harry Potter audio books read by Jim Dale. The challenge was to tag and index 7 audio books of roughly 1gb worth of mp3 files without wasting an entire day. I whipped up a Bash script to parse each file name and print out the chapter number, chapter title, and relative path/filename as a JSON object. The script is ugly, and despite the time it took to develop, I probably saved 4 hours of tedious data entry, so I’m happy with that win. Altogether, it took me about 2.5 hours to process the data into a JSON file and upload the audio to my Digital Ocean object storage.</p>

<h2>Front End</h2>
<p>As mentioned my <a href="{{site.baseURL}}/projects/soundcheck">Soundcheck</a> project recap, the webAudioAPI can be a bit unfriendly without a JS wrapper/library of some sort. I experimented with a few media players for React, and found one which offered superior customization and great documentation. Using the library, I was able to dynamically swap source URI’s based on dropdown selections for book and chapter. The client preloads the chapter audio on selection, which is great for users, but costs me a few extra cents from DigitalOcean if they’re feeling indecisive.</p>
<p>TailwindCSS makes it easy to develop light and dark themes in tandem, so I did that as well. In hindsight, perhaps I should have only developed a dark theme, since this site is primarily meant to be used prior to falling asleep, where it would be preferable to not have a blinding white background. For the learning experience, I’m glad I did both, though.</p>
<p>As an aside, while working on this UI, I found out that the <code>media</code> attribute of a picture’s <code>&lt;source&gt;</code> is for any media query, not just device width. With that I was able to swap out light and dark versions of the site’s logo on the home page, in accordance with system color theme preference, using just HTML. Gotta love the W3C.</p>
<p>In a future version, I plan to add a localStorage token that bookmarks the last played chapter and asks users if they’d like to continue where they left off.</p>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/sleepy-potter/mobile/player-dark@2x.png" alt="Audio player on mobile (dark)" class="m-4">
    <img src="{{site.projectImgURL}}/sleepy-potter/mobile/player-light@2x.png" alt="Audio player on mobile (light)" class="m-4">
</div>

<h2>Feedback</h2>
<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>do you have any feedback about the harry potter audio book website thing i could toss into my writeup of the project?</p>
    <figcaption class="not-italic">&mdash; Ben</figcaption>
</blockquote>
<blockquote class="italic pl-4 border-l-2 border-gray-400 my-6">
    <p>Yes sure! I don’t know what the “seek” button means, and I wish there were a sleep timer shorter than the episode length
        <i class="fas fa-heart text-red-600"></i>
        but otherwise the controls are great!</p>
    <p>And I love the bedtime thought</p>
    <figcaption class="not-italic">&mdash; Ellie</figcaption>
</blockquote>

<p>From this feedback I removed the “seek” control, which was meant to allow quick scrubbing through the file but was broken on ios, along with the volume slider. Gone are the days when Webkit used to be the premiere browser engine, lol.</p>
<p>I also added in a sleep timer which pauses the audio after the timer runs out.</p>
