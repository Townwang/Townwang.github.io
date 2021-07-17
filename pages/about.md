---
title: 关于我
layout: default
permalink: /about
---

{% include header.html %}

<div class="g-banner tags-banner {{ site.postPatterns | prepend: 'post-pattern-' }} {{ site.theme-color | prepend: 'bgcolor-' }}" data-theme="{{ site.theme-color }}">
    <h2>我的个人信息™</h2>
</div>

<main class="tags-content">

    <ul class="tags-list">
             <li>
<H3 class="about-h1">基本信息</H3>
<p>昵称:<strong><span style="color:#00a2e8"> Town</span></strong></p>
<p>性别:<strong><span style="color:#00a2e8">男</span></strong></p>
<p>爱好:<strong><span style="color:#00a2e8">女</span></strong></p>
<p>年龄:<strong><span style="color:#00a2e8">保密</span></strong></p>
<p>职业:<strong><span style="color:#00a2e8">码农</span></strong></p>
<p>婚否:<strong><span style="color:#00a2e8">尚无婚配、如有良配、还望介绍！</span></strong></p>
            </li>
            <li>
<h3 class="about-h2">兴趣爱好</h3>

<p>吃饭、睡觉、看帖子</p>
<p>躺着、坐着、学技术</p>
<p>闲了、待着、敲代码</p>
<p>忙了、工作、改BUG</p>
<p>下班、晚上、录视频</p>
<p>周末、宅着、写博客</p>
            </li>
            <li>
                 <h3 class="about-h6">技能知识</h3>
            <div class="skill" id="skill">
                    </div>
            </li>
            <li>
<h3 class="about-h3">人生理想</h3>
<p>学有所成，成为传说中的大佬！</p>
<p>事业有成，不必总为吃穿发愁！</p>
<p>爱情完美，余生与伴侣无争吵！</p>
<p>生活美满，孩子无忧无虑成长！</p>
            </li>
            <li>
<h3 class="about-h4">开源项目</h3>
<p><a href="https://github.com/Townwang/Log" class="about-a">日志封装：</a> 突破studio4000字符限制 json格式化显示</p>
<p><a href="https://github.com/Townwang/ContactInsert " class="about-a">电话簿封装： </a> 联系人查询是否存在  删除  插入 操作</p>
<p><a href="https://github.com/Townwang/AwemeTown" class="about-a">抖音插件：</a> 破解抖音上传15秒限制，去除广告的Xposed插件【<strong><span style="color:red">停止维护</span></strong>】</p>
<p><a href="https://github.com/Townwang/Town" class="about-a">一点框架：</a> 搭建一半框架 正在想该开源个什么玩意</p>
<p>求start.......</p>
            </li>
            <li>
<h3 class="about-h5">联系方式</h3>

<p>邮箱:<a href="mailto:android@townwang.com" class="about-a">android@townwang.com</a></p>
<p>微博:<a href="https://weibo.com/townwang" class="about-a">文科中的技术宅</a></p>
<p>Twitter:<a href="https://twitter.com/townwang" class="about-a">文科中的技术宅</a></p>
<p>GitHub:<a href="https://github.com/Townwang" class="about-a">Townwang</a></p>
<p>码云:<a href="https://gitee.com/TownWang/events" class="about-a">Townwang</a></p>
<p>Google:<a href="#" class="about-a">android@townwang.com</a></p>
            </li>
            <li>
                 {% include gitment.html %}
            </li>
    </ul>
</main>
 {% include radar.js.html %}
{% include footer.html %}