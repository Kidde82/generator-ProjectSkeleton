var gulp = require("gulp");
var plugins = {};
var config = {};

function copy(src, dest) {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}

module.exports = function (callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"copy:scripts:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("copy:scripts:<%= apps[app] %>", () => {
	return copy([config.build.<%= apps[app] %>.js, `!${config.build.<%= apps[app] %>.spec}`], config.wwwroot.<%= apps[app] %>.path);
});
<% } %>