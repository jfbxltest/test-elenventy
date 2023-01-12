module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('./src/assets/images/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "_site", 
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}