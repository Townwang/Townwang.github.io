---
title: 友情链接
layout: default
permalink: /link
---

{% include header.html %}

<div class="g-banner tags-banner {{ site.postPatterns | prepend: 'post-pattern-' }} {{ site.theme-color | prepend: 'bgcolor-' }}" data-theme="{{ site.theme-color }}">
    <h2>欢迎走进我的视野™</h2>
</div>

<main class="tags-content">

    <ul class="tags-list">
        <li>
        <H2>要求</H2>
  <p><h3>三要三不要:</h3></p>
    <p> 一、内容健康、积极向上</p>
    <p> 二、网站内容更新不得少于一周一篇。</p>
    <p> 三、网站首页收录</p>
    <p> 一、含有偏激、危害社会、黄、赌、毒等内容不要</p>
    <p> 二、被K不要</p>
    <p> 二、检测不出友链不要</p>
        <H2>格式</H2>
        <p><h3>友链申请统一格式:</h3></p>
        <p>名称：文科中的技术宅</p>
        <p>链接：<a href="https://townwang.com">https://townwang.com</a></p>
        <p>头像链接:https://townwang.com/assets/img/profile.png</p>
        <p>描述:专注于安卓开发的一名文科生!</p>
         {% include gitment.html %}
        </li>
    </ul>
</main>
{% include footer.html %}