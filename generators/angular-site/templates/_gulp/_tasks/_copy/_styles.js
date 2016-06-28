var gulp = require("gulp");
var plugins = {};
var config = {};

function copy(src, dest) {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"copy:styles:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("copy:styles:<%= apps[app] %>", () => {
	return copy(config.build.<%= apps[app] %>.css, config.wwwroot.<%= apps[app] %>.path);
});
<% } %>