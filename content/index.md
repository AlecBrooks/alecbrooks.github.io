---
layout: base.njk
title: Home
permalink: /
---
<div class="about-grid">
  <div class="post terminal-window">
    <div class="term-titlebar">
      <span class="term-dot term-dot-red"></span>
      <span class="term-dot term-dot-yellow"></span>
      <span class="term-dot term-dot-green"></span>
      <span class="term-titlebar-label">about me</span>
    </div>
    <div class="window-body">
      {% include "partials/h-card.njk" %}
      <p>Hello! Thanks for stopping by.</p>
      <p>My name is Alec. I'm currently studying data science, but my interest in computers and technology goes much deeper than just analyzing datasets. I love research, programming, building things, setting up servers, networking, ricing out Hyprland, and generally figuring out how things work beneath the surface. I'm usually working on some project that gives me an excuse to learn something new and potentially useless.</p>
      <p>I also love working with others, especially when the problem is open-ended and everyone brings different ideas to the table. This site is a place to collect some of my projects and experiments, along with a small blog where I write about research I've been involved in and whatever thoughts, ideas, or questions I happen to be exploring along the way.</p>
      <p>Thanks for stopping by, and if you have an idea involving data, computers, or technology, don't hesitate to reach out!</p>
      {% include "partials/social-links.njk" %}
    </div>
  </div>
  <div class="post terminal-window">
    <div class="term-titlebar">
      <span class="term-dot term-dot-red"></span>
      <span class="term-dot term-dot-yellow"></span>
      <span class="term-dot term-dot-green"></span>
      <span class="term-titlebar-label">alec@web: ~</span>
    </div>
    <div class="term-body">
      <p class="term-line"><span class="term-prompt">alec@web</span><span class="term-tilde">:~$</span> fastfetch</p>
      <div class="fastfetch">
        <pre class="ascii-logo">   ██   
  ████  
 ██  ██ 
 ██  ██ 
 ██████ 
 ██  ██ 
 ██  ██ 
 ██  ██ </pre>
        <div class="fastfetch-info-col">
          <p class="fastfetch-header">alec@web</p>
          <p class="fastfetch-rule">-----------------</p>
          <div class="fastfetch-info">
            <p><span class="ff-label">location</span>: reno, nv</p>
            <p><span class="ff-label">role</span>: data science student, programmer, researcher</p>
            <p><span class="ff-label">skills</span>: <span class="ff-skills">Python&nbsp;&nbsp;&middot;&nbsp;&nbsp;SQL&nbsp;&nbsp;&middot;&nbsp;&nbsp;R&nbsp;&nbsp;&middot;&nbsp;&nbsp;C++&nbsp;&nbsp;&middot;&nbsp;&nbsp;VBA&nbsp;&nbsp;&middot;&nbsp;&nbsp;Tableau&nbsp;&nbsp;&middot;&nbsp;&nbsp;Power BI</span></p>
            <p><span class="ff-label">projects</span>: {{ githubRepos.length }}</p>
            <p><span class="ff-label">commits</span>: {{ githubStats.commitCount or "n/a" }}</p>
            <p><span class="ff-label">resume</span>: <a href="/files/resume.pdf" target="_blank">resume.pdf</a> &check;</p>
          </div>
        </div>
      </div>
      <p class="term-line"><span class="term-prompt">alec@web</span><span class="term-tilde">:~$</span><span class="term-cursor">_</span></p>
    </div>
  </div>
</div>
<ul>
  <li class="post">
    <ul class="staticCarousel">
      <li>
        <a href="/img/certificates-certifications/Coursera 4ZE7AJ45X2SQ-1.png" target="_blank">
          <img src="/img/certificates-certifications/Coursera 4ZE7AJ45X2SQ-1.png" alt="Google Data Analytics Certificate">
        </a>
      </li>
      <li>
        <a href="/img/certificates-certifications/NCLabs-1.png" target="_blank">
          <img src="/img/certificates-certifications/NCLabs-1.png" alt="NCLabs certificate">
        </a>
      </li>
      <li>
        <a href="/img/certificates-certifications/Year 3 Data Analytics Internship Alec Brooks-1.png" target="_blank">
          <img src="/img/certificates-certifications/Year 3 Data Analytics Internship Alec Brooks-1.png" alt="Data Analytics Internship certificate">
        </a>
      </li>
    </ul>
  </li>
</ul>
