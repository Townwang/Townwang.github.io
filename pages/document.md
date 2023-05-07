---
layout: default
home-title: 文档资源
description: 『开发文档』『开源文档』『搜集书籍』『自看书籍』
permalink: /document
---

{% include header.html %}
<main aria-labelledby="main-title" class="home">
			<div class="theme-default-content custom content__default">
				<div>
					<div class="features" style="margin-top: 0;padding-top: 0;border-top: none;">
						{% assign sorted_pages = site.categories.document | sort:"weight" %}
						{% for post in sorted_pages %}
						<div class="feature">
								<a href="{{ post.url }}" target="_blank" class="flex">
									{{ post.title }}
									{% for tag in post.tags %}
									{% for c in post.class %}
									<span class="{{ c }}">{{ tag }}</span>
									{% endfor %}
									{% endfor %}
								</a>
							<p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 40}}<time class="post-date" datetime="{{ post.date | date:"%y-%m-%d" }}">{{ post.date | date_to_string }}</time></p>
						</div>
						{% endfor %}
					</div>
					<!--<div class="tip">提示：末尾带有 <div class="icon-svg icon-svg-tm" style="height:16px;width:16px;"></div> 图标的表示脚本</div>-->
				</div>
			</div>
			{% include footer.html %}

</main>
