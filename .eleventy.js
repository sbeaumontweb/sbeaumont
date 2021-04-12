
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css')
  return {
    passthroughFileCopy: true,
    dir: {
      input: "./src",
      output: "./_site",
    },
  }
};
