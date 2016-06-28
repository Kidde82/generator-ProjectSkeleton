var gulp = require("gulp");
var plugins = {};
var config = {};

function compile(src, dest, temlateName) {
	return gulp.src(src)
		.pipe(plugins.angularHtmlify())
		.pipe(plugins.ngTemplates({ module: temlateName, filename: `${temlateName}.js`}))
		.pipe(gulp.dest(dest));
}

module.exports = function(callback) {
	plugins = this.opts.plugins;
	config = this.opts.config;

	plugins.runSequence(
		<%_ for (app in apps) { -%>
		"html:compile:<%= apps[app] %>",
		<%_ } -%>
		callback
	);
};
<% for (app in apps) { %>
gulp.task("html:compile:<%= apps[app] %>", () => {
	return compile(config.src.<%= apps[app] %>.html, config.wwwroot.<%= apps[app] %>.path, config.wwwroot.<%= apps[app] %>.templateName);
});
<% } %>