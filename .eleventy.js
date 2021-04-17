
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy("src/images")
  return {
    passthroughFileCopy: true,
    dir: {
      input: "./src",
      output: "./_site",
    },
  }
};
