"use strict"

var generators = require("yeoman-generator");
var chalk = require("chalk");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
	},

	initializing: function () {
		// this.templatesPath = `${__dirname}/templates`;
	},

	prompting: function () {
		this.log("Welcome to " + chalk.yellow("MyGeneratorTest"));

		var done = this.async();
		this.prompt([
			{
				type: "list",
				name: "generatorType",
				message: "What do you want to generate?",
				choices: [
					{
						name: "angular-site",
						value: "angular-site"
					},
					{
						name: "angular",
						value: "angular"
					}
				]
			},
			{
				type: "input",
				name: "appname",
				message: "What name should the app have?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			},
			{
				type: "input",
				name: "ngappname",
				message: "What name should the ngapp have?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			}
		]).then(function (answers) {
			// this.log(answers);
			this.generatorType = answers.generatorType;
			this.config.set("appName", answers.appname);
			this.config.set("ngAppName", answers.ngappname);
			this.config.save();
			done();
		}.bind(this));
	},

	configuring: function () {
	},

	default: function () {
	},

	writing: function () {
		if (this.generatorType == "angular-site") {
			this.composeWith("projectskeleton:angular-site", {
				options: {
					appName: this.config.get("appName"),
					ngAppName: this.config.get("ngAppName")
				}
			});
		}
	},

	conflicts: function () {
	},

	install: function () {
	},

	end: function () {
	}
});