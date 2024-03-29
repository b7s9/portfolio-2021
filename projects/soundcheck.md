---
layout: layouts/project.njk
tags: project
date: 2020-10-01
title: Soundcheck
slug: soundcheck
description: An audio playback tool for live audio engineers setting up a gig. Built with Web Audio. University/Personal project.
filters: [ui, dev, audio]
status: Beta
client: Drexel University, My Curiosity
tools: [Sketch]
tech: [HTML, CSS, Vanilla JS, Tone.js]
link: https://soundcheck.b7s9.com
images:
    - uri: intro
      alt: Splash screen reminding users to unmute their phone
      type: mobile
    - uri: waveshape
      alt: Waveshape mode allows users to test upper harmonics
      type: mobile
    - uri: stereo
      alt: Stereo mode allows users to test stereo panning
      type: laptop
---

<h2>Problem</h2>
<p>While working as a live audio engineer, a common problem I ran into while setting up for an event was verifying audio inputs and outputs between my gear and the pre-installed gear as quickly as possible. </p>

<h2>Solution</h2>
<p>What started out as a simple university project actually became a very useful tool for me at work. Soundcheck provides a touch interface which synthesizes a tone based on the XY location of the touch in the viewport. For the X axis, there are currently two variables available to affect audio synthesis: stereo and waveshape. Touch input is scaled on a logarithmic curve for a better user experience, so users can access frequency bands more commonly used in sound-checking. </p>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/soundcheck/mobile/intro@2x.png" alt="Splash screen reminding users to unmute their phone" class="m-4">
    <img src="{{site.projectImgURL}}/soundcheck/mobile/waveshape@2x.png" alt="Waveshape mode allows users to test upper harmonics" class="m-4">
</div>

<h2>Haptic Animation</h2>
<p>For this project I figured out how to animate color gradients as a function of mouse and touch input, create micro-interaction animations on mouse and touch events, and convert touch coordinates into audio data inputs.</p>

![Stereo mode allows users to test stereo panning]({{site.projectImgURL}}/soundcheck/laptop/stereo@2x.png)

<h2>Tone.js</h2>
<p>I've used <a href="https://github.com/Tonejs/Tone.js" target="_blank" rel="noopener noreferrer">Tone.js</a> previously for an audio-centric web app I completed, while on internship at  <a href="https://mghus.com/" target="_blank" rel="noopener noreferrer">MGH Baltimore</a>, due to the simplicity it provides as a wrapper for the Web Audio API. The concept of serially chaining envelopes, synthesis and modulation effects comes somewhat naturally to me after making music in a Digital Audio Workstation for many years.</p>
