import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenApe",
  description: "A hub for diverse Android open-source projects. For more open-source content, search the official account 👉 'OpenApe'",
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
