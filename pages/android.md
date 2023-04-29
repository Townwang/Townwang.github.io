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
					<h2 data-v-3a1264aa="">🔨 开源项目</h2>
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
					<a href="https://github.com/townwang" target="_blank" aria-label="View source on GitHub" class="github-corner" data-v-3a1264aa="">
						<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" style="fill:rgba(0,159,232,0.8); color:#fff; position: fixed; top: 58px; border: 0; right: 0;" data-v-3a1264aa="">
							<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" data-v-3a1264aa=""></path>
							<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;" data-v-3a1264aa=""></path>
							<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" data-v-3a1264aa=""></path>
						</svg>
					</a>
				</div>
				<div title="点击查看二维码" class="wechat-box no-dark-mode" style="margin-top:20px;opacity:0.8;" data-v-6f0e2599="">
					<div class="icon-svg icon-svg-wechat" style="height:36px;width:36px;" data-v-39ac1fd5="" data-v-6f0e2599=""></div>
					<div class="title" data-v-6f0e2599="">
						<span class="big" data-v-6f0e2599="">微信扫一扫</span>
						<span class="small" data-v-6f0e2599="">关注我们防止失联</span>
					</div>
					<div class="input-box" data-v-6f0e2599="">
						<div class="icon-svg icon-svg-search" style="height:16px;width:16px;" data-v-39ac1fd5="" data-v-6f0e2599=""></div>
						<span class="name" data-v-6f0e2599="">开源人</span>
					</div>
					<div class="qr-code" data-v-6f0e2599="">
						<div class="icon-svg icon-svg-qr" style="height:30px;width:30px;" data-v-39ac1fd5="" data-v-6f0e2599=""></div>
					</div>
				</div>
				<div class="google-adsense" data-v-344bc0a0="">
					<ins data-ad-client="ca-pub-2453318821399375" data-ad-slot="5285149603" data-ad-format="auto" data-full-width-responsive="true" class="adsbygoogle" style="display:block" data-v-344bc0a0=""></ins>
				</div>
			</div>
			{% include footer.html %}
		</main>
