var _ = require("lodash");

function Helper() {
	this.toLower = function(str) {
		return str.toLowerCase();
	}

	this.toPascal = function(str) {
		return this.toFirstUppercase(this.toCamel(str));
	}

	this.toFirstUppercase = function(str) {
		return str[0].toUpperCase () + str.slice(1);
	}

	this.toCamel = function(str) {
		return _.camelCase(str);
	}
}

module.exports = new Helper();