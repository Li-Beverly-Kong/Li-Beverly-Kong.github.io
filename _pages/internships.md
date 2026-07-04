---
layout: archive
title: "Internships"
permalink: /internships/
author_profile: true
---

<section class="page-hero">
  <p class="eyebrow">Internships</p>
  <h1>Internships & practice</h1>
  <p>这里用于展示实习、研究助理、项目合作、实验室实践或产品原型经历。每段经历都可以作为 `_internships/` 里的一个 Markdown 条目维护。</p>
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
      <p>用 2-3 句说明你的角色、项目目标、使用方法、交付成果，以及它如何连接你的研究兴趣。</p>
    </article>
  </div>
{% endif %}
