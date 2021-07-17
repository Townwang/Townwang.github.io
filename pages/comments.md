---
title: 公众号留言
layout: default
permalink: /comments
---

<div class="g-banner tags-banner {{ site.postPatterns | prepend: 'post-pattern-' }} {{ site.theme-color | prepend: 'bgcolor-' }}" data-theme="{{ site.theme-color }}">
    <h2>公众号暂时评论系统™</h2>
</div>

<main class="tags-content">
 <ul class="tags-list">
    <li>
<H2>评论注意事项</H2>
<p>1、<strong><span style="color:#00000061;    font-size: 0.9em;" >需要github账号登录</span></strong></p>
<p>2、<strong><span style="color:#00000061;    font-size: 0.9em;">禁止不良言论</span></strong></p>
<p>3、<strong><span style="color:#00000061;    font-size: 0.9em;">禁止探讨政治</span></strong></p>
 </li>
    <li>
      {% include gitment.html %}
   </li>
    </ul>
</main>
