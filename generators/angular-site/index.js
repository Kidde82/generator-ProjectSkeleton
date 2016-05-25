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
			var strLower = "Hello World"; // helloworld
			console.log(strLower.lower());

			var strUpper = "Hello World"; // HELLOWORLD
			console.log(strUpper.upper());

			var strPascal = "hello World"; // HelloWorld
			console.log(strPascal.pascal());

			var strCamel = "Hello World"; // helloWorld
			console.log(strCamel.camel());

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
					projectName: this.options.projectName
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