---
layout: layouts/project.njk
tags: project
date: 2020-12-12
title: Mint Chocolate Chip Ice Cream Research
slug: mint-chocolate
description: I created an international study to find out what color mint chocolate chip ice cream is expected to be. Analysis in R Studio. Personal Project.
filters: [ux, dev]
status: Complete
client: My curiosity
tools: [Affinity Designer, Illustrator, Gsuite]
tech: [R Studio, Leaflet]
---

<h2>Problem</h2>
<p>I went out to buy mint chocolate chip ice cream one day, and I was surprised that the grocery store had cartons advertising the color as white. I thought, "am I crazy? it should definitely be green." Wondering if this was a local oddity or a global trend, I put together a survey asking Reddit users for their postal code and what color they expected mint chocolate chip ice cream to be.</p>
<p>From here on I'll refer to mint chocolate chip ice cream as <em>MCC-IC</em>.</p>

<h2>Explore the Data</h2>
<iframe src="https://research.b7s9.com/projects/map.html" width="100%" height="540" frameborder="0"></iframe>

<img src="{{site.projectImgURL}}/mint-chocolate/laptop/map@2x.png" alt="Interactive map developed in R Studio using Leaflet">

<img src="{{site.projectImgURL}}/mint-chocolate/laptop/ice-cream-layout@2x.png" alt="Custom map pins including split color designs for indecisive participants">

<h2 class="mt-4">Results</h2>
<p>I received 46 responses with one duplicate and surprisingly no spam, so n=45. I didn't feel this was enough to claim scientific significance representing the global population's views on the matter, so I didn't bother with demographic breakdown, but suffice to say it's majority USA.</p>
<p>Apparently, white MCC-IC is only expected in the USA.</p>
<p>Respondents expected (raw count):</p>
<ul class="list-disc my-4 list-inside">
    <li>green = 43</li>
    <li>white = 5</li>
    <li>teal = 3</li>
</ul>
<p>Note these numbers add up to more than 100% because 5 respondents expected either "white or green", "white or teal". You can see these reflected in the map where I split icon colors in half.</p>

<h2>Method Notes</h2>
<p>I gathered location by asking for USA and UK postal codes. For other countries I placed respondents in their capitol cities. Next time I do an international geographic study like this, I will ask for nearest town/city. It only took me ~30 minutes to copy and paste GPS coordinates from Google Maps so if I ever do something at a broader scale I'll probably have to pay for a GPS conversion/lookup service.</p>
<p>I cleaned and analyzed data using Google Sheets, due to its ease of use. Then I summarized the data using R Studio. I created the interactive map with an R Studio package called <a href="http://rstudio.github.io/leaflet/" target="_blank" rel="noopener noreferrer">Leaflet</a>, a powerful and customizable library with so many cool features I feel like I barely scratched the surface.</p>
