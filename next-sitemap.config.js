// next-sitemap.config.js
module.exports = {
    siteUrl: "https://biraul-bhumi-calculator.vercel.app", // अपना domain डालो (https जरूरी है)
    generateRobotsTxt: true, // robots.txt भी generate करेगा
    sitemapSize: 5000, // एक sitemap में max कितने URLs हों
    changefreq: "daily", // Google को frequency बताना
    priority: 0.7, // default priority
};
