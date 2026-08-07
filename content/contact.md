---
layout: base.njk
title: Contact
permalink: /contact/
extraScripts:
  - /js/contact-form.js
---
<h1 class="page-title">Contact Me</h1>
<!--
  TODO (Alec): replace YOUR_FORM_ID below with your real Formspree form ID.
  1. Sign up free at https://formspree.io using alec@abrooks.dev
  2. Create a new form, it'll give you an endpoint like
     https://formspree.io/f/abcdwxyz
  3. Swap the action="" value below for that URL
  Until this is done, submitting the form will fail (404 from Formspree).
-->
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
