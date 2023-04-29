---
layout: default
home-title: Android开发
description: 『企业中总结的经验』『编码中遇到的困难』『生活中看到的经典』『交流中学到的方法』
permalink: /android
---

{% include header.html %}

<main class="g-container home-content">
    <div class="article-list">
        {% for post in site.categories.android %}
            <article class="article-item">
                {% if post.cover %}
                <div class="post-cover">
                    {% if post.tags.size > 0 %}
                            {% for tag in post.tags  %}
                            <div class="ribbon">
                    <span>{{ tag }}</span>
                    </div>
                            {% endfor %}
                        {% endif %}
                    <a class="post-link" href="{{ post.url }}" title="{{ post.title }}"></a>
                    <img src="{{ post.cover }}" alt="">
                </div>
                {% endif %}
                <section class="post-preview">
                    <a class="post-link" href="{{ post.url }}" title="{{ post.title }}"></a>
                    <h2 class="post-title">{{ post.title }}</h2>
                    {% if post.subtitle %}
                    <h3 class="post-subtitle">{{ post.subtitle }}</h3>
                    {% endif %}
                    {% if post.subtitle.size==0 or post.subtitle==nil %}
                    <p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 126}}</p>
                    {% endif %}
                </section>
                <footer class="post-meta">
                    <time class="post-date" datetime="{{ post.date | date:"%y-%m-%d" }}">{{ post.date | date_to_string }}</time>
                </footer>
            </article>
        {% endfor %}

        {% if paginator.total_pages > 1 %}
            {% include pageNavs.html %}
        {% endif %}

    </div>

    {%include sidebar.html%}
</main>
{% include footer.html %}
