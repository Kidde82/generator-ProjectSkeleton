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

		// config to add
		// license
		// keywords

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
				name: "projectName",
				message: "What's the project name'?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			},
			{
				type: "input",
				name: "ngappname",
				message: "What's the name of the app?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			},
			{
				type: "input",
				name: "author",
				message: "What's your name?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			},
			{
				type: "input",
				name: "homepage",
				message: "What's the projects homepage?",
				default: "https://github.com/",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			},
			{
				type: "input",
				name: "keywords",
				message: "Project keywords?",
				when: function (answers) {
					return answers.generatorType == "angular-site";
				}
			}
		]).then(function (answers) {
			// this.log(answers);
			this.generatorType = answers.generatorType;
			for(var answer in answers) {
				this.config.set(answer, answers[answer]);
			}
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
					projectName: this.config.get("projectName"),
					ngAppName: this.config.get("ngAppName"),
					author: this.config.get("author"),
					homepage: this.config.get("homepage"),
					keywords: this.config.get("keywords")
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