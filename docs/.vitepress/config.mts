import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "开源人",
  description: "一个汇聚了各种安卓开源的小站，更多开源请搜索公众号👉“开源人”",
  lang: "zh-Hans",
  base: '/',
  themeConfig: {
      logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Townwang' }
    ],
	sitemap: {
		hostname: 'https://townwang.com'
	},
    footer: {
      copyright: "Copyright  © 2012-2025 <a href='https://github.com/Townwang'>Townwang</a>"
    },
  }
})
