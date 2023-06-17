module.exports = function (eleventyConfig) {
    // Things to get copied over
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/favicon.ico"); // The favicon, looks better if we have it lmao

    // When we update things, we should reload
    eleventyConfig.addWatchTarget("assets/css");
    eleventyConfig.addWatchTarget("assets/img");

    // Some useful shortcodes for cards and shit
    eleventyConfig.addShortcode(
        "Card",
        require("./src/_includes/components/card")
    );

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "www",
        },
        templateEngines: ["md", "njk", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
