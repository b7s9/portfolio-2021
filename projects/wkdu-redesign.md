---
layout: layouts/project.njk
tags: project
date: 2021-04-01
title: WKDU Site Redesign
slug: wkdu-redesign
description: Long term research and redesign of WKDU’s decade’s old website serving DJ’s, executive staff, and Philadelphia listeners. Built in React/Next.js with Tailwind. Personal/Pro-bono project.
filters: [ux, ui, dev]
status: pre-alpha
client: WKDU
tools: [Figma, Miro, Affinity Designer, Sketch, Excalidraw, Gsuite]
tech: [React, Rough.js, Next.js]
images:
    - uri: handdrawn-concept
      alt: Handdrawn component sketch concept for new aesthetic
      type: laptop
    - uri: geometric-concept
      alt: Geometric component sketch concept for new aesthetic
      type: laptop
---

<h2>Problem</h2>
<p>The current iteration of <a href="https://wkdu.org" target="_blank" rel="noopener noreferrer">wkdu.org</a> was built in the mid 2000’s and now runs on unsupported versions of Drupal and PHP. On top of this, the user experience is a royal pain for both public and internal usage. It is also riddled with hacks and bugs, and aesthetically looks a little bit <em>too</em> “college radio”.</p>

<h2>Solution</h2>
<p>While I was station manager, Peter Liu (WKDU web admin) had expressed to me an interest in tackling the project, but only felt equipped to handle the data and coding side of the project. With my ability to lead the research and design aspects, in winter of 2020, Peter, Natalie (Personnel director), and I finally dug into rebuilding this monolithic site.</p>

![Results from a navigation card sorting session]({{site.projectImgURL}}/wkdu-redesign/laptop/card-sort-sample@2x.png)

<h2>Initial Research</h2>
<p>Most of my time on this project in early-mid 2020 was spent conducting contextual inquiry, interviews &amp; surveys about functionality and design of the existing WKDU website. By the end of the year, we compiled a spreadsheet of 113 features and fixes requested by participants. Each item contains notes, possible solutions, relevant components, relevant scope, relevant audience, and issue severity (ranging from “Scope creep” to “Blocks user goal completely”).</p>

![Journey map of schedule creation experience for program director]({{site.projectImgURL}}/wkdu-redesign/laptop/journey-map-schedule@2x.png)

![The result of a collaborative design session with program director]({{site.projectImgURL}}/wkdu-redesign/laptop/schedule-component-sketch@2x.png)

<h2>Concept Design</h2>
<p>To gain a bit of momentum on the project I started with aesthetics, so I did a bit of additional research to gauge the most important design pillars, based on a scale of my own design. Essentially, users compare several concepts like “Organic” vs. “Synthetic” and “Experimental” vs. “Conventional” on a Likert scale. Then, they provided as much free-response as desired. In my insights presentation to the exec staff, I made sure to cherry pick lots of quotes from members, so everyone could feel part of the process.</p>
<p>I made three different aesthetic concepts for the project. One geometric, one organic/hand-drawn, and a modern <a href="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6" target="_blank" rel="noopener noreferrer">Neuomorphic</a>. Based on the research data, I suggested that the hand-drawn design concept would be preferable to the overall group, and most execs seemed fairly excited about it. On the development side we've been exploring Rough.js as an option for hand-drawn-like lines, but are wary of stability issues for whomever takes over this site's development from us in 10 years or so.</p>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/program-page@2x.png" alt="Concept for now playing page with program info" class="m-4">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/home-page@2x.png" alt="MVP concept for home page with easier access to our content" class="m-4">
</div>

![Merch grid embedded on new WKDU website]({{site.projectImgURL}}/wkdu-redesign/laptop/merch-page-mvp@2x.png)

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/schedule-concept@2x.png" alt="Schedule view concept for minimum viable alpha" class="m-4">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/donate-page@2x.png" alt="MVP concept for clearer Donation instructions" class="m-4">
</div>

<h2>Content Prioritization Research</h2>
<p>During WKDU's 50th anniversary marathon I conducted an in-person card sorting survey to get a range of opinions on top-level navigation and content structure. From this I uncovered a few key content groupings: Philly/Live Events, Broadcast Content, and Ethos/Family. Participants seemed to disagree about the importance of each category so each will need to be given equal importance in nagivation. I had predicted the Live Events category but when multiple participants included our blog, in-studios, and interviews in that column, it turned into a more holistic "WKDU's relationship with the Philly music scene" category. An interesting parallel category arised, called "WKDU Original Content", which cut into both Events & Broadcast Content categories. I am scheduling card sorts and interviews with public users in the coming weeks to see how their expectations diverge from internal opinions.</p>

<h2>Alpha Designs</h2>
<p>While the research is going on, I have also been designing and developing the MVP features for an alpha version of the new site in React/Next.js. With the basic functionality in place for the public, this will allow us the flexibility to experiment with designs and progressive enhacements.</p>

<!-- <div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/radial-menu-concept@2x.png" alt="Experimental concept for radial menu" class="m-4">
    <img src="{{site.projectImgURL}}/wkdu-redesign/mobile/menu-concept@2x.png" alt="Mobile menu concept for minimum viable alpha" class="m-4">
</div> -->
