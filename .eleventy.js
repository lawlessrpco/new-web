module.exports = function (eleventyConfig) {
    // Things to get copied over
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/favicon.ico"); // The favicon, looks better if we have it lmao

    // When we update things, we should reload
    eleventyConfig.addWatchTarget("assets/css");
    eleventyConfig.addWatchTarget("assets/img");
    // We don't 'watch' fontaweomse because it won't change much

    // Some useful shortcodes for cards and shit
    eleventyConfig.addShortcode(
        "Card",
        require("./src/_includes/components/card")
    );
    eleventyConfig.addShortcode(
        "SocialCard",
        require("./src/_includes/components/socialcard")
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
