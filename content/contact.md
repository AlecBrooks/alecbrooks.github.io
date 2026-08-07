---
layout: base.njk
title: Contact
permalink: /contact/
extraScripts:
  - /js/contact-form.js
---
<h1 class="page-title">Contact Me</h1>
<form id="contact-form" action="https://formspree.io/f/xeajeooq" method="POST">
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" name="subject" id="subject" required>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea name="message" id="message" rows="5" required></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
<div id="notification" class="notification"></div>
