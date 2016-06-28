var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest) {
	return gulp.src(src)
		.pipe(
			plugins.sass({
				outputStyle: "compressed"
			}).on("error", plugins.sass.logError))
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"style:compile:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("style:compile:<%= apps[app] %>", () => {
	return compile(config.src.<%= apps[app] %>.scss, config.build.<%= apps[app] %>.path);
});
<% } %>