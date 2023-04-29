---
layout: default
home-title: Android开发
description: 『企业中总结的经验』『编码中遇到的困难』『生活中看到的经典』『交流中学到的方法』
permalink: /android
---

{% include header.html %}  

<main aria-labelledby="main-title" class="home">
			<div class="theme-default-content custom content__default">
				<div>
					<div class="features" style="margin-top: 0;padding-top: 0;border-top: none;">
						{% assign sorted_pages = site.categories.android | sort:"weight" %}
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
							<p>{{ post.content }}</p>
						</div>
						{% endfor %}
					</div>
					<!--<div class="tip">提示：末尾带有 <div class="icon-svg icon-svg-tm" style="height:16px;width:16px;"></div> 图标的表示脚本</div>-->
				</div>
			</div>
			{% include footer.html %}
</main>
