---
layout: default
home-title: Android开发
description: 『企业中总结的经验』『编码中遇到的困难』『生活中看到的经典』『交流中学到的方法』
permalink: /android
---

{% include header.html %}

<main aria-labelledby="main-title" class="home">
			<div class="theme-default-content custom content__default">
				<div data-v-3a1264aa="">
					<div class="features" style="margin-top: 0;padding-top: 0;border-top: none;" data-v-3a1264aa="">
						{% assign sorted_pages = site.categories.open | sort:"weight" %}
						{% for post in sorted_pages %}
						<div class="feature" data-v-3a1264aa="">
							<h2 data-v-3a1264aa="">
								<a data-instant="" href="{{ post.url }}" target="_blank" class="flex" data-v-3a1264aa="">
									<div class="icon-svg mr10 icon-svg-panlinker" style="height:1.4rem;width:1.4rem;" data-v-39ac1fd5="" data-v-3a1264aa=""></div>{{ post.title }}
									{% for tag in post.tags %}
									{% for c in post.class %}
									<span class="{{ c }}" data-v-3a1264aa="">{{ tag }}</span>
									{% endfor %}
									{% endfor %}
								</a>
							</h2>
							{% for des in post.description %}
							<p data-v-3a1264aa="">{{ des }}</p>
							{% endfor %}
							<div class="icon-svg icon-svg-tm" style="height:16px;width:16px;" data-v-39ac1fd5="" data-v-3a1264aa=""></div>
							<p></p>
						</div>
						{% endfor %}
					</div>
					<!--<div class="tip" data-v-3a1264aa="">提示：末尾带有 <div class="icon-svg icon-svg-tm" style="height:16px;width:16px;" data-v-39ac1fd5="" data-v-3a1264aa=""></div> 图标的表示脚本</div>-->
				</div>
			</div>
			{% include footer.html %}
		</main>
