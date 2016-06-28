var gulp = require("gulp");
var plugins = {};
var config = {};

function lint(src) {
	return gulp.src(src)
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report("verbose"))
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"script:lint:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("script:lint:<%= apps[app] %>", () => {
	return lint(config.src.<%= apps[app] %>.ts);
});
<% } %>