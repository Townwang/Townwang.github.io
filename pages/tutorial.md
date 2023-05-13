---
layout: default
home-title: 实用教程
description: 『平日所闻』『平日所见』『网络整理』『自己所现』
permalink: /tutorial
---

{% include header.html %}
<main aria-labelledby="main-title" class="home">
			<div class="theme-default-content custom content__default">
				<div>
					<div class="features">
						{% assign sorted_pages = site.categories.tutorial | sort:"weight" %}
						{% for post in sorted_pages %}
							<a class="feature" href="{{ post.url }}">
								<div class="flex">
									{{ post.title }}
									{% for tag in post.tags %}
									{% for c in post.class %}
									<span class="{{ c }}">{{ tag }}</span>
									{% endfor %}
									{% endfor %}
								</div>
							<p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 50}}<time class="post-date" datetime="{{ post.date | date:"%y-%m-%d" }}">{{ post.date | date_to_string }}</time></p>
						</a>
						{% endfor %}
					</div>
					<!--<div class="tip">提示：末尾带有 <div class="icon-svg icon-svg-tm" style="height:16px;width:16px;"></div> 图标的表示脚本</div>-->
				</div>
			</div>
			{% include footer.html %}

</main>
