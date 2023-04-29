---
layout: default
home-title: Android开发
description: 『企业中总结的经验』『编码中遇到的困难』『生活中看到的经典』『交流中学到的方法』
permalink: /android
---

{% include header.html %}

<main class="theme-default-content custom content__default">
				<div>
					<div class="features" style="margin-top: 0;padding-top: 0;border-top: none;">
						{% assign sorted_pages = site.categories.android | sort:"weight" %}
						{% for post in sorted_pages %}
						<div class="feature">
							<h2>
								<a data-instant="" href="{{ post.url }}" target="_blank" class="flex">
									<div class="icon-svg mr10 icon-svg-panlinker" style="height:1.4rem;width:1.4rem;"></div>
									{{ post.title }}
									{% for tag in post.tags %}
									{% for c in post.class %}
									<span class="{{ c }}">{{ tag }}</span>
									{% endfor %}
									{% endfor %}
								</a>
							</h2>
							{% for des in post.description %}
							<p>{{ des }}</p>
							{% endfor %}
							<div class="icon-svg icon-svg-tm" style="height:16px;width:16px;"></div>
							<p></p>
						</div>
						{% endfor %}
					</div>
				</div>
			</div>
</main>
{% include footer.html %}
