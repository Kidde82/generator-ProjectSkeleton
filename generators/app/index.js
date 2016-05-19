"use strict"

var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
	},

	initializing: function () {
		this.templatesPath = `${__dirname}/../templates`;
	},

	prompting: function () {
	},

	configuring: function () {
	},

	default: function () {
	},

	writing: {
		gulpfile: function() {
			console.log("gulpfile");
			this.copy(`${this.templatesPath}/_gulpfile.js`, "src/gulpfile.js");
		},
		git: function() {
			console.log("git");
		}
	},

	conflicts: function () {
	},

	install: function () {
	},

	end: function () {
	}
});