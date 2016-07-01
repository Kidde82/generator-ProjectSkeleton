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
		bsConfig: function () {
			this.copy("_bs-config.json", "bs-config.json");
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
			this.fs.copyTpl(
				this.templatePath("_gulp/_tasks/_copy/_html.js"),
				this.destinationPath("gulp/tasks/copy/html.js"),
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
				this.templatePath("_wwwroot/_systemjs.config.js"),
				this.destinationPath("wwwroot/systemjs.config.js"),
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
		tslint: function () {
			this.copy("_tslint.json", "tslint.json");
		},
		typings: function () {
			this.copy("_typings.json", "typings.json");
		},
		index: function () {
			this.copy("_src/_index.html", "src/index.html");
		},
		appComponentHtml: function () {
			this.copy("_src/_apps/_app/_app.component.html", "src/apps/app/app.component.html");
		},
		appComponentScss: function () {
			this.copy("_src/_apps/_app/_app.component.scss", "src/apps/app/app.component.scss");
		},
		appComponentTs: function () {
			this.copy("_src/_apps/_app/_app.component.ts", "src/apps/app/app.component.ts");
		},
		commonScss: function () {
			this.copy("_src/_apps/_common/_colours.scss", "src/apps/common/colours.scss");
		},
		mainTs: function () {
			this.copy("_src/_apps/_main/_main.ts", "src/apps/main/main.ts");
		},
		servicesSampleService: function () {
			this.copy("_src/_apps/_services/_sample.service.ts", "src/apps/services/sample.service.ts");
		},
		startpageComponentHtml: function () {
			this.copy("_src/_apps/_startpage/_startpage.component.html", "src/apps/startpage/startpage.component.html");
		},
		startpageComponentScss: function () {
			this.copy("_src/_apps/_startpage/_startpage.component.scss", "src/apps/startpage/startpage.component.scss");
		},
		startpageComponentTs: function () {
			this.copy("_src/_apps/_startpage/_startpage.component.ts", "src/apps/startpage/startpage.component.ts");
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