const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "templates",
    },
  }
};