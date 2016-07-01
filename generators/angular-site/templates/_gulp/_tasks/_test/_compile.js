var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	var tsProject = plugins.typescript.createProject("tsconfig.json");
	var result = gulp.src([src])
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
		"test:compile:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("test:compile:<%= apps[app] %>", () => {
	return compile(config.src.<%= apps[app] %>.spec, config.build.<%= apps[app] %>.path);
});
<% } %>