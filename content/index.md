---
layout: base.njk
title: Home
permalink: /
---
<div class="about-grid">
  <div class="post">
    {% include "partials/h-card.njk" %}
    <p>Hello! Thanks for stopping by.</p>
    <p>My name is Alec. I'm currently studying data science, but my interest in computers and technology goes much deeper than just analyzing datasets. I love research, programming, building things, setting up servers, networking, ricing out Hyprland, and generally figuring out how things work beneath the surface. I'm usually working on some project that gives me an excuse to learn something new and potentially useless.</p>
    <p>I also love working with others, especially when the problem is open-ended and everyone brings different ideas to the table. This site is a place to collect some of my projects and experiments, along with a small blog where I write about research I've been involved in and whatever thoughts, ideas, or questions I happen to be exploring along the way.</p>
    <p>Thanks for stopping by, and if you have an idea involving data, computers, or technology, don't hesitate to reach out!</p>
    {% include "partials/social-links.njk" %}
  </div>
  <div class="post terminal-card">
    <div class="term-block">
      <p class="term-cmd">whoami</p>
      <p class="term-output">alec &mdash; data science student &amp; casino surveillance agent</p>
    </div>
    <div class="term-block">
      <p class="term-cmd">cat location.txt</p>
      <p class="term-output">reno, nv</p>
    </div>
    <div class="term-block">
      <p class="term-cmd">ls skills/</p>
      <p class="term-output">sql&nbsp;&nbsp;python&nbsp;&nbsp;r&nbsp;&nbsp;vba&nbsp;&nbsp;c++&nbsp;&nbsp;tableau&nbsp;&nbsp;power-bi</p>
    </div>
    <div class="term-block">
      <p class="term-cmd">cat experience.txt</p>
      <p class="term-output">
        surveillance agent, peppermill resort (2018&ndash;present)<br>
        data science intern, unlv air-quality research (2025)<br>
        co-author, published ecology research (2026)
      </p>
    </div>
    <div class="term-block">
      <p class="term-cmd">cat education.txt</p>
      <p class="term-output">
        data science, tmcc (2023&ndash;present)<br>
        google data analytics certificate (2023)
      </p>
    </div>
    <div class="term-block">
      <p class="term-cmd">curl -O resume.pdf</p>
      <p class="term-output">saved &rarr; <a href="/files/resume.pdf" target="_blank">resume.pdf</a> &check;</p>
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
