module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("sortDataByDate", (obj) => {
    const sorted = {};
    Object.keys(obj)
      .sort((a, b) => {
        return obj[a].date > obj[b].date ? 1 : -1;
      })
      .forEach((name) => (sorted[name] = obj[name]));
    return sorted;
  });

  eleventyConfig.addFilter("reverse", (obj) => {
    return obj.reverse();
  });

  eleventyConfig.addHandlebarsHelper("reverse", function (arr) {
    arr.reverse();
  });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "templates",
    },
  }
};