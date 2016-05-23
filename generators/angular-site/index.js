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
	},

	end: function () {
	}
});