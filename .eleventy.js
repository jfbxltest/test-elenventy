module.exports = function(eleventyConfig){
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