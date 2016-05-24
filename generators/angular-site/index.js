"use strict"

var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);

		//this.argument("appname", { type: String, required: true });
	},

	initializing: function () {

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
					appName: this.options.appName
				});
		},
		readme: function () {
			this.fs.copyTpl(
				this.templatePath("_README.md"),
				this.destinationPath("README.md"),
				{
					appName: this.options.appName
				});
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