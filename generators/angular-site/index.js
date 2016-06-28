"use strict"

var generators = require("yeoman-generator");
var helper = require("../../helpers/helper.js");
var settings = require("./settings.js").values;

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);

		//this.argument("appname", { type: String, required: true });
	},

	initializing: function () {
		console.log("helooo");
		console.log(settings.apps);
	},

	prompting: function () {

	},

	configuring: function () {
	},

	default: function () {

	},

	writing: {
		bowerrc: function () {
			this.copy("_.bowerrc", ".bowerrc");
		},
		editorconfig: function () {
			this.copy("_.editorconfig", ".editorconfig");
		},
		gitignore: function () {
			this.copy("_.gitignore", ".gitignore");
		},
		bower: function () {
			this.fs.copyTpl(
				this.templatePath("_bower.json"),
				this.destinationPath("bower.json"),
				{
					projectName: this.options.projectName,
					author: this.options.author,
					homepage: this.options.homepage,
					keywords: this.options.keywords
				}
			);
		},
		gulp: function () {
			this.copy("_gulpfile.js", "gulpfile.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_config.js"),
				this.destinationPath("gulp/config.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_build/_all.js", "gulp/tasks/build/all.js");
			this.copy("_gulp/_tasks/_copy/_all.js", "gulp/tasks/copy/all.js");
			this.copy("_gulp/_tasks/_copy/_images.js", "gulp/tasks/copy/images.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_copy/_scripts.js"),
				this.destinationPath("gulp/tasks/copy/scripts.js"),
				{
					apps: settings.apps
				}
			);
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_copy/_styles.js"),
				this.destinationPath("gulp/tasks/copy/styles.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_dev/_server.js", "gulp/tasks/dev/server.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_dev/_watch.js"),
				this.destinationPath("gulp/tasks/dev/watch.js"),
				{
					apps: settings.apps
				}
			);
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_html/_compile.js"),
				this.destinationPath("gulp/tasks/html/compile.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_html/_inject.js", "gulp/tasks/html/inject.js");
			this.copy("_gulp/_tasks/_html/_watch.js", "gulp/tasks/html/watch.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_script/_compile.js"),
				this.destinationPath("gulp/tasks/script/compile.js"),
				{
					apps: settings.apps
				}
			);
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_script/_lint.js"),
				this.destinationPath("gulp/tasks/script/lint.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_script/_watch.js", "gulp/tasks/script/watch.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_style/_compile.js"),
				this.destinationPath("gulp/tasks/style/compile.js"),
				{
					apps: settings.apps
				}
			);
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_style/_lint.js"),
				this.destinationPath("gulp/tasks/style/lint.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_style/_watch.js", "gulp/tasks/style/watch.js");
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_test/_compile.js"),
				this.destinationPath("gulp/tasks/test/compile.js"),
				{
					apps: settings.apps
				}
			);
			this.copy("_gulp/_tasks/_test/_run.js", "gulp/tasks/test/run.js");
			this.copy("_gulp/_tasks/_clean.js", "gulp/tasks/clean.js");
		},
		wwwroot: function () {
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_wwwroot/_system.config.js"),
				this.destinationPath("gulp/tasks/wwwroot/system.config.js"),
				{
					apps: settings.apps
				}
			);
		},
		karmaconfig: function () {
			this.copy("_karma.conf.js", "karma.conf.js");
		},
		license: function () {
			this.copy("_LICENSE.md", "LICENSE.md");
		},
		package: function () {
			this.fs.copyTpl(
				this.templatePath("_package.json"),
				this.destinationPath("package.json"),
				{
					projectName: this.options.projectName,
					author: this.options.author,
					homepage: this.options.homepage,
					keywords: this.options.keywords
				});
		},
		readme: function () {
			this.fs.copyTpl(
				this.templatePath("_README.md"),
				this.destinationPath("README.md"),
				{
					projectName: this.options.projectName
				});
		},
		stylelint: function () {
			this.copy("_stylelint.yml", "stylelint.yml");
		},
		tsconfig: function () {
			this.copy("_tsconfig.json", "tsconfig.json");
		},
		tsd: function () {
			this.copy("_tsd.json", "tsd.json");
		},
		tslint: function () {
			this.copy("_tslint.json", "tslint.json");
		}
	},

	conflicts: function () {
	},

	install: function () {
		// http://yeoman.io/generator/actions_install.html
	},

	end: function () {
	}
});