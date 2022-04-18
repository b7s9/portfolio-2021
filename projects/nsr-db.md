---
layout: layouts/project.njk
tags: project
date: 2020-11-01
title: Night Swim Radio Spins
slug: nsr-db
description: A concept project for independent artists to track their plays on the radio and share on social media. Designed in Figma. Personal Project.
filters: [ui]
status: Concept
client: My Curiosity
tools: [Figma]
link: https://www.figma.com/file/qdTSJialK64oBspTSTBFro/NSR-Database?node-id=0%3A1
images:
    - uri: story-1
      alt: Spotify Wrapped style UI with spins statistic
      type: mobile
    - uri: story-2
      alt: Spotify Wrapped style UI with spins quartile stat
      type: mobile
    - uri: story-3
      alt: Spotify Wrapped style UI with spins ranking
      type: mobile
    - uri: story-finish
      alt: Screen encouraging artists to share their results to promote themselves and Night Swim Radio
      type: mobile
---

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/home@2x.png" alt="Landing page to entice indie musicians to search the database" class="m-4">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/search@2x.png" alt="Users can search all songs, playlists, and artists" class="m-4">
</div>

My friend streams an internet radio show called Night Swim Radio (NSR) a few times per week. His ethos has always been to support independent musicians as best he can. At one point we half-jokingly floated the idea of implementing a way for indie musicians to search through the 200+ show playlists from the NSR website. The playlists are not optimized for search indexing, so I started to imagine what it might look like to have a UI on the spins data.

After taking some notes about what the functionality might look like, how the data would be structured, and how I might scrape the data from his website to get it started, I spent a few hours on these designs. Hopefully, I find them inspirational enough to return to as a development side project in the future.

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/song@2x.png" alt="Spotify Wrapped style UI with spins statistic" class="m-4">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/artist@2x.png" alt="Artist info page with a links to streaming/download, list of every song to air on NSR, and playlists where that artist appears" class="m-4">
</div>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/story-1@2x.png" alt="Song info page with links to collaborators and the playlist where the song first aired on Night Swim Radio" class="m-4">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/story-2@2x.png" alt="Spotify Wrapped style UI with spins quartile stat" class="m-4">
</div>

<div class="flex justify-around flex-wrap">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/story-3@2x.png" alt="Spotify Wrapped style UI with spins ranking" class="m-4">
    <img src="{{site.projectImgURL}}/nsr-db/mobile/story-finish@2x.png" alt="Screen encouraging artists to share their results to promote themselves and Night Swim Radio" class="m-4">
</div>
