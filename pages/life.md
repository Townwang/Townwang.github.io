---
layout: default
home-title: 生活感悟
description: 『人生经历』『内心想法』『手中做法』『感悟世界』
permalink: /life
---

{% include header.html %}
<div class="g-banner tags-banner {{ site.postPatterns | prepend: 'post-pattern-' }} {{ site.theme-color | prepend: 'bgcolor-' }}" data-theme="{{ site.theme-color }}">
    <h2>{{ page.description }}</h2>
</div>

<main class="g-container home-content">
    <div class="article-list">
        {% for post in site.categories.life %}
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
            {% include pageNav.html %}
        {% endif %}

    </div>
 {%include sidebar.html%}

</main>

{% include footer.html %}
