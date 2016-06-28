var gulp = require("gulp");
var plugins = {};
var config = {};

function lint(src) {
	return gulp.src(src)
		.pipe(
			plugins.scssLint({
				"config": config.lint.style
			})
		);
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"style:lint:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("style:lint:<%= apps[app] %>", () => {
	return lint(config.src.<%= apps[app] %>.scss);
});
<% } %>