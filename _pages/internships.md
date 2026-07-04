---
layout: archive
title: "Internships"
permalink: /internships/
author_profile: true
---

<section class="page-hero">
  <p class="eyebrow">Internships</p>
  <h1>Internships & applied research</h1>
  <p>Industry research and engineering work on user growth, decision optimization, and LLM-powered products.</p>
</section>

{% assign internship_count = site.internships | size %}
{% if internship_count > 0 %}
  {% for post in site.internships reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
  <div class="card-list">
    <article>
      <span>Template</span>
      <h2>Research / Product Internship Title</h2>
      <p><strong>Organization</strong> · Season Year</p>
      <p>Internship records will appear here once added to the collection.</p>
    </article>
  </div>
{% endif %}
