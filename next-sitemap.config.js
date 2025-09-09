/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.thedamllc.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
};
