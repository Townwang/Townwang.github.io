---
layout: default
home-title: 生活感悟
description: 『人生经历』『内心想法』『手中做法』『感悟世界』
permalink: /life
---

{% include header.html %}
<main aria-labelledby="main-title" class="home">
			<div class="theme-default-content custom content__default">
				<div>
					<div class="features" style="margin-top: 0;padding-top: 0;border-top: none;">
						{% assign sorted_pages = site.categories.life | sort:"weight" %}
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
