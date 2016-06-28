var gulp = require("gulp");

module.exports = function() {
	var plugins = this.opts.plugins;
	var config = this.opts.config;

<% for (app in apps) { %>
	gulp.watch(config.src.<%= apps[app] %>.html, ["html:watch"]);
	gulp.watch([config.src.<%= apps[app] %>.ts, `!${config.src.<%= apps[app] %>.spec}`], ["script:watch"]);
	gulp.watch(config.src.<%= apps[app] %>.scss, ["style:watch"]);
<% } %>
};