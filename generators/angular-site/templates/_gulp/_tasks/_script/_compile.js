var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest, typings) {
	var tsProject = plugins.typescript.createProject("tsconfig.json");
	var result = gulp.src([src, typings])
		.pipe(plugins.typescript(tsProject));

	return result.js
		.pipe(plugins.ngAnnotate())
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"script:compile:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("script:compile:<%= apps[app] %>", () => {
	return compile(config.src.<%= apps[app] %>.ts, config.build.<%= apps[app] %>.path, config.typings.definitions);
});
<% } %>