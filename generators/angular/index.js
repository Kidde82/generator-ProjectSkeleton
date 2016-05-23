"use strict"

var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
		console.log("angular", this.options.name);
	},

	writing: {
		gulpfile: function() {
			console.log("angular gulpfile");
			// this.copy(`${this.templatesPath}/_gulpfile.js`, "src/gulpfile.js");
		},
		git: function() {
			console.log("angular git");
		}
	},
});