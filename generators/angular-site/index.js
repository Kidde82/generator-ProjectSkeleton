"use strict"

var generators = require("yeoman-generator");
var helper = require("../../helpers/helper.js");

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
					projectName: helper.toLower(this.options.projectName)
				});
		},
		readme: function () {
			this.fs.copyTpl(
				this.templatePath("_README.md"),
				this.destinationPath("README.md"),
				{
					projectName: helper.toPascal(this.options.projectName)
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